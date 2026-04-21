import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CheckCircle, Car, Clock, ShieldCheck } from '@phosphor-icons/react';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';
import TestDriveForm from '../components/TestDriveForm';
import { business, vehicles } from '../data/siteData';

export default function BookTestDrive() {
  const { state } = useLocation();
  const defaultModel = state?.model || '';

  return (
    <PageTransition>
      <SEO
        title="Book a Test Drive — Toyota Zimbabwe"
        description="Book a free test drive in any Toyota vehicle at CFAO Zimbabwe. Pick your model, pick your time — we'll do the rest."
      />

      {/* Hero */}
      <section className="relative bg-graphite-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1559416523-140ddc3d238c?auto=format&fit=crop&w=1920&q=80"
            alt="Toyota test drive"
            className="w-full h-full object-cover object-center opacity-40"
            loading="eager"
            onError={(e) => (e.currentTarget.style.display = 'none')}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-graphite-900 via-graphite-900/85 to-graphite-900/50" />
        </div>
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 py-16 lg:py-20">
          <nav className="text-xs font-condensed tracking-[0.12em] uppercase text-silver-400 mb-6">
            <Link to="/" className="hover:text-toyota-400">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Book a Test Drive</span>
          </nav>
          <p className="eyebrow text-toyota-400 mb-3">Test Drive</p>
          <h1 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl leading-[0.98] text-balance max-w-3xl">
            Drive the one <br/>you've been dreaming of.
          </h1>
          <p className="mt-5 text-silver-300 text-base lg:text-lg max-w-xl">
            Free, no-obligation test drives across our entire Toyota lineup. Book below and we'll be ready for you.
          </p>
        </div>
      </section>

      {/* Form + benefits */}
      <section className="bg-silver-100 py-14 sm:py-20">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 grid lg:grid-cols-12 gap-10">
          {/* Form */}
          <SectionReveal className="lg:col-span-8">
            <p className="eyebrow mb-3">Book Online</p>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-graphite-900 leading-tight mb-6 text-balance">
              Tell us what you'd like to drive.
            </h2>
            <TestDriveForm defaultModel={defaultModel} />
          </SectionReveal>

          {/* Side */}
          <SectionReveal delay={120} className="lg:col-span-4 space-y-6">
            <div className="bg-graphite-900 text-white p-6 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-1.5 h-full bg-toyota-500" />
              <p className="eyebrow text-toyota-400 mb-3">What to expect</p>
              <ul className="space-y-3.5 text-sm text-silver-300">
                <li className="flex items-start gap-2.5">
                  <CheckCircle size={16} weight="fill" className="text-toyota-500 shrink-0 mt-0.5" />
                  <span>30–45 minutes behind the wheel on a route of our choosing</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle size={16} weight="fill" className="text-toyota-500 shrink-0 mt-0.5" />
                  <span>A walkaround covering tech, safety and trim options</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle size={16} weight="fill" className="text-toyota-500 shrink-0 mt-0.5" />
                  <span>Honest talk on finance and trade-in if you're interested</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <CheckCircle size={16} weight="fill" className="text-toyota-500 shrink-0 mt-0.5" />
                  <span>Zero pressure — drive home in your current car, we mean it</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-silver-300 p-6">
              <p className="eyebrow mb-3">Before you come</p>
              <ul className="space-y-3 text-sm text-graphite-600">
                <li className="flex items-start gap-2.5">
                  <Car size={18} className="text-toyota-500 shrink-0 mt-0.5" />
                  <span>Bring your valid Zimbabwean driver's licence.</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <Clock size={18} className="text-toyota-500 shrink-0 mt-0.5" />
                  <span>Allow 1 hour at the dealership (test drive + paperwork).</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <ShieldCheck size={18} className="text-toyota-500 shrink-0 mt-0.5" />
                  <span>Fully insured — no liability to you during the drive.</span>
                </li>
              </ul>
            </div>

            <div className="bg-white border border-silver-300 p-6">
              <p className="eyebrow mb-3">Prefer to call?</p>
              <p className="text-sm text-graphite-600 mb-3">
                Our sales team is in the showroom Mon–Sat.
              </p>
              <a
                href={`tel:${business.phone.replace(/\s/g,'')}`}
                className="font-display font-black text-lg text-graphite-900 hover:text-toyota-500"
              >
                {business.phoneDisplay}
              </a>
            </div>
          </SectionReveal>
        </div>
      </section>
    </PageTransition>
  );
}
