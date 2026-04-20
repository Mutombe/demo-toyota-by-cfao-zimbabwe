import React from 'react';
import { Link } from 'react-router-dom';
import {
  Target,
  Eye,
  Heart,
  ArrowRight,
  CheckCircle,
} from '@phosphor-icons/react';
import { about, stats, business, faq } from '../data/siteData';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';

const VALUE_ICONS = { Target, Eye, Heart };

export default function About() {
  return (
    <PageTransition>
      <SEO
        title={`About — ${business.name} | Official Toyota Dealership, Harare`}
        description="CFAO Motors Zimbabwe — the official Toyota dealership for Zimbabwe since 1968. Part of the CFAO Group, present in 35 African countries."
      />

      {/* Hero */}
      <section className="relative bg-graphite-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={about.image}
            alt="Toyota dealership showroom"
            className="w-full h-full object-cover object-center opacity-45"
            loading="eager"
            onError={(e) => (e.currentTarget.style.display = 'none')}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-graphite-900 via-graphite-900/80 to-graphite-900/30" />
        </div>
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 py-16 lg:py-24">
          <nav className="text-xs font-condensed tracking-[0.12em] uppercase text-silver-400 mb-6">
            <Link to="/" className="hover:text-toyota-400">Home</Link>
            <span className="mx-2">/</span>
            <span className="text-white">About</span>
          </nav>
          <p className="eyebrow text-toyota-400 mb-3">{about.eyebrow}</p>
          <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl leading-[0.95] text-balance max-w-3xl">
            {about.headline}
          </h1>
          <p className="mt-6 text-silver-300 text-base lg:text-lg max-w-2xl">
            {about.intro}
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-[1000px] mx-auto px-5 lg:px-10">
          <SectionReveal>
            <p className="eyebrow mb-3">Our Story</p>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-graphite-900 leading-[1.1] mb-8 text-balance">
              <span className="red-underline">Fifty-seven years</span> of putting Zimbabwe on the move.
            </h2>
          </SectionReveal>

          <div className="space-y-6 text-graphite-700 text-[16px] leading-[1.8]">
            {about.paragraphs.map((p, i) => (
              <SectionReveal key={i} delay={i * 50}>
                <p>{p}</p>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-graphite-900 text-white py-14 relative">
        <div className="grid-lines absolute inset-0 opacity-10" />
        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
            {stats.map((s, i) => (
              <SectionReveal key={i} delay={i * 60} className="text-center lg:text-left lg:px-6 lg:border-l-2 lg:border-toyota-500 lg:first:border-0">
                <p className="font-display font-black text-4xl sm:text-5xl lg:text-6xl text-white leading-none">
                  {s.value}
                </p>
                <p className="mt-2 text-[11px] font-condensed tracking-[0.15em] uppercase text-silver-400">
                  {s.label}
                </p>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-silver-100 py-16 sm:py-24">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
          <SectionReveal className="max-w-2xl mb-12">
            <p className="eyebrow mb-3">What guides us</p>
            <h2 className="font-display font-black text-4xl sm:text-5xl text-graphite-900 leading-[1.05] text-balance">
              Mission, vision <br/>
              <span className="text-toyota-500">and the Toyota Way.</span>
            </h2>
          </SectionReveal>

          <div className="grid md:grid-cols-3 gap-6">
            {about.values.map((v, i) => {
              const Icon = VALUE_ICONS[v.icon] || Target;
              return (
                <SectionReveal key={i} delay={i * 80} className="bg-white p-8 border border-silver-300 hover:border-toyota-500 transition-colors">
                  <div className="h-14 w-14 bg-toyota-500 text-white flex items-center justify-center mb-5">
                    <Icon size={26} weight="bold" />
                  </div>
                  <h3 className="font-display font-black text-2xl text-graphite-900 mb-3">
                    {v.title}
                  </h3>
                  <p className="text-sm text-graphite-600 leading-relaxed">
                    {v.body}
                  </p>
                </SectionReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-16 sm:py-24">
        <div className="max-w-[900px] mx-auto px-5 lg:px-10">
          <SectionReveal className="mb-10">
            <p className="eyebrow mb-3">Frequently asked</p>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-graphite-900 leading-tight text-balance">
              Questions, answered.
            </h2>
          </SectionReveal>

          <div className="divide-y divide-silver-300 border-y border-silver-300">
            {faq.map((f, i) => (
              <SectionReveal key={i} delay={i * 30}>
                <details className="group py-5">
                  <summary className="flex items-start justify-between gap-4 cursor-pointer list-none">
                    <h3 className="font-display font-bold text-base text-graphite-900 pr-4 flex items-start gap-3">
                      <span className="text-toyota-500 font-black shrink-0">0{i + 1}</span>
                      {f.q}
                    </h3>
                    <span className="shrink-0 h-6 w-6 border border-silver-400 text-graphite-500 flex items-center justify-center transition-all group-open:bg-toyota-500 group-open:border-toyota-500 group-open:text-white group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-3 ml-10 text-sm text-graphite-600 leading-relaxed">
                    {f.a}
                  </p>
                </details>
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-graphite-900 text-white py-16 relative overflow-hidden">
        <div className="grid-lines absolute inset-0 opacity-10" />
        <div className="relative max-w-[1000px] mx-auto px-5 lg:px-10 text-center">
          <h2 className="font-display font-black text-4xl sm:text-5xl leading-[1.05] text-balance mb-6">
            Come visit the showroom.
          </h2>
          <p className="text-silver-300 text-base max-w-xl mx-auto mb-8">
            {business.address} · open Mon–Fri {business.hours.weekdays} · Sat {business.hours.saturday}
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/book-test-drive"
              className="inline-flex items-center justify-center gap-2 btn-toyota px-8 py-4 text-sm"
            >
              Book a Test Drive
              <ArrowRight size={16} weight="bold" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-graphite-900 font-display font-bold tracking-wider uppercase text-xs px-8 py-4 hover:bg-silver-200 transition-colors"
            >
              Get Directions
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
