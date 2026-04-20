import React from 'react';

// Styled text wordmark for Toyota Zimbabwe — no image dependency.
// Large uppercase "TOYOTA" in Roboto Black with red accent stripe,
// plus small "by CFAO Zimbabwe" subtitle.
export default function Logo({ compact = false, onDark = false }) {
  const mainColor = onDark ? 'text-white' : 'text-graphite-900';
  const subColor = onDark ? 'text-silver-300' : 'text-graphite-500';

  return (
    <div className="flex items-center gap-2.5">
      <span
        className="inline-block h-8 sm:h-9 w-1.5 bg-toyota-500"
        style={{ transform: 'skewX(-14deg)' }}
        aria-hidden
      />
      <div className="flex flex-col leading-none">
        <span
          className={`font-display font-black tracking-[0.08em] ${mainColor} ${
            compact ? 'text-lg' : 'text-xl sm:text-[22px]'
          }`}
        >
          TOYOTA
        </span>
        <span
          className={`font-condensed text-[9px] sm:text-[10px] tracking-[0.22em] uppercase mt-0.5 ${subColor}`}
        >
          by CFAO Zimbabwe
        </span>
      </div>
    </div>
  );
}
