import React from 'react';
import { Link, useParams, Navigate } from 'react-router-dom';
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  WhatsappLogo,
  Phone,
  Car,
  ShieldCheck,
  Trophy,
} from '@phosphor-icons/react';
import { vehicles, business, waHref } from '../data/siteData';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';
import SectionReveal from '../components/SectionReveal';
import VehicleCard from '../components/VehicleCard';

export default function VehicleDetail() {
  const { slug } = useParams();
  const vehicle = vehicles.find((v) => v.slug === slug);

  if (!vehicle) return <Navigate to="/showroom" replace />;

  const otherVehicles = vehicles.filter((v) => v.slug !== slug).slice(0, 3);
  const wa = waHref(
    `Hello Toyota Zimbabwe, I'd like to enquire about the ${vehicle.name}. Please send me more information.`
  );

  const currentIndex = vehicles.findIndex((v) => v.slug === slug);
  const prevVehicle = vehicles[(currentIndex - 1 + vehicles.length) % vehicles.length];
  const nextVehicle = vehicles[(currentIndex + 1) % vehicles.length];

  return (
    <PageTransition>
      <SEO
        title={`${vehicle.name} — Toyota Zimbabwe | ${vehicle.priceDisplay}`}
        description={vehicle.description.slice(0, 160)}
      />

      {/* Hero */}
      <section className="relative bg-graphite-900 text-white overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={vehicle.heroImage}
            alt={`${vehicle.name} hero`}
            className="w-full h-full object-cover object-center opacity-55"
            loading="eager"
            onError={(e) => (e.currentTarget.style.display = 'none')}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-graphite-900 via-graphite-900/80 to-graphite-900/30" />
        </div>

        <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 py-16 lg:py-24">
          <nav className="text-xs font-condensed tracking-[0.12em] uppercase text-silver-400 mb-6 flex items-center gap-2 flex-wrap">
            <Link to="/" className="hover:text-toyota-400">Home</Link>
            <span>/</span>
            <Link to="/showroom" className="hover:text-toyota-400">Showroom</Link>
            <span>/</span>
            <span className="text-white">{vehicle.name}</span>
          </nav>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12 items-end">
            <div className="lg:col-span-7">
              <p className="eyebrow text-toyota-400 mb-3">
                {vehicle.bodyType} · {vehicle.category}
              </p>
              <h1 className="font-display font-black text-5xl sm:text-6xl lg:text-7xl leading-[0.95] text-balance">
                {vehicle.name}
              </h1>
              <p className="mt-4 font-condensed text-lg sm:text-xl text-toyota-400 tracking-wide">
                {vehicle.tagline}
              </p>
            </div>
            <div className="lg:col-span-5 bg-graphite-800/70 backdrop-blur-sm border border-graphite-700 p-6">
              <p className="text-[11px] font-condensed tracking-[0.15em] uppercase text-silver-400 mb-1">
                Starting from
              </p>
              <p className="font-display font-black text-4xl sm:text-5xl text-white">
                {vehicle.startingPrice}
              </p>
              <p className="text-xs text-silver-400 mt-2">
                Ex-showroom, Harare · Finance from as low as 15% deposit
              </p>
              <div className="mt-5 flex flex-col sm:flex-row gap-3">
                <Link
                  to="/book-test-drive"
                  state={{ model: vehicle.name }}
                  className="flex-1 inline-flex items-center justify-center gap-2 btn-toyota px-5 py-3 text-xs"
                >
                  Book Test Drive
                </Link>
                <a
                  href={wa}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-white text-graphite-900 font-display font-bold tracking-wider uppercase text-xs px-5 py-3 hover:bg-silver-200 transition-colors"
                >
                  <WhatsappLogo size={14} weight="fill" />
                  Enquire
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Overview */}
      <section className="bg-white py-14 sm:py-20">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
          <div className="grid lg:grid-cols-12 gap-12">
            {/* Description */}
            <SectionReveal className="lg:col-span-7">
              <p className="eyebrow mb-3">Overview</p>
              <h2 className="font-display font-black text-3xl sm:text-4xl text-graphite-900 leading-tight mb-6 text-balance">
                Why the {vehicle.name} belongs on Zimbabwe's roads.
              </h2>
              <p className="text-graphite-700 text-base leading-[1.75] mb-6">
                {vehicle.description}
              </p>

              <h3 className="font-display font-bold text-xl text-graphite-900 mt-10 mb-4">
                Key highlights
              </h3>
              <ul className="grid sm:grid-cols-2 gap-3">
                {vehicle.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2.5 text-sm text-graphite-700">
                    <CheckCircle size={18} weight="fill" className="text-toyota-500 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </li>
                ))}
              </ul>
            </SectionReveal>

            {/* Sidebar — variants */}
            <SectionReveal delay={120} className="lg:col-span-5">
              <div className="bg-silver-100 border border-silver-300 p-6 lg:p-7 sticky top-28">
                <p className="eyebrow mb-3">Available variants</p>
                <h3 className="font-display font-black text-2xl text-graphite-900 mb-5">
                  Pricing lineup
                </h3>

                <ul className="space-y-3">
                  {vehicle.variants.map((variant, i) => (
                    <li
                      key={i}
                      className="bg-white border border-silver-300 p-4 flex items-start justify-between gap-3 hover:border-toyota-500 transition-colors"
                    >
                      <div>
                        <p className="font-display font-bold text-sm text-graphite-900 leading-tight">
                          {variant.name}
                        </p>
                      </div>
                      <p className="font-display font-black text-toyota-500 text-sm shrink-0">
                        {variant.price}
                      </p>
                    </li>
                  ))}
                </ul>

                <div className="mt-5 pt-5 border-t border-silver-300 space-y-2 text-xs text-graphite-600">
                  <div className="flex items-center gap-2">
                    <ShieldCheck size={14} weight="fill" className="text-toyota-500" />
                    5-year / 90,000 km warranty included
                  </div>
                  <div className="flex items-center gap-2">
                    <Trophy size={14} weight="fill" className="text-toyota-500" />
                    5-year roadside assistance
                  </div>
                  <div className="flex items-center gap-2">
                    <Car size={14} weight="fill" className="text-toyota-500" />
                    Trade-in welcome · Finance available
                  </div>
                </div>

                <a
                  href={`tel:${business.phone.replace(/\s/g, '')}`}
                  className="mt-5 w-full inline-flex items-center justify-center gap-2 bg-graphite-900 text-white font-display font-bold tracking-wider uppercase text-xs py-3 hover:bg-toyota-500 transition-colors"
                >
                  <Phone size={14} weight="fill" />
                  Call {business.phoneDisplay}
                </a>
              </div>
            </SectionReveal>
          </div>
        </div>
      </section>

      {/* Prev / Next */}
      <section className="bg-silver-100 py-10 border-y border-silver-300">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 flex items-center justify-between gap-4">
          <Link
            to={`/showroom/${prevVehicle.slug}`}
            className="group flex items-center gap-3 text-graphite-700 hover:text-toyota-500 transition-colors"
          >
            <ArrowLeft size={18} weight="bold" className="group-hover:-translate-x-1 transition-transform" />
            <div className="text-left">
              <p className="text-[10px] font-condensed tracking-[0.15em] uppercase text-graphite-400">Previous</p>
              <p className="font-display font-bold text-sm">{prevVehicle.name}</p>
            </div>
          </Link>

          <Link
            to="/showroom"
            className="hidden sm:inline-flex items-center gap-2 text-xs font-display font-bold tracking-wider uppercase text-graphite-600 hover:text-toyota-500 transition-colors"
          >
            All Vehicles
          </Link>

          <Link
            to={`/showroom/${nextVehicle.slug}`}
            className="group flex items-center gap-3 text-graphite-700 hover:text-toyota-500 transition-colors"
          >
            <div className="text-right">
              <p className="text-[10px] font-condensed tracking-[0.15em] uppercase text-graphite-400">Next</p>
              <p className="font-display font-bold text-sm">{nextVehicle.name}</p>
            </div>
            <ArrowRight size={18} weight="bold" className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>

      {/* Related */}
      <section className="bg-white py-14 sm:py-20">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10">
          <SectionReveal className="mb-10">
            <p className="eyebrow mb-3">You might also like</p>
            <h2 className="font-display font-black text-3xl sm:text-4xl text-graphite-900 leading-tight">
              Explore more of the range
            </h2>
          </SectionReveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherVehicles.map((v, i) => (
              <SectionReveal key={v.slug} delay={i * 60}>
                <VehicleCard vehicle={v} />
              </SectionReveal>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
