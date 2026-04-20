import React from 'react';
import { Link } from 'react-router-dom';
import {
  FacebookLogo,
  InstagramLogo,
  LinkedinLogo,
  WhatsappLogo,
  MapPin,
  Clock,
  Phone,
  EnvelopeSimple,
} from '@phosphor-icons/react';
import { business, vehicles, waHref } from '../data/siteData';
import Logo from './Logo';

export default function Footer() {
  const wa = waHref('Hello Toyota Zimbabwe.');
  const topVehicles = vehicles.slice(0, 6);

  return (
    <footer className="relative bg-graphite-900 text-silver-300 mt-20 sm:mt-28">
      {/* Top red stripe */}
      <div className="h-1 bg-toyota-500 w-full" />

      <div className="relative max-w-[1400px] mx-auto px-5 lg:px-10 py-14 sm:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-12">
          {/* Brand */}
          <div className="col-span-2 lg:col-span-4 space-y-5">
            <Link to="/" className="inline-block">
              <Logo onDark />
            </Link>
            <p className="text-sm text-silver-400 leading-relaxed max-w-sm">
              {business.tagline} Official Toyota distributor for Zimbabwe — part of the CFAO Group. New vehicles, genuine parts, factory-trained service.
            </p>
            <div className="flex items-center gap-3">
              <a href={business.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="h-9 w-9 border border-graphite-600 flex items-center justify-center hover:bg-toyota-500 hover:border-toyota-500 transition-colors">
                <FacebookLogo size={16} />
              </a>
              <a href={business.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="h-9 w-9 border border-graphite-600 flex items-center justify-center hover:bg-toyota-500 hover:border-toyota-500 transition-colors">
                <InstagramLogo size={16} />
              </a>
              <a href={business.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="h-9 w-9 border border-graphite-600 flex items-center justify-center hover:bg-toyota-500 hover:border-toyota-500 transition-colors">
                <LinkedinLogo size={16} />
              </a>
              <a href={wa} target="_blank" rel="noopener noreferrer" aria-label="WhatsApp" className="h-9 w-9 border border-graphite-600 flex items-center justify-center hover:bg-toyota-500 hover:border-toyota-500 transition-colors">
                <WhatsappLogo size={16} />
              </a>
            </div>
          </div>

          {/* Showroom */}
          <div className="lg:col-span-3">
            <h4 className="font-display font-bold text-white mb-5 text-sm tracking-[0.12em] uppercase">
              Showroom
            </h4>
            <ul className="space-y-2.5 text-sm">
              {topVehicles.map((v) => (
                <li key={v.slug}>
                  <Link
                    to={`/showroom/${v.slug}`}
                    className="text-silver-400 hover:text-toyota-400 transition-colors"
                  >
                    {v.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link to="/showroom" className="text-toyota-400 font-medium hover:text-toyota-300 transition-colors">
                  View full range →
                </Link>
              </li>
            </ul>
          </div>

          {/* Dealership */}
          <div className="lg:col-span-2">
            <h4 className="font-display font-bold text-white mb-5 text-sm tracking-[0.12em] uppercase">
              Dealership
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li><Link to="/services" className="text-silver-400 hover:text-toyota-400 transition-colors">Service & Parts</Link></li>
              <li><Link to="/services" className="text-silver-400 hover:text-toyota-400 transition-colors">Finance</Link></li>
              <li><Link to="/services" className="text-silver-400 hover:text-toyota-400 transition-colors">Insurance</Link></li>
              <li><Link to="/services" className="text-silver-400 hover:text-toyota-400 transition-colors">Trade-In</Link></li>
              <li><Link to="/about" className="text-silver-400 hover:text-toyota-400 transition-colors">About Us</Link></li>
              <li><Link to="/contact" className="text-silver-400 hover:text-toyota-400 transition-colors">Contact</Link></li>
            </ul>
          </div>

          {/* Visit */}
          <div className="col-span-2 lg:col-span-3">
            <h4 className="font-display font-bold text-white mb-5 text-sm tracking-[0.12em] uppercase">
              Visit Our Dealership
            </h4>
            <ul className="space-y-3 text-sm text-silver-400">
              <li className="flex items-start gap-2.5">
                <MapPin size={16} weight="fill" className="mt-0.5 text-toyota-500 shrink-0" />
                <span>{business.address}</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Clock size={16} weight="fill" className="mt-0.5 text-toyota-500 shrink-0" />
                <span>
                  Mon–Fri {business.hours.weekdays}
                  <br />
                  Sat {business.hours.saturday}
                  <br />
                  Sun {business.hours.sunday}
                </span>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone size={16} weight="fill" className="mt-0.5 text-toyota-500 shrink-0" />
                <a
                  href={`tel:${business.phone.replace(/\s/g, '')}`}
                  className="hover:text-toyota-400 transition-colors"
                >
                  {business.phoneDisplay}
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <EnvelopeSimple size={16} weight="fill" className="mt-0.5 text-toyota-500 shrink-0" />
                <a
                  href={`mailto:${business.email}`}
                  className="hover:text-toyota-400 transition-colors"
                >
                  {business.email}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 sm:mt-14 pt-7 sm:pt-8 border-t border-graphite-700 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-silver-400 text-center sm:text-left">
          <p>
            © 2026 {business.name}. All rights reserved. · CFAO Motors Zimbabwe (Pvt) Ltd.
          </p>
          <p>
            Toyota and the Toyota name are trademarks of Toyota Motor Corporation.
          </p>
        </div>

        <p className="mt-4 text-center text-[11px] text-silver-400 tracking-wide">
          Website by{' '}
          <a
            href="https://bitstudio.co.zw"
            target="_blank"
            rel="noopener noreferrer"
            className="text-toyota-400 hover:text-toyota-300 hover:underline"
          >
            Bit Studio
          </a>
        </p>
      </div>
    </footer>
  );
}
