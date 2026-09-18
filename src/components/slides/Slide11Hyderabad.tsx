import React from 'react';
import { SlideContent } from '../../data/slidesData';
import { AVIATION_IMAGES } from '../../data/aviationImages';
import { AirwaysLogo } from '../AirwaysLogo';
import { MapPin, Compass, BookOpen, Plane, Award, TrendingUp } from 'lucide-react';

interface SlideProps {
  slide: SlideContent;
}

export const Slide11Hyderabad: React.FC<SlideProps> = ({ slide }) => {
  const progressionSteps = [
    { name: 'HYDERABAD', role: 'LEARNING CENTRE', icon: MapPin, highlight: true },
    { name: 'CAREER GUIDANCE', role: 'PROFILE EVALUATION', icon: Compass, highlight: false },
    { name: 'GROUND TRAINING', role: 'DGCA THEORY PAPERS', icon: BookOpen, highlight: false },
    { name: 'FLIGHT TRAINING', role: 'OVERSEAS ATO BASE', icon: Plane, highlight: false },
    { name: 'LICENSING', role: 'DGCA CPL CONVERSION', icon: Award, highlight: false },
    { name: 'CAREER PROGRESSION', role: 'AIRLINE INDUCTION', icon: TrendingUp, highlight: false }
  ];

  return (
    <div className="w-full h-full min-h-[560px] md:min-h-[620px] flex flex-col justify-between p-6 sm:p-10 lg:p-14 bg-white relative">
      {/* Top Meta Line */}
      <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 bg-red-600 inline-block" />
          <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-neutral-800">
            REGIONAL GATEWAY & CONTINUUM
          </span>
        </div>
        <div className="text-[11px] font-bold text-neutral-500 font-mono">
          Slide 11 / 12
        </div>
      </div>

      {/* Main Content Area */}
      <div className="my-auto py-4 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-1">
              AIRWAYS AVIATION INDIA • HYDERABAD CENTRE
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-950 tracking-tight leading-tight uppercase">
              YOUR JOURNEY CAN BEGIN HERE
            </h2>
            <div className="w-16 h-1 bg-red-600 mt-3" />
          </div>
          <div className="pb-1 hidden sm:block">
            <AirwaysLogo size="md" id="slide-11-airways-logo" />
          </div>
        </div>

        {/* 2-Column Split: Sequential Progression Flow + Subtle Hyderabad & Aviation Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left: 6-Step Vertical/Linear Progression Flow */}
          <div className="lg:col-span-7 space-y-2">
            {progressionSteps.map((step, idx) => {
              const IconComp = step.icon;
              const isFirst = idx === 0;
              return (
                <div
                  key={step.name}
                  className={`p-3 border flex items-center justify-between transition-colors ${
                    step.highlight
                      ? 'border-red-600 bg-red-50/30'
                      : 'border-neutral-200 bg-neutral-50 hover:border-neutral-400'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span
                      className={`w-7 h-7 flex items-center justify-center border text-xs font-bold ${
                        step.highlight
                          ? 'bg-red-600 border-red-600 text-white'
                          : 'bg-white border-neutral-300 text-neutral-800'
                      }`}
                    >
                      <IconComp className="w-3.5 h-3.5" />
                    </span>

                    <div>
                      <span className="text-sm font-extrabold text-neutral-950 uppercase tracking-tight">
                        {step.name}
                      </span>
                      <span className="mx-2 text-neutral-300">•</span>
                      <span className="text-[10px] font-mono font-bold text-neutral-500 uppercase">
                        {step.role}
                      </span>
                    </div>
                  </div>

                  <span className="font-mono text-xs font-bold text-neutral-400">
                    0{idx + 1}
                  </span>
                </div>
              );
            })}
          </div>

          {/* Right: Institutional Centre Visual */}
          <div className="lg:col-span-5 border border-neutral-200 bg-neutral-100 p-2 flex flex-col justify-between">
            <div className="relative aspect-[4/3] overflow-hidden bg-neutral-900 border border-neutral-200">
              <img
                src={AVIATION_IMAGES.hyderabadCentre}
                alt="Airways Aviation Hyderabad Learning Centre"
                className="w-full h-full object-cover object-center filter contrast-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-2 left-2 right-2 p-2 bg-neutral-900/90 border border-neutral-700 text-white text-[10px] font-mono">
                <div className="flex items-center justify-between">
                  <div className="font-bold text-red-400">HYDERABAD AVIATION HUB</div>
                  <span className="text-neutral-400">ICAO: VOHS • HYD</span>
                </div>
                <div className="text-neutral-300 text-[9px] mt-0.5">Banjara Hills / Jubilee Hills Corridor • Rajiv Gandhi Intl Gateway</div>
              </div>
            </div>

            <div className="mt-2.5 p-2.5 bg-white border border-neutral-200 flex items-center justify-between text-xs">
              <span className="font-extrabold text-neutral-900 uppercase tracking-wider text-[11px]">
                Ground School & Advisory
              </span>
              <span className="text-[10px] font-bold text-red-600 uppercase tracking-widest">
                Classroom to Cockpit
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Institutional Note */}
        <div className="p-3 bg-white border border-neutral-300 flex items-center justify-between text-xs text-neutral-700">
          <span className="font-bold text-neutral-900 uppercase">
            Institutional Hub: Local guidance, academic preparation, and global training coordination in Telangana.
          </span>
          <span className="text-[10px] font-mono font-bold text-red-600 uppercase tracking-wider hidden sm:inline">
            Airways Aviation India
          </span>
        </div>
      </div>

      {/* Slide Bottom Footer */}
      <div className="pt-3 border-t border-neutral-200 flex items-center justify-between text-xs text-neutral-500">
        <span>Airways Aviation India • Hyderabad Centre</span>
        <span>Aviation Career Guidance Seminar 2026</span>
      </div>
    </div>
  );
};
