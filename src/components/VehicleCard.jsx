import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from '@phosphor-icons/react';

export default function VehicleCard({ vehicle, featured = false }) {
  return (
    <Link
      to={`/showroom/${vehicle.slug}`}
      className="group block bg-white border border-silver-300 hover:border-toyota-500 transition-all duration-300 hover:shadow-xl relative overflow-hidden"
    >
      {vehicle.popular && (
        <span className="absolute top-3 left-3 z-10 bg-toyota-500 text-white text-[10px] font-display font-bold tracking-[0.12em] uppercase px-2.5 py-1">
          Popular
        </span>
      )}
      {featured && (
        <span className="absolute top-3 right-3 z-10 bg-graphite-900 text-white text-[10px] font-display font-bold tracking-[0.12em] uppercase px-2.5 py-1">
          Featured
        </span>
      )}

      {/* Image */}
      <div className="aspect-[16/10] overflow-hidden bg-silver-200 relative">
        <img
          src={vehicle.heroImage}
          alt={`${vehicle.name} — ${vehicle.tagline}`}
          className="w-full h-full object-cover object-center group-hover:scale-[1.04] transition-transform duration-500"
          loading="lazy"
          onError={(e) => (e.currentTarget.style.display = 'none')}
        />
        {/* Bottom red diagonal accent */}
        <div className="absolute bottom-0 left-0 w-20 h-1.5 bg-toyota-500 origin-left group-hover:w-32 transition-all duration-300" />
      </div>

      {/* Content */}
      <div className="p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3 mb-2">
          <div>
            <p className="text-[11px] font-condensed tracking-[0.15em] uppercase text-toyota-500 mb-1">
              {vehicle.bodyType}
            </p>
            <h3 className="font-display font-black text-xl sm:text-2xl text-graphite-900 leading-tight group-hover:text-toyota-500 transition-colors">
              {vehicle.name}
            </h3>
          </div>
        </div>

        <p className="text-sm text-graphite-500 mb-4 leading-relaxed line-clamp-2">
          {vehicle.tagline}
        </p>

        <div className="flex items-end justify-between pt-4 border-t border-silver-200">
          <div>
            <p className="text-[10px] font-condensed tracking-[0.15em] uppercase text-graphite-400">
              Starting from
            </p>
            <p className="font-display font-black text-lg text-graphite-900">
              {vehicle.startingPrice}
            </p>
          </div>
          <span className="inline-flex items-center gap-1.5 text-xs font-display font-bold tracking-wider uppercase text-toyota-500 group-hover:gap-3 transition-all">
            View
            <ArrowRight size={14} weight="bold" />
          </span>
        </div>
      </div>
    </Link>
  );
}
