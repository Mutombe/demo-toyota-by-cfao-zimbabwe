import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';
import {
  MapPin,
  Phone,
  EnvelopeSimple,
  Clock,
  WhatsappLogo,
  PaperPlaneTilt,
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
} from '@phosphor-icons/react';
import { business, waHref } from '../data/siteData';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';

export default function Contact() {
  const [form, setForm] = useState({ name: '', phone: '', email: '', subject: '', message: '' });
  const [channel, setChannel] = useState('whatsapp');

  const update = (k) => (e) => setForm({ ...form, [k]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.phone || !form.message) {
      toast.error('Please fill name, phone and message.');
      return;
    }
    const msg = `Hello Toyota Zimbabwe,\n\n${form.message}\n\n— ${form.name}\nPhone: ${form.phone}${form.email ? `\nEmail: ${form.email}` : ''}${form.subject ? `\nSubject: ${form.subject}` : ''}`;
    if (channel === 'whatsapp') {
      window.open(waHref(msg), '_blank');
    } else {
      window.location.href = `mailto:${business.email}?subject=${encodeURIComponent(
        form.subject || 'Website enquiry'
      )}&body=${encodeURIComponent(msg)}`;
    }
    toast.success('Opening your messaging app…');
  };

  return (
    <PageTransition>
      <SEO
        title="Contact — Toyota Zimbabwe | 67 Mutare Rd, Harare"
        description="Get in touch with CFAO Toyota Zimbabwe. Visit us at 67 Mutare Road, Harare. Call, WhatsApp or email — we respond within 1 business day."
      />

      {/* Hero */}
      <section className="relative bg-graphite-900 text-white overflow-hidden">
        <div className="grid-lines absolute inset-0 opacity-20" />
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 py-14 lg:py-20">
          <nav className="text-xs font-condensed tracking-[0.12em] uppercase text-silver-400 mb-6">
            <Link to="/" className="hover:text-toyota-400">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Contact</span>
          </nav>
          <p className="eyebrow text-toyota-400 mb-3">Get in touch</p>
          <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl leading-[0.95] text-balance max-w-3xl">
            Let's talk <br/>
            <span className="text-toyota-500">Toyota.</span>
          </h1>
          <p className="mt-5 text-silver-300 text-base lg:text-lg max-w-2xl">
            Visit our Harare showroom, call the sales desk, or drop us a message — we respond within one business day.
          </p>
        </div>
      </section>

      {/* Contact + Form */}
      <section className="bg-silver-100 py-14 sm:py-20">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 grid lg:grid-cols-12 gap-10">
          {/* Details */}
          <SectionReveal className="lg:col-span-5 space-y-4">
            {[
              { icon: MapPin, label: 'Visit', val: business.address, sub: 'Showroom & Service Centre' },
              { icon: Phone, label: 'Call', val: business.phoneDisplay, sub: 'Sales & Service', href: `tel:${business.phone.replace(/\s/g,'')}` },
              { icon: EnvelopeSimple, label: 'Email', val: business.email, sub: 'General enquiries', href: `mailto:${business.email}` },
              { icon: Clock, label: 'Hours', val: `Mon–Fri ${business.hours.weekdays}`, sub: `Sat ${business.hours.saturday} · Sun ${business.hours.sunday}` },
            ].map((item, i) => {
              const Icon = item.icon;
              const Wrap = item.href ? 'a' : 'div';
              const wrapProps = item.href ? { href: item.href } : {};
              return (
                <Wrap
                  key={i}
                  {...wrapProps}
                  className={`block bg-white border border-silver-300 p-5 flex items-start gap-4 ${
                    item.href ? 'hover:border-toyota-500 transition-colors' : ''
                  }`}
                >
                  <div className="h-11 w-11 bg-toyota-500 text-white flex items-center justify-center shrink-0">
                    <Icon size={20} weight="fill" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[11px] font-condensed tracking-[0.15em] uppercase text-graphite-500">
                      {item.label}
                    </p>
                    <p className="font-display font-bold text-graphite-900 mt-0.5 break-words">
                      {item.val}
                    </p>
                    <p className="text-xs text-graphite-500 mt-0.5">{item.sub}</p>
                  </div>
                </Wrap>
              );
            })}

            <div className="bg-graphite-900 p-5 text-white">
              <p className="eyebrow text-toyota-400 mb-3">Follow the dealership</p>
              <div className="flex items-center gap-3">
                <a href={business.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="h-10 w-10 border border-graphite-600 flex items-center justify-center hover:bg-toyota-500 hover:border-toyota-500 transition-colors">
                  <FacebookLogo size={16} />
                </a>
                <a href={business.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="h-10 w-10 border border-graphite-600 flex items-center justify-center hover:bg-toyota-500 hover:border-toyota-500 transition-colors">
                  <InstagramLogo size={16} />
                </a>
                <a href={business.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="h-10 w-10 border border-graphite-600 flex items-center justify-center hover:bg-toyota-500 hover:border-toyota-500 transition-colors">
                  <LinkedinLogo size={16} />
                </a>
              </div>
            </div>
          </SectionReveal>

          {/* Form */}
          <SectionReveal delay={80} className="lg:col-span-7">
            <form
              onSubmit={handleSubmit}
              className="bg-white border border-silver-300 p-6 sm:p-8 space-y-5"
            >
              <div>
                <p className="eyebrow mb-3">Send a message</p>
                <h2 className="font-display font-black text-2xl sm:text-3xl text-graphite-900 leading-tight">
                  Reach the team directly.
                </h2>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-condensed tracking-[0.15em] uppercase text-graphite-500 mb-2">Full Name *</label>
                  <input type="text" value={form.name} onChange={update('name')} required className="w-full border border-silver-300 px-4 py-3 text-sm focus:border-toyota-500 focus:outline-none" />
                </div>
                <div>
                  <label className="block text-[11px] font-condensed tracking-[0.15em] uppercase text-graphite-500 mb-2">Phone *</label>
                  <input type="tel" value={form.phone} onChange={update('phone')} required placeholder="+263 ..." className="w-full border border-silver-300 px-4 py-3 text-sm focus:border-toyota-500 focus:outline-none" />
                </div>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[11px] font-condensed tracking-[0.15em] uppercase text-graphite-500 mb-2">Email</label>
                  <input type="email" value={form.email} onChange={update('email')} className="w-full border border-silver-300 px-4 py-3 text-sm focus:border-toyota-500 focus:outline-none" />
                </div>
                <div>
                  <label className="block text-[11px] font-condensed tracking-[0.15em] uppercase text-graphite-500 mb-2">Subject</label>
                  <input type="text" value={form.subject} onChange={update('subject')} placeholder="e.g. Hilux enquiry" className="w-full border border-silver-300 px-4 py-3 text-sm focus:border-toyota-500 focus:outline-none" />
                </div>
              </div>
              <div>
                <label className="block text-[11px] font-condensed tracking-[0.15em] uppercase text-graphite-500 mb-2">Message *</label>
                <textarea value={form.message} onChange={update('message')} rows={5} required className="w-full border border-silver-300 px-4 py-3 text-sm focus:border-toyota-500 focus:outline-none resize-none" />
              </div>

              <div className="flex items-center gap-2">
                <span className="text-[11px] font-condensed tracking-[0.15em] uppercase text-graphite-500 mr-1">Send via:</span>
                <button type="button" onClick={() => setChannel('whatsapp')} className={`px-4 py-2 text-xs font-display font-bold tracking-wider uppercase border transition-colors ${channel === 'whatsapp' ? 'bg-[#25D366] border-[#25D366] text-white' : 'bg-white border-silver-300 text-graphite-700'}`}>
                  <WhatsappLogo size={14} weight="fill" className="inline mr-1 -mt-0.5" />
                  WhatsApp
                </button>
                <button type="button" onClick={() => setChannel('email')} className={`px-4 py-2 text-xs font-display font-bold tracking-wider uppercase border transition-colors ${channel === 'email' ? 'bg-graphite-900 border-graphite-900 text-white' : 'bg-white border-silver-300 text-graphite-700'}`}>
                  <PaperPlaneTilt size={14} weight="fill" className="inline mr-1 -mt-0.5" />
                  Email
                </button>
              </div>

              <button
                type="submit"
                className={`w-full font-display font-bold tracking-wider uppercase text-xs py-4 transition-colors ${
                  channel === 'whatsapp' ? 'bg-[#25D366] text-white hover:bg-[#1fb855]' : 'bg-graphite-900 text-white hover:bg-toyota-500'
                }`}
              >
                Send Message
              </button>
            </form>
          </SectionReveal>
        </div>
      </section>

      {/* Map */}
      <section className="bg-white">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-12">
          <SectionReveal className="mb-6">
            <p className="eyebrow mb-2">Find us</p>
            <h2 className="font-display font-black text-3xl text-graphite-900">
              67 Mutare Road, Harare
            </h2>
          </SectionReveal>
          <div className="aspect-[16/7] w-full overflow-hidden border border-silver-300">
            <iframe
              title="Toyota CFAO Zimbabwe location"
              src="https://www.google.com/maps?q=67+Mutare+Rd,+Harare,+Zimbabwe&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
