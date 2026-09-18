import React from 'react';
import { SlideContent } from '../../data/slidesData';
import { AVIATION_IMAGES } from '../../data/aviationImages';
import { AirwaysLogo } from '../AirwaysLogo';

interface SlideProps {
  slide: SlideContent;
}

export const Slide01Welcome: React.FC<SlideProps> = ({ slide }) => {
  return (
    <div className="w-full h-full min-h-[560px] md:min-h-[620px] flex flex-col justify-between p-6 sm:p-10 lg:p-14 bg-white relative">
      {/* Slide Top Meta Line */}
      <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 bg-red-600 inline-block" />
          <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-neutral-800">
            AIRWAYS AVIATION INDIA • HYDERABAD
          </span>
        </div>
        <div className="text-[11px] font-bold text-neutral-500 font-mono">
          Slide 01 / 12
        </div>
      </div>

      {/* Main Split-Screen Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center my-auto py-4">
        {/* Left Column: Minimal Typography Prompts */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-5 sm:space-y-6">
          {/* Official Brand Logo & Institutional Badge */}
          <div className="flex items-center gap-3 flex-wrap">
            <AirwaysLogo size="lg" showSubtitle={false} id="slide-01-airways-logo" />
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-neutral-100 border border-neutral-200">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-red-600">
                SEMINAR ORIENTATION
              </span>
            </div>
          </div>

          {/* PROMINENT COLLABORATION HEADLINE (ONE SINGLE LINE) */}
          <div>
            <h1 className="text-2xl sm:text-3xl lg:text-4xl xl:text-[40px] font-extrabold text-neutral-950 tracking-tight leading-tight uppercase">
              <span>AIRWAYS AVIATION</span>
              <span className="text-red-600 font-normal mx-2 sm:mx-3">×</span>
              <span>LITTLE FLOWER</span>
            </h1>
          </div>

          {/* Sub-headline */}
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-neutral-700 tracking-tight uppercase">
              Aviation Career Guidance Seminar
            </h2>
          </div>

          {/* Red Accent Line */}
          <div className="w-16 h-1 bg-red-600" />

          {/* Date & Audience Prompts */}
          <div className="space-y-1.5 pt-1">
            <div className="text-base sm:text-lg font-bold text-neutral-900 tracking-wider">
              19 SEPTEMBER 2026 | HYDERABAD
            </div>
            <div className="text-xs sm:text-sm font-extrabold text-neutral-500 uppercase tracking-widest">
              LITTLE FLOWER • FUTURE PILOTS
            </div>
          </div>
        </div>

        {/* Right Column: Clean Cinematic Aircraft Photography */}
        <div className="lg:col-span-5 relative">
          <div className="border border-neutral-200 bg-neutral-100 p-2 shadow-sm">
            <div className="relative aspect-[4/3] overflow-hidden bg-neutral-900">
              <img
                src={AVIATION_IMAGES.welcomeHero}
                alt="Commercial aircraft in clean flight"
                className="w-full h-full object-cover object-center filter brightness-95 contrast-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="mt-2.5 p-2.5 bg-white border border-neutral-200 flex items-center justify-between text-xs">
              <span className="font-extrabold text-neutral-900 uppercase tracking-wider text-[11px]">
                HYDERABAD LEARNING CENTRE
              </span>
              <span className="text-[10px] font-bold text-red-600 uppercase tracking-widest">
                DGCA & GLOBAL ATO
              </span>
            </div>
          </div>
          {/* Subtle Geometric Corner Accent */}
          <div className="absolute -bottom-2.5 -right-2.5 w-10 h-10 border-b-2 border-r-2 border-red-600 pointer-events-none hidden sm:block" />
        </div>
      </div>

      {/* Slide Bottom Footer */}
      <div className="pt-3 border-t border-neutral-200 flex items-center justify-between text-xs text-neutral-500">
        <span>Airways Aviation India • Hyderabad Centre • Banjara Hills</span>
        <span>Aviation Career Guidance Seminar 2026</span>
      </div>
    </div>
  );
};
