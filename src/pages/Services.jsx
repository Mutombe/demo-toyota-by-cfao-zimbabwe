import React from 'react';
import { Link } from 'react-router-dom';
import {
  Wrench,
  CurrencyDollar,
  ShieldCheck,
  Briefcase,
  ArrowRight,
  WhatsappLogo,
  CheckCircle,
} from '@phosphor-icons/react';
import { services, business, waHref } from '../data/siteData';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';
import ServiceCard from '../components/ServiceCard';

const ICONS = { Wrench, CurrencyDollar, ShieldCheck, Briefcase };

export default function Services() {
  const wa = waHref('Hello Toyota Zimbabwe, I would like to enquire about dealership services.');

  return (
    <PageTransition>
      <SEO
        title="Services — Toyota Zimbabwe | Genuine Parts, Finance, Insurance & Trade-In"
        description="Full-service Toyota dealership in Harare. Factory-trained technicians, genuine Toyota parts, finance, insurance and trade-in."
      />

      {/* Hero */}
      <section className="relative bg-graphite-900 text-white overflow-hidden">
        <div className="grid-lines absolute inset-0 opacity-20" />
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 py-16 lg:py-24">
          <nav className="text-xs font-condensed tracking-[0.12em] uppercase text-silver-400 mb-6">
            <Link to="/" className="hover:text-toyota-400">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Services</span>
          </nav>
          <p className="eyebrow text-toyota-400 mb-3">Dealership Services</p>
          <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl leading-[0.95] text-balance max-w-3xl">
            Everything you need, <br/>
            <span className="text-toyota-500">under one roof.</span>
          </h1>
          <p className="mt-6 text-silver-300 text-base lg:text-lg max-w-2xl">
            From buying your Toyota to servicing it, insuring it and trading it in — we've built a full-stack dealership experience designed for Zimbabwean drivers.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="bg-silver-100 py-16 sm:py-20">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {services.map((s, i) => (
              <SectionReveal key={s.slug} delay={i * 80}>
                <ServiceCard service={s} index={i} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Service process */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
          <SectionReveal className="max-w-3xl mb-14">
            <p className="eyebrow mb-3">How a Toyota service works</p>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-graphite-900 leading-[1.05] text-balance">
              Simple, transparent, Toyota-certified.
            </h2>
          </SectionReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                n: '01',
                t: 'Book online',
                d: 'Pick a date and time through WhatsApp, email, or call — we confirm the same day.',
              },
              {
                n: '02',
                t: 'Drop off',
                d: 'Arrive at 67 Mutare Rd. Courtesy shuttle to the CBD available if needed.',
              },
              {
                n: '03',
                t: 'Service & report',
                d: 'Toyota-certified technicians service your vehicle and send you a digital health check.',
              },
              {
                n: '04',
                t: 'Collect & drive',
                d: 'We call when ready. You collect, we hand you the keys — and a freshly washed Toyota.',
              },
            ].map((step, i) => (
              <SectionReveal key={step.n} delay={i * 70}>
                <div className="relative p-6 border-l-2 border-toyota-500">
                  <p className="font-display font-black text-4xl text-silver-300 mb-3">{step.n}</p>
                  <h3 className="font-display font-bold text-lg text-graphite-900 mb-2">{step.t}</h3>
                  <p className="text-sm text-graphite-600 leading-relaxed">{step.d}</p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?auto=format&fit=crop&w=1920&q=80"
            alt="Service workshop"
            className="w-full h-full object-cover object-center"
            loading="lazy"
            onError={(e) => (e.currentTarget.style.display = 'none')}
          />
          <div className="absolute inset-0 bg-graphite-900/75" />
        </div>
        <div className="relative max-w-[1200px] mx-auto px-5 lg:px-10 text-center text-white">
          <p className="eyebrow text-toyota-400 mb-4">Book a Service</p>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-balance mb-6">
            Your Toyota deserves <br/>a Toyota service.
          </h2>
          <p className="text-silver-200 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Book a scheduled service, warranty work, or a genuine-parts fitting — all backed by the Toyota certification.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 btn-toyota px-8 py-4 text-sm"
            >
              <WhatsappLogo size={16} weight="fill" />
              Book Service on WhatsApp
            </a>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-graphite-900 font-display font-bold tracking-wider uppercase text-xs px-8 py-4 hover:bg-silver-200 transition-colors"
            >
              Contact Us
              <ArrowRight size={14} weight="bold" />
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
