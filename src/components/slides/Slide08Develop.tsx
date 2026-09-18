import React from 'react';
import { SlideContent } from '../../data/slidesData';
import { AVIATION_IMAGES } from '../../data/aviationImages';
import { BookOpen, Award, Compass, MessageSquare, Gauge, ShieldCheck } from 'lucide-react';

interface SlideProps {
  slide: SlideContent;
}

export const Slide08Develop: React.FC<SlideProps> = ({ slide }) => {
  const competencies = [
    { name: 'KNOWLEDGE', desc: 'AERODYNAMICS & SYSTEMS', icon: BookOpen },
    { name: 'DISCIPLINE', desc: 'CHECKLIST & SOP RIGOR', icon: Award },
    { name: 'DECISION-MAKING', desc: 'AERONAUTICAL JUDGMENT (ADM)', icon: Compass },
    { name: 'COMMUNICATION', desc: 'STANDARD ATC PHRASEOLOGY', icon: MessageSquare },
    { name: 'TECHNICAL SKILLS', desc: 'INSTRUMENT RATING & CONTROL', icon: Gauge },
    { name: 'SAFETY', desc: 'CORE AIRLINE PROTOCOL', icon: ShieldCheck }
  ];

  return (
    <div className="w-full h-full min-h-[560px] md:min-h-[620px] flex flex-col justify-between p-6 sm:p-10 lg:p-14 bg-white relative">
      {/* Top Meta Line */}
      <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 bg-red-600 inline-block" />
          <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-neutral-800">
            FLIGHT CREW COMPETENCIES
          </span>
        </div>
        <div className="text-[11px] font-bold text-neutral-500 font-mono">
          Slide 08 / 12
        </div>
      </div>

      {/* Main Content Area */}
      <div className="my-auto py-4 space-y-6">
        <div>
          <div className="text-xs font-bold text-neutral-500 uppercase tracking-widest mb-1">
            TRAINING IS MORE THAN FLYING
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-950 tracking-tight leading-tight uppercase">
            WHAT DOES PILOT TRAINING DEVELOP?
          </h2>
          <div className="w-16 h-1 bg-red-600 mt-3" />
        </div>

        {/* 2-Column Split: 6 Competency Blocks + Cockpit/Simulator Visual */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
          {/* Left: 6 Short Keywords Grid */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3">
            {competencies.map((comp, idx) => {
              const IconComp = comp.icon;
              return (
                <div
                  key={comp.name}
                  className="p-4 bg-neutral-50 border-2 border-neutral-900 hover:border-red-600 transition-colors flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <span className="w-9 h-9 bg-white border border-neutral-300 text-red-600 flex items-center justify-center shrink-0">
                      <IconComp className="w-4 h-4" />
                    </span>
                    <div>
                      <div className="text-sm sm:text-base font-extrabold text-neutral-950 uppercase tracking-tight">
                        {comp.name}
                      </div>
                      <div className="text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-wider">
                        {comp.desc}
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

          {/* Right: Realistic Cockpit / Simulator Visual */}
          <div className="lg:col-span-5 border border-neutral-200 bg-neutral-100 p-2 flex flex-col justify-between">
            <div className="relative aspect-[4/3] overflow-hidden bg-neutral-900 border border-neutral-200">
              <img
                src={AVIATION_IMAGES.simulator}
                alt="Full flight simulator glass cockpit instruments"
                className="w-full h-full object-cover object-center filter contrast-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-neutral-900/20" />
            </div>

            <div className="mt-2.5 p-2.5 bg-white border border-neutral-200 flex items-center justify-between text-xs">
              <span className="font-extrabold text-neutral-900 uppercase tracking-wider text-[11px]">
                Full Flight Simulator Environment
              </span>
              <span className="text-[10px] font-bold text-red-600 uppercase tracking-widest">
                Airline Standards
              </span>
            </div>
          </div>
        </div>

        {/* Minimal Bottom Prompt */}
        <div className="p-3 bg-neutral-50 border border-neutral-200 flex items-center justify-between text-xs text-neutral-700">
          <span className="font-bold text-neutral-900 uppercase">
            Professional Outcome: Equipping pilots with judgment, discipline, and calm leadership under all flight conditions.
          </span>
          <span className="text-[10px] font-mono font-bold text-red-600 uppercase tracking-wider hidden sm:inline">
            Airmanship
          </span>
        </div>
      </div>

      {/* Slide Bottom Footer */}
      <div className="pt-3 border-t border-neutral-200 flex items-center justify-between text-xs text-neutral-500">
        <span>Airways Aviation India • Professional Competency Framework</span>
        <span>Aviation Career Guidance Seminar 2026</span>
      </div>
    </div>
  );
};
