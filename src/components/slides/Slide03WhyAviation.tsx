import React from 'react';
import { SlideContent } from '../../data/slidesData';
import { AVIATION_IMAGES } from '../../data/aviationImages';
import { WorldMapGraphic } from '../WorldMapGraphic';
import { Globe, Award, Cpu, Navigation, Briefcase } from 'lucide-react';

interface SlideProps {
  slide: SlideContent;
}

export const Slide03WhyAviation: React.FC<SlideProps> = ({ slide }) => {
  const keywords = [
    { text: 'GLOBAL INDUSTRY', icon: Globe, detail: 'Worldwide Connectivity' },
    { text: 'PROFESSIONAL CAREER', icon: Award, detail: 'High Standard of Rigor' },
    { text: 'TECHNOLOGY', icon: Cpu, detail: 'Cutting-Edge Avionics' },
    { text: 'TRAVEL & NETWORK', icon: Navigation, detail: 'International Mobility' },
    { text: 'MULTIPLE CAREER PATHS', icon: Briefcase, detail: 'Cockpit & Operations' }
  ];

  return (
    <div className="w-full h-full min-h-[560px] md:min-h-[620px] flex flex-col justify-between p-6 sm:p-10 lg:p-14 bg-white relative">
      {/* Top Meta Line */}
      <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 bg-red-600 inline-block" />
          <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-neutral-800">
            INDUSTRY PERSPECTIVE & OPPORTUNITY
          </span>
        </div>
        <div className="text-[11px] font-bold text-neutral-500 font-mono">
          Slide 03 / 12
        </div>
      </div>

      {/* Main Content Area */}
      <div className="my-auto py-4 space-y-6">
        <div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-neutral-950 tracking-tight leading-none uppercase">
            WHY AVIATION?
          </h2>
          <div className="w-16 h-1 bg-red-600 mt-3" />
        </div>

        {/* 2-Column Split: 5 Keywords + Visual (World Map & Aircraft) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
          {/* Left: 5 Bold Keywords (Visual Prompts) */}
          <div className="lg:col-span-6 space-y-2.5">
            {keywords.map((item, idx) => {
              const IconComp = item.icon;
              return (
                <div
                  key={item.text}
                  className="flex items-center justify-between p-3.5 sm:p-4 bg-neutral-50 border border-neutral-200 hover:border-red-600 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-8 h-8 bg-white border border-neutral-300 text-red-600 flex items-center justify-center shrink-0">
                      <IconComp className="w-4 h-4" />
                    </span>
                    <div>
                      <div className="text-base sm:text-lg font-extrabold text-neutral-950 tracking-tight">
                        {item.text}
                      </div>
                      <div className="text-[11px] font-semibold text-neutral-500 uppercase tracking-wider">
                        {item.detail}
                      </div>
                    </div>
                  </div>
                  <span className="font-mono text-xs font-bold text-neutral-400">
                    0{idx + 1}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Right: World Map + Aircraft Visual */}
          <div className="lg:col-span-6 space-y-3">
            {/* World Map Graphic */}
            <div className="border border-neutral-200 bg-white p-3 shadow-xs">
              <WorldMapGraphic />
            </div>

            {/* Aircraft Photography Strip */}
            <div className="border border-neutral-200 bg-neutral-100 p-2 flex items-center gap-3">
              <div className="w-24 h-16 shrink-0 overflow-hidden bg-neutral-900 border border-neutral-200">
                <img
                  src={AVIATION_IMAGES.ecosystem}
                  alt="Aviation global infrastructure"
                  className="w-full h-full object-cover filter brightness-95"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="text-xs text-neutral-700">
                <div className="font-extrabold text-neutral-900 uppercase tracking-wider text-[11px]">
                  GLOBAL AIR TRANSPORT NETWORK
                </div>
                <div className="text-[11px] text-neutral-500 mt-0.5">
                  Connecting 4+ billion passengers annually across 190+ countries
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Bottom Footer */}
      <div className="pt-3 border-t border-neutral-200 flex items-center justify-between text-xs text-neutral-500">
        <span>Airways Aviation India • Industry Perspective</span>
        <span>Aviation Career Guidance Seminar 2026</span>
      </div>
    </div>
  );
};
