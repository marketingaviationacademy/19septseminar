import React from 'react';
import { SlideContent } from '../../data/slidesData';
import { AVIATION_IMAGES } from '../../data/aviationImages';
import { GraduationCap, HeartPulse, CreditCard, Clock, HelpCircle } from 'lucide-react';

interface SlideProps {
  slide: SlideContent;
}

export const Slide09Parents: React.FC<SlideProps> = ({ slide }) => {
  const pillars = [
    {
      title: 'ELIGIBILITY',
      tag: 'ACADEMIC VERIFICATION',
      keyPoint: '10+2 with Physics & Math',
      icon: GraduationCap,
      code: '01'
    },
    {
      title: 'MEDICAL',
      tag: 'REGULATORY FITNESS',
      keyPoint: 'Class 2 & Class 1 Clearances',
      icon: HeartPulse,
      code: '02'
    },
    {
      title: 'FINANCIAL PLANNING',
      tag: 'STRUCTURED INVESTMENT',
      keyPoint: 'Milestone-Based Phased Costs',
      icon: CreditCard,
      code: '03'
    },
    {
      title: 'TIME & COMMITMENT',
      tag: 'TRAINING DURATION',
      keyPoint: '18 to 24 Months Dedicated Continuum',
      icon: Clock,
      code: '04'
    }
  ];

  return (
    <div className="w-full h-full min-h-[560px] md:min-h-[620px] flex flex-col justify-between p-6 sm:p-10 lg:p-14 bg-white relative">
      {/* Top Meta Line */}
      <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 bg-red-600 inline-block" />
          <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-neutral-800">
            FAMILY DUE DILIGENCE
          </span>
        </div>
        <div className="text-[11px] font-bold text-neutral-500 font-mono">
          Slide 09 / 12
        </div>
      </div>

      {/* Main Content Area */}
      <div className="my-auto py-4 space-y-8">
        <div>
          <div className="text-xs font-bold text-red-600 uppercase tracking-widest mb-1">
            FOR PARENTS
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-950 tracking-tight leading-tight uppercase">
            WHAT SHOULD EVERY PARENT KNOW?
          </h2>
        </div>

        {/* 4 Large Minimal Sections Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((pillar) => {
            const IconComp = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="p-6 bg-neutral-50 border-2 border-neutral-900 flex flex-col justify-between text-left hover:border-red-600 transition-colors shadow-xs h-56"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="w-10 h-10 bg-white border border-neutral-300 flex items-center justify-center text-red-600">
                      <IconComp className="w-5 h-5" />
                    </span>
                    <span className="font-mono text-xs font-bold text-neutral-400">
                      {pillar.code}
                    </span>
                  </div>

                  <div className="text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-wider">
                    {pillar.tag}
                  </div>

                  <h3 className="text-lg sm:text-xl font-extrabold text-neutral-950 uppercase tracking-tight mt-1 leading-tight">
                    {pillar.title}
                  </h3>
                </div>

                <div className="mt-4 pt-3 border-t border-neutral-200">
                  <div className="text-xs font-bold text-neutral-800 uppercase tracking-wide">
                    {pillar.keyPoint}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mandated Bottom Statement Banner */}
        <div className="p-3 bg-neutral-950 text-white border-l-4 border-red-600 flex items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-16 h-10 shrink-0 overflow-hidden bg-neutral-800 border border-neutral-700">
              <img
                src={AVIATION_IMAGES.parentConsultation}
                alt="Parent and student discussing aviation career pathway"
                className="w-full h-full object-cover filter contrast-105"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="text-left">
              <div className="text-sm sm:text-base font-extrabold tracking-wider uppercase text-white">
                ASK QUESTIONS. UNDERSTAND THE PATH. PLAN WITH CONFIDENCE.
              </div>
              <div className="text-[10px] font-mono font-bold text-neutral-400 uppercase">
                Student & Parent Aviation Advisory Session
              </div>
            </div>
          </div>
          <span className="text-[10px] font-mono font-bold text-red-500 uppercase tracking-widest hidden sm:inline">
            FAMILY GUIDANCE
          </span>
        </div>
      </div>

      {/* Slide Bottom Footer */}
      <div className="pt-3 border-t border-neutral-200 flex items-center justify-between text-xs text-neutral-500">
        <span>Airways Aviation India • Transparent Parent Advisory</span>
        <span>Aviation Career Guidance Seminar 2026</span>
      </div>
    </div>
  );
};
