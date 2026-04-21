import React from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  ShieldCheck,
  Wrench,
  MapPin,
  Trophy,
  Star,
  WhatsappLogo,
  Phone,
  CheckCircle,
  Quotes,
} from '@phosphor-icons/react';
import {
  hero,
  vehicles,
  services,
  stats,
  whyToyota,
  reviews,
  business,
  marquee,
  waHref,
} from '../data/siteData';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';
import VehicleCard from '../components/VehicleCard';

const WHY_ICONS = { ShieldCheck, Wrench, MapPin, Trophy };

export default function Home() {
  const featured = vehicles.filter((v) => v.popular).slice(0, 5);
  const wa = waHref("Hello Toyota Zimbabwe, I'd like to enquire about a vehicle.");

  return (
    <PageTransition>
      <SEO
        title="Toyota Zimbabwe — Hilux, Fortuner, Land Cruiser & More | CFAO Harare"
        description={hero.sub}
      />

      {/* ============ HERO ============ */}
      <section className="relative bg-graphite-900 text-white overflow-hidden">
        <div className="grid-lines absolute inset-0 opacity-20" />

        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src={hero.image}
            alt={hero.imageAlt}
            className="w-full h-full object-cover object-center opacity-55"
            loading="eager"
            onError={(e) => (e.currentTarget.style.display = 'none')}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-graphite-900 via-graphite-900/85 to-graphite-900/40" />
          <div className="absolute inset-0 bg-gradient-to-t from-graphite-900 to-transparent" />
        </div>

        {/* Red diagonal accent */}
        <div className="hidden lg:block absolute -right-20 top-0 bottom-0 w-40 bg-toyota-500 transform skew-x-[-15deg] origin-top-right" />
        <div className="hidden lg:block absolute -right-40 top-0 bottom-0 w-4 bg-white/10 transform skew-x-[-15deg] origin-top-right" />

        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 pt-16 lg:pt-24 pb-24 lg:pb-32">
          <div className="max-w-3xl">
            <p className="eyebrow text-toyota-400 mb-5">
              {hero.eyebrow}
            </p>
            <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl xl:text-8xl leading-[0.95] text-balance">
              {hero.headline}
              <span className="block text-toyota-500 mt-2">
                {hero.headlineLine2}
              </span>
            </h1>
            <p className="mt-7 text-silver-300 text-base lg:text-lg leading-relaxed max-w-xl text-pretty">
              {hero.sub}
            </p>

            <div className="mt-9 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
              <Link
                to={hero.ctaPrimary.to}
                className="inline-flex items-center justify-center gap-2 btn-toyota px-8 py-4 text-sm"
              >
                {hero.ctaPrimary.label}
                <ArrowRight size={16} weight="bold" />
              </Link>
              <Link
                to={hero.ctaSecondary.to}
                className="inline-flex items-center justify-center gap-2 bg-white text-graphite-900 font-display font-bold tracking-wider uppercase text-xs px-8 py-4 hover:bg-silver-200 transition-colors"
              >
                {hero.ctaSecondary.label}
              </Link>
            </div>

            {/* Rating row */}
            <div className="mt-12 flex items-center gap-6 flex-wrap">
              <div className="flex items-center gap-1.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} weight="fill" className={i < Math.round(business.rating) ? 'text-toyota-500' : 'text-graphite-600'} />
                ))}
                <span className="ml-2 font-display font-bold text-sm text-white">
                  {business.rating}/5
                </span>
                <span className="ml-1 text-xs text-silver-400">
                  ({business.reviewCount} reviews)
                </span>
              </div>
              <span className="h-4 w-px bg-graphite-600 hidden sm:block" />
              <div className="flex items-center gap-1.5 text-xs text-silver-300">
                <CheckCircle size={14} weight="fill" className="text-toyota-500" />
                Since {business.established}
              </div>
              <span className="h-4 w-px bg-graphite-600 hidden sm:block" />
              <div className="flex items-center gap-1.5 text-xs text-silver-300">
                <CheckCircle size={14} weight="fill" className="text-toyota-500" />
                Official CFAO Dealership
              </div>
            </div>
          </div>
        </div>

        {/* Bottom ticker */}
        <div className="relative bg-toyota-500 text-white overflow-hidden">
          <div className="flex whitespace-nowrap animate-marquee py-3">
            {[...marquee, ...marquee, ...marquee].map((m, i) => (
              <span key={i} className="px-8 font-condensed text-xs tracking-[0.15em] uppercase flex items-center gap-3">
                {m}
                <span className="h-1 w-1 bg-white/70 rounded-full" />
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ============ STATS ============ */}
      <section className="bg-white border-b border-silver-300">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 py-12 lg:py-14">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-4">
            {stats.map((s, i) => (
              <SectionReveal key={i} delay={i * 80} className="text-center lg:text-left lg:px-8 lg:border-l-2 lg:border-toyota-500 lg:first:border-0">
                <p className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-graphite-900 leading-none">
                  {s.value}
                </p>
                <p className="mt-2 text-[11px] font-condensed tracking-[0.15em] uppercase text-graphite-500">
                  {s.label}
                </p>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FEATURED VEHICLES ============ */}
      <section className="bg-silver-100 py-16 sm:py-24">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
          <SectionReveal className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-12">
            <div>
              <p className="eyebrow mb-3">The Range</p>
              <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-graphite-900 leading-[1.05] max-w-2xl text-balance">
                <span className="red-underline">Built Tough.</span>
                <br />
                Built in Toyota.
              </h2>
            </div>
            <p className="max-w-md text-graphite-600 text-base">
              Every vehicle in our showroom is built on seven decades of Toyota engineering. Pick the one that was built for your life.
            </p>
          </SectionReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-7">
            {featured.map((v, i) => (
              <SectionReveal key={v.slug} delay={i * 70}>
                <VehicleCard vehicle={v} featured={i === 0} />
              </SectionReveal>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              to="/showroom"
              className="inline-flex items-center gap-2 border-2 border-graphite-900 text-graphite-900 font-display font-bold tracking-wider uppercase text-xs px-8 py-4 hover:bg-graphite-900 hover:text-white transition-colors"
            >
              View full range
              <ArrowRight size={14} weight="bold" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ WHY TOYOTA ============ */}
      <section className="relative bg-white py-16 sm:py-24 overflow-hidden">
        <div className="absolute left-0 top-0 w-1/3 h-full bg-silver-100 hidden lg:block" />
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12">
            <SectionReveal className="lg:col-span-4">
              <p className="eyebrow mb-3">Why Toyota</p>
              <h2 className="font-display font-black text-4xl sm:text-5xl text-graphite-900 leading-[1.05] mb-6 text-balance">
                A promise <br/>you can drive on.
              </h2>
              <p className="text-graphite-600 text-base leading-relaxed mb-7">
                When you buy a Toyota from CFAO Zimbabwe, you're not just buying a vehicle. You're buying into the support network, the parts supply chain, and the quality promise that has made Toyota the world's most trusted car brand.
              </p>
              <Link
                to="/about"
                className="inline-flex items-center gap-2 font-display font-bold tracking-wider uppercase text-xs text-toyota-500 hover:gap-3 transition-all"
              >
                More about our dealership
                <ArrowRight size={14} weight="bold" />
              </Link>
            </SectionReveal>

            <div className="lg:col-span-8 grid sm:grid-cols-2 gap-5">
              {whyToyota.map((w, i) => {
                const Icon = WHY_ICONS[w.icon] || ShieldCheck;
                return (
                  <SectionReveal key={i} delay={i * 80} className="bg-white border border-silver-300 p-6 hover:border-toyota-500 transition-colors">
                    <div className="h-12 w-12 bg-toyota-500 text-white flex items-center justify-center mb-4">
                      <Icon size={22} weight="bold" />
                    </div>
                    <h3 className="font-display font-bold text-lg text-graphite-900 mb-2">
                      {w.title}
                    </h3>
                    <p className="text-sm text-graphite-600 leading-relaxed">
                      {w.body}
                    </p>
                  </SectionReveal>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ============ SERVICES TEASER ============ */}
      <section className="bg-graphite-900 text-white py-16 sm:py-24 relative overflow-hidden">
        <div className="grid-lines absolute inset-0 opacity-10" />
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10">
          <SectionReveal className="max-w-2xl mb-12">
            <p className="eyebrow text-toyota-400 mb-3">Dealership Services</p>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-white leading-[1.05] mb-5 text-balance">
              More than a sale. <br/>
              <span className="text-toyota-500">A partnership.</span>
            </h2>
            <p className="text-silver-300 text-base leading-relaxed">
              From genuine parts to finance, insurance and trade-in — everything you need to own a Toyota, under one roof.
            </p>
          </SectionReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s, i) => (
              <SectionReveal key={s.slug} delay={i * 60} className="bg-graphite-800 border border-graphite-700 p-6 hover:border-toyota-500 transition-all group">
                <div className="h-10 w-10 bg-toyota-500 text-white flex items-center justify-center mb-4 group-hover:rotate-3 transition-transform">
                  <Wrench size={20} weight="bold" />
                </div>
                <h3 className="font-display font-bold text-lg text-white mb-2">
                  {s.title}
                </h3>
                <p className="text-sm text-silver-400 leading-relaxed line-clamp-3">
                  {s.summary}
                </p>
              </SectionReveal>
            ))}
          </div>

          <div className="mt-10 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 bg-white text-graphite-900 font-display font-bold tracking-wider uppercase text-xs px-8 py-4 hover:bg-toyota-500 hover:text-white transition-colors"
            >
              Explore services
              <ArrowRight size={14} weight="bold" />
            </Link>
          </div>
        </div>
      </section>

      {/* ============ TESTIMONIALS ============ */}
      <section className="bg-silver-100 py-16 sm:py-24">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
          <SectionReveal className="max-w-2xl mb-12">
            <p className="eyebrow mb-3">Customer Voices</p>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-graphite-900 leading-[1.05] text-balance">
              {business.reviewCount}+ reviews. <br/>
              <span className="text-toyota-500">{business.rating}/5 average.</span>
            </h2>
          </SectionReveal>

          <div className="grid lg:grid-cols-3 gap-6">
            {reviews.slice(0, 3).map((r, i) => (
              <SectionReveal key={i} delay={i * 80} className="bg-white p-7 border border-silver-300 relative">
                <Quotes size={32} weight="fill" className="text-toyota-500 mb-4" />
                <div className="flex items-center gap-0.5 mb-4">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} size={14} weight="fill" className={j < r.rating ? 'text-toyota-500' : 'text-silver-300'} />
                  ))}
                </div>
                <p className="text-graphite-700 text-[15px] leading-relaxed mb-6">
                  "{r.text}"
                </p>
                <div className="pt-4 border-t border-silver-200">
                  <p className="font-display font-bold text-graphite-900">
                    {r.name}
                  </p>
                  <p className="text-xs text-graphite-500 mt-0.5">
                    {r.role}
                  </p>
                  <p className="text-[11px] font-condensed tracking-[0.12em] uppercase text-toyota-500 mt-2">
                    {r.vehicle}
                  </p>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ CTA ============ */}
      <section className="relative py-20 sm:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1920&q=80"
            alt="Toyota 4x4 in the African bush"
            className="w-full h-full object-cover object-center"
            loading="lazy"
            onError={(e) => (e.currentTarget.style.display = 'none')}
          />
          <div className="absolute inset-0 bg-graphite-900/70" />
        </div>

        <div className="relative max-w-[1200px] mx-auto px-5 lg:px-10 text-center text-white">
          <p className="eyebrow text-toyota-400 mb-4">Ready to drive?</p>
          <h2 className="font-display font-black text-4xl sm:text-5xl lg:text-6xl leading-[1.05] text-balance mb-6">
            Take the keys for a spin. <br/>
            <span className="text-toyota-500">No pressure. No cost.</span>
          </h2>
          <p className="text-silver-200 text-base sm:text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Book a test drive in any vehicle in our lineup — and feel the difference Toyota reliability makes on the Zimbabwean road.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/book-test-drive"
              className="inline-flex items-center justify-center gap-2 btn-toyota px-8 py-4 text-sm"
            >
              Book a Test Drive
              <ArrowRight size={16} weight="bold" />
            </Link>
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-graphite-900 font-display font-bold tracking-wider uppercase text-xs px-8 py-4 hover:bg-silver-200 transition-colors"
            >
              <WhatsappLogo size={16} weight="fill" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
