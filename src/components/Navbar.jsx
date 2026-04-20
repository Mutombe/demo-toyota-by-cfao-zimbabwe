import React, { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { List, X, WhatsappLogo, Phone } from '@phosphor-icons/react';
import { business, waHref } from '../data/siteData';
import Logo from './Logo';

const links = [
  { to: '/', label: 'Home' },
  { to: '/showroom', label: 'Showroom' },
  { to: '/services', label: 'Services' },
  { to: '/book-test-drive', label: 'Test Drive' },
  { to: '/about', label: 'About' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setOpen(false);
  }, [loc.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  const wa = waHref("Hello Toyota Zimbabwe, I'd like to enquire about a vehicle.");

  return (
    <>
      {/* Top utility bar */}
      <div className="hidden md:block bg-graphite-900 text-silver-300 text-xs">
        <div className="max-w-[1400px] mx-auto px-5 lg:px-10 h-9 flex items-center justify-between">
          <div className="flex items-center gap-6">
            <span className="text-silver-400">Official Toyota Dealership · Zimbabwe</span>
            <span className="text-graphite-400">|</span>
            <span>Mon–Fri {business.hours.weekdays} · Sat {business.hours.saturday}</span>
          </div>
          <div className="flex items-center gap-5">
            <a href={`tel:${business.phone.replace(/\s/g,'')}`} className="flex items-center gap-1.5 hover:text-toyota-400 transition-colors">
              <Phone size={12} weight="fill" />
              {business.phoneDisplay}
            </a>
            <a href={wa} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1.5 hover:text-toyota-400 transition-colors">
              <WhatsappLogo size={12} weight="fill" />
              WhatsApp
            </a>
          </div>
        </div>
      </div>

      <header
        className={`sticky top-0 z-40 w-full bg-white transition-all duration-300 ${
          scrolled ? 'shadow-md' : 'shadow-sm'
        }`}
      >
        {/* Top red accent stripe */}
        <div className="h-0.5 bg-toyota-500 w-full" />

        <div className="max-w-[1400px] mx-auto px-4 sm:px-5 lg:px-10 h-[72px] flex items-center justify-between gap-3">
          <Link to="/" className="flex items-center shrink-0">
            <Logo />
          </Link>

          <nav className="hidden lg:flex items-center gap-7 xl:gap-9">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `relative text-sm font-display font-medium tracking-wide transition-colors py-6 ${
                    isActive
                      ? 'text-toyota-500'
                      : 'text-graphite-800 hover:text-toyota-500'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {l.label}
                    {isActive && (
                      <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-toyota-500" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <Link
              to="/book-test-drive"
              className="hidden md:inline-flex items-center gap-2 btn-toyota px-5 py-2.5 text-xs"
            >
              Book Test Drive
            </Link>
            <button
              onClick={() => setOpen(true)}
              aria-label="Open menu"
              className="h-11 w-11 flex lg:hidden items-center justify-center text-graphite-900"
            >
              <List size={24} weight="bold" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
          open ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div
          className="absolute inset-0 bg-graphite-900/60"
          onClick={() => setOpen(false)}
        />
        <aside
          className={`absolute top-0 right-0 h-full w-[88%] max-w-sm bg-white flex flex-col transition-transform duration-300 ${
            open ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="h-1 bg-toyota-500 w-full" />
          <div className="flex items-center justify-between px-6 h-[72px] border-b border-silver-300">
            <Logo compact />
            <button
              onClick={() => setOpen(false)}
              aria-label="Close menu"
              className="h-10 w-10 flex items-center justify-center"
            >
              <X size={22} weight="bold" />
            </button>
          </div>
          <nav className="flex-1 flex flex-col px-6 py-6 gap-1 overflow-y-auto">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === '/'}
                className={({ isActive }) =>
                  `py-3.5 border-b border-silver-200 font-display font-bold text-lg uppercase tracking-wider transition-colors ${
                    isActive ? 'text-toyota-500' : 'text-graphite-900'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </nav>
          <div className="px-6 py-5 border-t border-silver-300 space-y-3 bg-silver-100">
            <Link
              to="/book-test-drive"
              className="w-full flex items-center justify-center gap-2 btn-toyota py-3 text-sm"
            >
              Book a Test Drive
            </Link>
            <a
              href={wa}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 bg-graphite-900 text-white py-3 text-sm font-display font-bold tracking-wider uppercase"
            >
              <WhatsappLogo size={18} weight="fill" />
              Chat on WhatsApp
            </a>
            <p className="text-xs text-graphite-500 text-center pt-2">
              {business.address}
            </p>
          </div>
        </aside>
      </div>
    </>
  );
}
