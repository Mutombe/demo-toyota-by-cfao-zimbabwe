import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, MagnifyingGlass } from '@phosphor-icons/react';
import SEO from '../components/SEO';
import PageTransition from '../components/PageTransition';

export default function NotFound() {
  return (
    <PageTransition>
      <SEO title="Page not found — Toyota Zimbabwe" description="The page you're looking for can't be found. Browse our vehicle lineup instead." />
      <section className="relative min-h-[70vh] flex items-center justify-center bg-silver-100 py-20 px-5 overflow-hidden">
        <div className="grid-lines absolute inset-0 opacity-30" />
        <div className="relative text-center max-w-lg">
          <p className="font-display font-black text-[120px] sm:text-[180px] leading-none text-toyota-500">
            404
          </p>
          <p className="eyebrow mt-2 mb-4">Off the Map</p>
          <h1 className="font-display font-black text-3xl sm:text-4xl text-graphite-900 leading-tight mb-4 text-balance">
            This page took a wrong turn.
          </h1>
          <p className="text-graphite-600 text-base mb-8 max-w-md mx-auto">
            The page you're looking for doesn't exist — or maybe it's been moved. Let's get you back on the road.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              to="/"
              className="inline-flex items-center gap-2 btn-toyota px-8 py-4 text-sm"
            >
              Back to Home
              <ArrowRight size={14} weight="bold" />
            </Link>
            <Link
              to="/showroom"
              className="inline-flex items-center gap-2 bg-graphite-900 text-white font-display font-bold tracking-wider uppercase text-xs px-8 py-4 hover:bg-toyota-500 transition-colors"
            >
              <MagnifyingGlass size={14} weight="bold" />
              Browse Showroom
            </Link>
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
