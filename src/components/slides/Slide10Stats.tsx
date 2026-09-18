import React from 'react';
import { SlideContent } from '../../data/slidesData';
import { AVIATION_IMAGES } from '../../data/aviationImages';
import { AirwaysLogo } from '../AirwaysLogo';
import { Award, Plane, Users, Compass, ShieldCheck } from 'lucide-react';

interface SlideProps {
  slide: SlideContent;
}

export const Slide10Stats: React.FC<SlideProps> = ({ slide }) => {
  const stats = [
    {
      num: '45+',
      unit: 'YEARS',
      label: 'Aviation Experience',
      icon: Award
    },
    {
      num: '12,000+',
      unit: 'PILOTS',
      label: 'Commercial Airline Pilots Trained',
      icon: Plane
    },
    {
      num: '30,000+',
      unit: 'GRADUATES',
      label: 'Cabin, Ground & Maintenance Graduates',
      icon: Users
    },
    {
      num: '100+',
      unit: 'AIRCRAFT',
      label: 'Training Fleet',
      icon: Compass
    },
    {
      num: '15+',
      unit: 'DEVICES',
      label: 'Certified Simulators',
      icon: ShieldCheck
    }
  ];

  return (
    <div className="w-full h-full min-h-[560px] md:min-h-[620px] flex flex-col justify-between p-6 sm:p-10 lg:p-14 bg-white relative">
      {/* Top Meta Line */}
      <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 bg-red-600 inline-block" />
          <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-neutral-800">
            GLOBAL INSTITUTIONAL RECORD
          </span>
        </div>
        <div className="text-[11px] font-bold text-neutral-500 font-mono">
          Slide 10 / 12
        </div>
      </div>

      {/* Main Content Area */}
      <div className="my-auto py-4 space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <div className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-1">
              WHY AIRWAYS AVIATION?
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-neutral-950 tracking-tight leading-none uppercase">
              MEET AIRWAYS AVIATION
            </h2>
            <div className="w-16 h-1 bg-red-600 mt-3" />
          </div>
          <div className="pb-1 hidden sm:block">
            <AirwaysLogo size="md" id="slide-10-airways-logo" />
          </div>
        </div>

        {/* 2-Column Split: Stats Grid + Global Aviation Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left: 5 Verified Stats Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {stats.map((item, idx) => {
              const isHero = idx === 1; // 12,000+ pilots
              return (
                <div
                  key={item.label}
                  className={`p-4 border-2 flex flex-col justify-between text-left transition-colors ${
                    isHero
                      ? 'border-red-600 bg-neutral-50 sm:col-span-2'
                      : 'border-neutral-900 bg-white hover:border-red-600'
                  }`}
                >
                  <div className="flex items-center justify-between">
                    <span className="text-[10px] font-mono font-bold text-neutral-400 uppercase">
                      VERIFIED STAT
                    </span>
                    {isHero && (
                      <span className="text-[9px] font-bold px-2 py-0.5 bg-red-600 text-white uppercase tracking-wider">
                        Airline Alumni
                      </span>
                    )}
                  </div>

                  <div className="my-2">
                    <div className="text-2xl sm:text-3xl font-extrabold text-neutral-950 tracking-tight font-mono">
                      <span className={isHero ? 'text-red-600' : 'text-neutral-950'}>
                        {item.num}
                      </span>
                    </div>
                    <div className="text-xs font-extrabold text-neutral-900 uppercase tracking-wider mt-1">
                      {item.label}
                    </div>
                  </div>

                  <div className="pt-2 border-t border-neutral-100 text-[10px] font-semibold text-neutral-500 uppercase">
                    Airways Aviation Global Network
                  </div>
                </div>
              );
            })}
          </div>

          {/* Right: Global Fleet / Aviation Visual */}
          <div className="lg:col-span-5 border border-neutral-200 bg-neutral-100 p-2 flex flex-col justify-between">
            <div className="relative aspect-[4/3] overflow-hidden bg-neutral-900 border border-neutral-200">
              <img
                src={AVIATION_IMAGES.fleetTraining}
                alt="Airways Aviation training fleet on tarmac"
                className="w-full h-full object-cover object-center filter contrast-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-neutral-900/20" />
            </div>

            <div className="mt-2.5 p-2.5 bg-white border border-neutral-200 flex items-center justify-between text-xs">
              <span className="font-extrabold text-neutral-900 uppercase tracking-wider text-[11px]">
                Multi-Base International Fleet
              </span>
              <span className="text-[10px] font-bold text-red-600 uppercase tracking-widest">
                EASA • CASA • DGCA
              </span>
            </div>
          </div>
        </div>

        {/* Minimal Bottom Prompt */}
        <div className="p-3 bg-neutral-50 border-l-4 border-red-600 flex items-center justify-between text-xs text-neutral-700">
          <span className="font-bold text-neutral-900 uppercase">
            Global Footprint: Flight training bases across Europe, Australia, and Middle East.
          </span>
          <span className="text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-wider hidden sm:inline">
            ESTABLISHED 45+ YEARS
          </span>
        </div>
      </div>

      {/* Slide Bottom Footer */}
      <div className="pt-3 border-t border-neutral-200 flex items-center justify-between text-xs text-neutral-500">
        <span>Airways Aviation Global Education Group</span>
        <span>Aviation Career Guidance Seminar 2026</span>
      </div>
    </div>
  );
};
