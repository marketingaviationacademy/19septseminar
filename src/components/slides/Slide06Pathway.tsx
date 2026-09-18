import React from 'react';
import { SlideContent } from '../../data/slidesData';
import { AVIATION_IMAGES } from '../../data/aviationImages';
import { Plane, Compass, CheckCircle } from 'lucide-react';

interface SlideProps {
  slide: SlideContent;
}

export const Slide06Pathway: React.FC<SlideProps> = ({ slide }) => {
  const pathwaySteps = [
    {
      num: '01',
      title: 'COUNSELLING',
      sub: 'Profile & Medical Check',
      location: 'Hyderabad'
    },
    {
      num: '02',
      title: 'GROUND SCHOOL',
      sub: 'Theory Preparation',
      location: 'Hyderabad Centre'
    },
    {
      num: '03',
      title: 'DGCA EXAMS',
      sub: 'Central Written Papers',
      location: 'DGCA Board'
    },
    {
      num: '04',
      title: 'FLIGHT TRAINING',
      sub: '200+ Flying Hours',
      location: 'Global ATO Base'
    },
    {
      num: '05',
      title: 'LICENCE',
      sub: 'CPL / MEIR Issue',
      location: 'Aviation Authority'
    },
    {
      num: '06',
      title: 'AIRLINE PATHWAY',
      sub: 'Type Rating & Induction',
      location: 'Commercial Airlines'
    }
  ];

  return (
    <div className="w-full h-full min-h-[560px] md:min-h-[620px] flex flex-col justify-between p-6 sm:p-10 lg:p-14 bg-white relative">
      {/* Top Meta Line */}
      <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 bg-red-600 inline-block" />
          <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-neutral-800">
            THE PILOT PATHWAY
          </span>
        </div>
        <div className="text-[11px] font-bold text-neutral-500 font-mono">
          Slide 06 / 12
        </div>
      </div>

      {/* Main Content Area */}
      <div className="my-auto py-4 space-y-8">
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-950 tracking-tight leading-tight uppercase">
            FROM CLASSROOM TO COCKPIT
          </h2>
          <div className="text-sm sm:text-base font-bold text-red-600 mt-1 uppercase tracking-wider">
            Sequential 6-Stage Professional Flight Crew Trajectory
          </div>
        </div>

        {/* Strong Horizontal Timeline with Aircraft Route Line */}
        <div className="relative border border-neutral-200 bg-neutral-50 p-6 sm:p-8">
          {/* Desktop Connecting Flight Route Line */}
          <div className="hidden lg:block absolute top-[44px] left-[7%] right-[7%] h-0.5 bg-neutral-300 -z-1" />
          <div className="hidden lg:block absolute top-[44px] left-[7%] right-[7%] h-0.5 border-t-2 border-dashed border-red-600 w-5/6 -z-1" />

          {/* 6 Sequential Timeline Nodes */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4 relative z-10">
            {pathwaySteps.map((step, idx) => {
              const isLast = idx === pathwaySteps.length - 1;
              return (
                <div
                  key={step.title}
                  className="p-4 bg-white border-2 border-neutral-900 flex flex-col justify-between text-left hover:border-red-600 transition-colors shadow-xs h-40"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-mono text-xs font-extrabold px-1.5 py-0.5 bg-neutral-100 text-neutral-800 border border-neutral-200">
                        {step.num}
                      </span>
                      {isLast ? (
                        <Plane className="w-4 h-4 text-red-600 transform rotate-45" />
                      ) : (
                        <span className="w-2 h-2 bg-neutral-400" />
                      )}
                    </div>

                    <h3 className="text-xs sm:text-sm font-extrabold text-neutral-950 uppercase tracking-tight leading-tight mt-2">
                      {step.title}
                    </h3>
                  </div>

                  <div className="mt-3 pt-2 border-t border-neutral-100 space-y-0.5">
                    <div className="text-[11px] font-semibold text-neutral-600 leading-tight">
                      {step.sub}
                    </div>
                    <div className="text-[9px] font-mono font-bold text-red-600 uppercase">
                      {step.location}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Minimal Route Indicator Prompt */}
        <div className="p-2.5 bg-neutral-50 border-l-4 border-red-600 border-y border-r border-neutral-200 flex items-center justify-between gap-3 text-xs text-neutral-700">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-16 h-10 shrink-0 overflow-hidden bg-neutral-900 border border-neutral-300">
              <img
                src={AVIATION_IMAGES.flightTraining}
                alt="Flight training aircraft lined up on airfield runway"
                className="w-full h-full object-cover filter brightness-95"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="font-bold text-neutral-900 uppercase text-[11px] sm:text-xs truncate">
              Route Continuity: Ground foundation in Hyderabad directly coordinates with international flight bases.
            </span>
          </div>
          <span className="text-[10px] font-mono font-bold text-neutral-500 uppercase tracking-wider shrink-0 hidden sm:inline">
            HYD → GLOBAL ATO → AIRLINE
          </span>
        </div>
      </div>

      {/* Slide Bottom Footer */}
      <div className="pt-3 border-t border-neutral-200 flex items-center justify-between text-xs text-neutral-500">
        <span>Airways Aviation India • Flight Crew Training Continuum</span>
        <span>Aviation Career Guidance Seminar 2026</span>
      </div>
    </div>
  );
};
