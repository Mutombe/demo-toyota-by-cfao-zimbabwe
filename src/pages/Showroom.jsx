import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { FunnelSimple, ArrowRight, WhatsappLogo } from '@phosphor-icons/react';
import { vehicles, business, waHref } from '../data/siteData';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';
import VehicleCard from '../components/VehicleCard';

const CATEGORIES = ['All', '4x4 & Utility', 'SUV & Crossover', 'Sedan & Hatch', 'Commercial'];

export default function Showroom() {
  const [filter, setFilter] = useState('All');
  const wa = waHref('Hello Toyota Zimbabwe, I would like to see the full vehicle lineup.');

  const filtered = useMemo(
    () =>
      filter === 'All'
        ? vehicles
        : vehicles.filter((v) => v.category === filter),
    [filter]
  );

  return (
    <PageTransition>
      <SEO
        title={`Showroom — Toyota Zimbabwe | Hilux, Fortuner, Land Cruiser & more`}
        description="Browse the complete Toyota vehicle range at CFAO Zimbabwe — pick-ups, SUVs, sedans, hybrids and commercial. Book a test drive online."
      />

      {/* Page Hero */}
      <section className="relative bg-graphite-900 text-white overflow-hidden">
        <div className="grid-lines absolute inset-0 opacity-20" />
        <div className="absolute top-0 right-0 w-1/3 h-full bg-toyota-500 transform skew-x-[-15deg] origin-top-right opacity-10 hidden lg:block" />

        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 py-16 lg:py-24">
          <nav className="text-xs font-condensed tracking-[0.12em] uppercase text-silver-400 mb-6">
            <Link to="/" className="hover:text-toyota-400">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">Showroom</span>
          </nav>
          <p className="eyebrow text-toyota-400 mb-3">The Complete Lineup</p>
          <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl leading-[0.95] text-balance max-w-3xl">
            Nine vehicles. <br/>
            <span className="text-toyota-500">One reputation.</span>
          </h1>
          <p className="mt-6 text-silver-300 text-base lg:text-lg max-w-xl">
            From the working Hilux to the flagship Land Cruiser 300 — explore every Toyota currently available in Zimbabwe, with real prices, variants and specs.
          </p>
        </div>
      </section>

      {/* Filter */}
      <section className="bg-white border-b border-silver-300 sticky top-[72px] z-30">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-4 flex items-center gap-4 overflow-x-auto no-scrollbar">
          <div className="flex items-center gap-2 text-[11px] font-condensed tracking-[0.15em] uppercase text-graphite-500 shrink-0">
            <FunnelSimple size={14} weight="bold" />
            Filter
          </div>
          <div className="flex items-center gap-2">
            {CATEGORIES.map((c) => (
              <button
                key={c}
                onClick={() => setFilter(c)}
                className={`px-4 py-2 text-xs font-display font-bold tracking-wider uppercase border transition-colors shrink-0 ${
                  filter === c
                    ? 'bg-toyota-500 border-toyota-500 text-white'
                    : 'bg-white border-silver-300 text-graphite-700 hover:border-toyota-500 hover:text-toyota-500'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="bg-silver-100 py-14 sm:py-20">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
          {filtered.length === 0 ? (
            <p className="text-center text-graphite-500 py-16">No vehicles in this category yet. Check back soon.</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
              {filtered.map((v, i) => (
                <SectionReveal key={v.slug} delay={i * 50}>
                  <VehicleCard vehicle={v} />
                </SectionReveal>
              ))}
            </div>
          )}

          {/* Bottom CTA */}
          <div className="mt-16 bg-white border border-silver-300 p-8 sm:p-12 grid lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8">
              <p className="eyebrow mb-3">Can't decide?</p>
              <h3 className="font-display font-black text-3xl sm:text-4xl text-graphite-900 leading-tight mb-3 text-balance">
                Talk to one of our sales consultants.
              </h3>
              <p className="text-graphite-600 text-base leading-relaxed max-w-xl">
                Tell us your budget, your driving needs and what you're trading in — we'll recommend the Toyota that fits your life best.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col gap-3">
              <Link
                to="/book-test-drive"
                className="inline-flex items-center justify-center gap-2 btn-toyota px-6 py-4 text-sm"
              >
                Book Test Drive
                <ArrowRight size={16} weight="bold" />
              </Link>
              <a
                href={wa}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 bg-graphite-900 text-white font-display font-bold tracking-wider uppercase text-xs px-6 py-4 hover:bg-toyota-500 transition-colors"
              >
                <WhatsappLogo size={16} weight="fill" />
                WhatsApp {business.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
