import React from 'react';
import { SlideContent } from '../../data/slidesData';
import { AVIATION_IMAGES } from '../../data/aviationImages';
import { AirwaysLogo } from '../AirwaysLogo';

interface SlideProps {
  slide: SlideContent;
}

export const Slide12Closing: React.FC<SlideProps> = ({ slide }) => {
  return (
    <div className="w-full h-full min-h-[560px] md:min-h-[620px] flex flex-col justify-between p-6 sm:p-10 lg:p-14 bg-white relative">
      {/* Top Meta Line */}
      <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 bg-red-600 inline-block" />
          <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-neutral-800">
            SEMINAR CONCLUDING BRIEFING
          </span>
        </div>
        <div className="text-[11px] font-bold text-neutral-500 font-mono">
          Slide 12 / 12
        </div>
      </div>

      {/* Main Split-Screen Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center my-auto py-4">
        {/* Left Column: Exact Mandated Closing Copy */}
        <div className="lg:col-span-7 flex flex-col justify-center space-y-6">
          <AirwaysLogo size="lg" showSubtitle={true} subtitleText="INDIA • HYDERABAD CENTRE" id="slide-12-airways-logo" />

          {/* EXACT MANDATED LARGE TEXT */}
          <div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-neutral-950 tracking-tight leading-[1.05] uppercase">
              YOUR DREAM.<br />
              <span className="text-red-600">OUR DIRECTION.</span>
            </h1>
          </div>

          <div className="w-16 h-1 bg-red-600" />

          {/* Mandated Supporting Lines */}
          <div className="space-y-1.5 pt-1">
            <h2 className="text-xl sm:text-2xl font-extrabold text-neutral-900 tracking-tight uppercase">
              THANK YOU FOR JOINING US
            </h2>
            <div className="text-sm sm:text-base font-bold text-neutral-700 tracking-wider uppercase">
              19 SEPTEMBER 2026 | LITTLE FLOWER | HYDERABAD
            </div>
            <div className="text-xs font-bold text-neutral-500 uppercase tracking-widest">
              LITTLE FLOWER • FUTURE PILOTS
            </div>
          </div>

          {/* Small Brand Line */}
          <div className="pt-2">
            <span className="text-xs font-mono font-extrabold uppercase tracking-[0.25em] text-neutral-800 border-t border-b border-neutral-200 py-1.5 inline-block">
              AIRWAYS AVIATION
            </span>
          </div>
        </div>

        {/* Right Column: Elegant Aircraft Sunset / Departure Image */}
        <div className="lg:col-span-5 relative">
          <div className="border border-neutral-200 bg-neutral-100 p-2 shadow-sm">
            <div className="relative aspect-[4/3] overflow-hidden bg-neutral-900">
              <img
                src={AVIATION_IMAGES.closingSunset}
                alt="Commercial airliner in golden hour sky"
                className="w-full h-full object-cover object-center filter brightness-95 contrast-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-neutral-900/10" />
            </div>

            <div className="mt-2.5 p-2.5 bg-white border border-neutral-200 flex items-center justify-between text-xs">
              <span className="font-extrabold text-neutral-900 uppercase tracking-wider text-[11px]">
                Questions & Answers
              </span>
              <span className="text-[10px] font-bold text-red-600 uppercase tracking-widest">
                Counselors Available
              </span>
            </div>
          </div>
          {/* Subtle Geometric Corner */}
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
