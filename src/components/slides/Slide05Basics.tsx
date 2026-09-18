import React from 'react';
import { SlideContent } from '../../data/slidesData';
import { AVIATION_IMAGES } from '../../data/aviationImages';
import { CheckCircle2, GraduationCap, Atom, Calendar, ShieldCheck } from 'lucide-react';

interface SlideProps {
  slide: SlideContent;
}

export const Slide05Basics: React.FC<SlideProps> = ({ slide }) => {
  const criteria = [
    {
      label: 'ACADEMIC LEVEL',
      title: '10+2 / INTERMEDIATE',
      sub: 'Recognized Central or State Board',
      icon: GraduationCap,
      code: 'REQ 01'
    },
    {
      label: 'SUBJECT MANDATE',
      title: 'PHYSICS + MATHEMATICS',
      sub: 'Core DGCA Regulatory Prerequisite',
      icon: Atom,
      code: 'REQ 02'
    },
    {
      label: 'AGE REQUIREMENT',
      title: 'AGE 17+',
      sub: 'At Commencement of Training',
      icon: Calendar,
      code: 'REQ 03'
    }
  ];

  return (
    <div className="w-full h-full min-h-[560px] md:min-h-[620px] flex flex-col justify-between p-6 sm:p-10 lg:p-14 bg-white relative">
      {/* Top Meta Line */}
      <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 bg-red-600 inline-block" />
          <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-neutral-800">
            PILOT ENTRY REQUIREMENTS
          </span>
        </div>
        <div className="text-[11px] font-bold text-neutral-500 font-mono">
          Slide 05 / 12
        </div>
      </div>

      {/* Main Content Area */}
      <div className="my-auto py-4 space-y-8">
        <div>
          <div className="text-xs font-bold text-red-600 uppercase tracking-widest mb-1">
            WANT TO BECOME A PILOT?
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-neutral-950 tracking-tight leading-none uppercase">
            START WITH THE BASICS
          </h2>
        </div>

        {/* Large Central Eligibility Display (3 Massive Pillars) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {criteria.map((item) => {
            const IconComp = item.icon;
            return (
              <div
                key={item.title}
                className="p-6 sm:p-8 bg-neutral-50 border-2 border-neutral-900 flex flex-col justify-between text-left relative group hover:border-red-600 transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 bg-white border border-neutral-300 flex items-center justify-center text-red-600">
                      <IconComp className="w-5 h-5" />
                    </span>
                    <span className="font-mono text-xs font-bold text-neutral-400">
                      {item.code}
                    </span>
                  </div>

                  <div className="text-xs font-bold text-neutral-500 uppercase tracking-widest">
                    {item.label}
                  </div>

                  <div className="text-2xl sm:text-3xl font-extrabold text-neutral-950 tracking-tight uppercase mt-2 leading-tight">
                    {item.title}
                  </div>
                </div>

                <div className="mt-6 pt-4 border-t border-neutral-200 flex items-center justify-between text-xs font-semibold text-neutral-600">
                  <span>{item.sub}</span>
                  <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Small Mandatory Footer Banner */}
        <div className="p-3 bg-neutral-50 border-2 border-neutral-200 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-16 h-10 shrink-0 overflow-hidden bg-neutral-900 border border-neutral-300">
              <img
                src={AVIATION_IMAGES.studentPilot}
                alt="Student pilot beside training aircraft on apron"
                className="w-full h-full object-cover filter brightness-95"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="text-left">
              <div className="text-sm sm:text-base font-extrabold uppercase tracking-widest text-neutral-950">
                Eligibility • Medical • Documentation
              </div>
              <div className="text-[10px] font-mono font-bold text-neutral-500 uppercase">
                Student Pilot Pre-Flight Readiness
              </div>
            </div>
          </div>
          <span className="text-[10px] font-mono font-bold text-red-600 uppercase tracking-widest hidden sm:inline">
            DGCA CAR SECTION 7
          </span>
        </div>
      </div>

      {/* Slide Bottom Footer */}
      <div className="pt-3 border-t border-neutral-200 flex items-center justify-between text-xs text-neutral-500">
        <span>DGCA Pilot Licensing Regulations (CAR Section 7)</span>
        <span>Aviation Career Guidance Seminar 2026</span>
      </div>
    </div>
  );
};
