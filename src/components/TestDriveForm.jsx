import React, { useState } from 'react';
import { toast } from 'sonner';
import { WhatsappLogo, PaperPlaneTilt } from '@phosphor-icons/react';
import { business, vehicles, waHref } from '../data/siteData';

export default function TestDriveForm({ defaultModel = '' }) {
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    model: defaultModel || vehicles[0]?.name || '',
    date: '',
    message: '',
  });

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const buildMsg = () =>
    `Hello Toyota Zimbabwe,\n\nI'd like to book a test drive.\n\n• Name: ${form.name}\n• Phone: ${form.phone}\n• Email: ${form.email}\n• Vehicle: ${form.model}\n• Preferred date: ${form.date || 'Flexible'}\n${form.message ? `\nNotes: ${form.message}` : ''}\n\nThank you.`;

  const handleSubmit = (channel) => (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.model) {
      toast.error('Please fill in name, phone and vehicle.');
      return;
    }
    const msg = buildMsg();
    if (channel === 'whatsapp') {
      window.open(waHref(msg), '_blank');
    } else {
      const subject = `Test Drive Request — ${form.model}`;
      window.location.href = `mailto:${business.email}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(msg)}`;
    }
    toast.success('Request ready — complete sending in the app that just opened.');
  };

  return (
    <form
      onSubmit={handleSubmit('whatsapp')}
      className="bg-white border border-silver-300 p-6 sm:p-8 space-y-5"
    >
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-[11px] font-condensed tracking-[0.15em] uppercase text-graphite-500 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            value={form.name}
            onChange={update('name')}
            placeholder="Your name"
            className="w-full border border-silver-300 px-4 py-3 text-sm focus:border-toyota-500 focus:outline-none bg-white"
            required
          />
        </div>
        <div>
          <label className="block text-[11px] font-condensed tracking-[0.15em] uppercase text-graphite-500 mb-2">
            Phone *
          </label>
          <input
            type="tel"
            value={form.phone}
            onChange={update('phone')}
            placeholder="+263 ..."
            className="w-full border border-silver-300 px-4 py-3 text-sm focus:border-toyota-500 focus:outline-none bg-white"
            required
          />
        </div>
      </div>

      <div>
        <label className="block text-[11px] font-condensed tracking-[0.15em] uppercase text-graphite-500 mb-2">
          Email (optional)
        </label>
        <input
          type="email"
          value={form.email}
          onChange={update('email')}
          placeholder="you@example.com"
          className="w-full border border-silver-300 px-4 py-3 text-sm focus:border-toyota-500 focus:outline-none bg-white"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-[11px] font-condensed tracking-[0.15em] uppercase text-graphite-500 mb-2">
            Vehicle of interest *
          </label>
          <select
            value={form.model}
            onChange={update('model')}
            className="w-full border border-silver-300 px-4 py-3 text-sm focus:border-toyota-500 focus:outline-none bg-white"
            required
          >
            {vehicles.map((v) => (
              <option key={v.slug} value={v.name}>
                {v.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label className="block text-[11px] font-condensed tracking-[0.15em] uppercase text-graphite-500 mb-2">
            Preferred Date
          </label>
          <input
            type="date"
            value={form.date}
            onChange={update('date')}
            className="w-full border border-silver-300 px-4 py-3 text-sm focus:border-toyota-500 focus:outline-none bg-white"
          />
        </div>
      </div>

      <div>
        <label className="block text-[11px] font-condensed tracking-[0.15em] uppercase text-graphite-500 mb-2">
          Notes
        </label>
        <textarea
          value={form.message}
          onChange={update('message')}
          placeholder="Let us know if you have a specific variant in mind, trade-in plans, etc."
          rows={4}
          className="w-full border border-silver-300 px-4 py-3 text-sm focus:border-toyota-500 focus:outline-none bg-white resize-none"
        />
      </div>

      <div className="grid sm:grid-cols-2 gap-3 pt-2">
        <button
          type="submit"
          onClick={handleSubmit('whatsapp')}
          className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-display font-bold tracking-wider uppercase text-xs py-3.5 hover:bg-[#1fb855] transition-colors"
        >
          <WhatsappLogo size={18} weight="fill" />
          Send via WhatsApp
        </button>
        <button
          type="button"
          onClick={handleSubmit('email')}
          className="inline-flex items-center justify-center gap-2 bg-graphite-900 text-white font-display font-bold tracking-wider uppercase text-xs py-3.5 hover:bg-toyota-500 transition-colors"
        >
          <PaperPlaneTilt size={18} weight="fill" />
          Send via Email
        </button>
      </div>

      <p className="text-[11px] text-graphite-500 text-center pt-1">
        We reply within 1 business day. No spam, no pressure.
      </p>
    </form>
  );
}
