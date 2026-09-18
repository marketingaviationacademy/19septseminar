import React from 'react';
import { SlideContent } from '../../data/slidesData';
import { Plane, Compass, ArrowRight } from 'lucide-react';

interface SlideProps {
  slide: SlideContent;
}

export const Slide02Journey: React.FC<SlideProps> = ({ slide }) => {
  const stages = [
    { num: '01', name: 'EXPLORE', tag: 'AWARENESS', desc: 'Industry Scope' },
    { num: '02', name: 'UNDERSTAND', tag: 'DUE DILIGENCE', desc: 'Rules & Medicals' },
    { num: '03', name: 'PREPARE', tag: 'FOUNDATION', desc: 'DGCA Theory' },
    { num: '04', name: 'TRAIN', tag: 'FLIGHT HOURS', desc: 'Dual & Solo' },
    { num: '05', name: 'PROGRESS', tag: 'AIRLINE ENTRY', desc: 'CPL & Type Rating' }
  ];

  return (
    <div className="w-full h-full min-h-[560px] md:min-h-[620px] flex flex-col justify-between p-6 sm:p-10 lg:p-14 bg-white relative">
      {/* Top Meta Line */}
      <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 bg-red-600 inline-block" />
          <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-neutral-800">
            SEMINAR AGENDA & STAGES
          </span>
        </div>
        <div className="text-[11px] font-bold text-neutral-500 font-mono">
          Slide 02 / 12
        </div>
      </div>

      {/* Main Content Area */}
      <div className="my-auto py-4 space-y-8">
        {/* Main Heading & Subtitle */}
        <div className="space-y-2">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-950 tracking-tight leading-tight uppercase">
            YOUR AVIATION JOURNEY STARTS WITH UNDERSTANDING
          </h2>
          <p className="text-base sm:text-lg font-bold text-red-600 uppercase tracking-wider">
            From career awareness to the cockpit
          </p>
        </div>

        {/* Elegant Aviation Flight-Path Graphic */}
        <div className="relative border border-neutral-200 bg-neutral-50 p-6 sm:p-8 overflow-hidden">
          {/* Subtle background flight grid */}
          <div className="absolute inset-0 opacity-5 pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:16px_16px]" />

          {/* SVG Route Line connecting the 5 waypoints */}
          <div className="relative z-10">
            {/* Desktop / Tablet Horizontal Route */}
            <div className="grid grid-cols-1 sm:grid-cols-5 gap-4 relative">
              {/* Connecting line on desktop */}
              <div className="hidden sm:block absolute top-7 left-[10%] right-[10%] h-0.5 bg-neutral-300 -z-1" />
              <div className="hidden sm:block absolute top-7 left-[10%] right-[10%] h-0.5 bg-red-600 w-4/5 -z-1 border-t border-dashed border-red-600" />

              {stages.map((st, idx) => {
                const isLast = idx === stages.length - 1;
                return (
                  <div
                    key={st.name}
                    className="flex flex-col items-center text-center space-y-3 relative group"
                  >
                    {/* Waypoint Marker */}
                    <div className="w-14 h-14 bg-white border-2 border-neutral-900 group-hover:border-red-600 flex items-center justify-center transition-colors relative shadow-xs">
                      {isLast ? (
                        <Plane className="w-6 h-6 text-red-600 transform rotate-45" />
                      ) : (
                        <span className="font-mono font-extrabold text-sm text-neutral-900 group-hover:text-red-600">
                          {st.num}
                        </span>
                      )}
                      {/* Waypoint Blip */}
                      <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-600" />
                    </div>

                    {/* Stage Label */}
                    <div className="space-y-0.5">
                      <div className="text-[10px] font-mono font-bold text-neutral-400 tracking-wider uppercase">
                        STAGE {st.num}
                      </div>
                      <div className="text-base sm:text-lg font-extrabold text-neutral-950 tracking-tight">
                        {st.name}
                      </div>
                      <div className="text-xs font-semibold text-neutral-600">
                        {st.desc}
                      </div>
                    </div>

                    {/* Arrow for mobile view */}
                    {!isLast && (
                      <div className="sm:hidden text-neutral-400 py-1">
                        ↓
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Minimal Bottom Prompt for Speaker */}
        <div className="flex items-center justify-between px-4 py-2.5 bg-white border-l-4 border-red-600 border-t border-r border-b border-neutral-200 text-xs font-semibold text-neutral-800">
          <div className="flex items-center gap-2">
            <Compass className="w-4 h-4 text-red-600" />
            <span className="uppercase tracking-wider">
              5 Core Steps: Informed Planning • Ground School • Global Training Bases • Commercial Airline Entry
            </span>
          </div>
        </div>
      </div>

      {/* Slide Bottom Footer */}
      <div className="pt-3 border-t border-neutral-200 flex items-center justify-between text-xs text-neutral-500">
        <span>Airways Aviation India • Orientation Framework</span>
        <span>Aviation Career Guidance Seminar 2026</span>
      </div>
    </div>
  );
};
