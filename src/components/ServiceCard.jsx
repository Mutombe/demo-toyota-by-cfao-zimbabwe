import React from 'react';
import * as Icons from '@phosphor-icons/react';
import { CheckCircle } from '@phosphor-icons/react';

export default function ServiceCard({ service, index = 0 }) {
  const Icon = Icons[service.icon] || Icons.Wrench;

  return (
    <div className="group bg-white border border-silver-300 hover:border-toyota-500 transition-all duration-300 relative overflow-hidden">
      {/* Number */}
      <div className="absolute top-0 right-0 font-display font-black text-[80px] sm:text-[100px] leading-none text-silver-200 select-none pointer-events-none">
        0{index + 1}
      </div>

      <div className="relative p-6 sm:p-8">
        <div className="h-14 w-14 bg-toyota-500 text-white flex items-center justify-center mb-5 group-hover:rotate-3 transition-transform">
          <Icon size={28} weight="bold" />
        </div>

        <h3 className="font-display font-black text-xl sm:text-2xl text-graphite-900 mb-3 leading-tight">
          {service.title}
        </h3>

        <p className="text-sm text-graphite-600 leading-relaxed mb-5">
          {service.summary}
        </p>

        <ul className="space-y-2.5">
          {service.bullets.map((b, i) => (
            <li key={i} className="flex items-start gap-2 text-sm text-graphite-700">
              <CheckCircle size={16} weight="fill" className="text-toyota-500 shrink-0 mt-0.5" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
