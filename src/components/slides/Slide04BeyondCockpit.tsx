import React from 'react';
import { SlideContent } from '../../data/slidesData';
import { AVIATION_IMAGES } from '../../data/aviationImages';
import { Plane, Users, Wrench, ShieldCheck, Radio, Building2 } from 'lucide-react';

interface SlideProps {
  slide: SlideContent;
}

export const Slide04BeyondCockpit: React.FC<SlideProps> = ({ slide }) => {
  const ecosystemRoles = [
    {
      title: 'PILOT',
      scope: 'FLIGHT DECK COMMAND',
      code: 'AIRCREW',
      icon: Plane,
      accent: true
    },
    {
      title: 'CABIN CREW',
      scope: 'IN-FLIGHT SAFETY & CARE',
      code: 'CABIN OPS',
      icon: Users,
      accent: false
    },
    {
      title: 'MAINTENANCE',
      scope: 'AME & AIRWORTHINESS',
      code: 'ENGINEERING',
      icon: Wrench,
      accent: false
    },
    {
      title: 'GROUND OPERATIONS',
      scope: 'RAMP, BAGGAGE & TURNAROUND',
      code: 'AIRPORT OPS',
      icon: ShieldCheck,
      accent: false
    },
    {
      title: 'DISPATCH',
      scope: 'NAVIGATION & FLIGHT PLANNING',
      code: 'FLIGHT OPS',
      icon: Radio,
      accent: false
    },
    {
      title: 'AVIATION MANAGEMENT',
      scope: 'AIRLINE STRATEGY & LOGISTICS',
      code: 'MANAGEMENT',
      icon: Building2,
      accent: false
    }
  ];

  return (
    <div className="w-full h-full min-h-[560px] md:min-h-[620px] flex flex-col justify-between p-6 sm:p-10 lg:p-14 bg-white relative">
      {/* Top Meta Line */}
      <div className="flex items-center justify-between border-b border-neutral-200 pb-3">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 bg-red-600 inline-block" />
          <span className="text-[11px] font-extrabold uppercase tracking-[0.2em] text-neutral-800">
            AVIATION CAREER ECOSYSTEM
          </span>
        </div>
        <div className="text-[11px] font-bold text-neutral-500 font-mono">
          Slide 04 / 12
        </div>
      </div>

      {/* Main Content Area */}
      <div className="my-auto py-4 space-y-6">
        <div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-neutral-950 tracking-tight leading-tight uppercase">
            AVIATION IS MORE THAN FLYING
          </h2>
          <div className="text-sm sm:text-base font-bold text-red-600 mt-1 uppercase tracking-wider">
            A Multi-Disciplinary High-Tech Ecosystem
          </div>
        </div>

        {/* Clean 6-Sector Visual Ecosystem Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3.5 sm:gap-4">
          {ecosystemRoles.map((role, idx) => {
            const IconComp = role.icon;
            return (
              <div
                key={role.title}
                className={`p-5 border transition-all text-left flex flex-col justify-between h-36 sm:h-40 ${
                  role.accent
                    ? 'border-red-600 bg-neutral-50 ring-1 ring-red-600 shadow-xs'
                    : 'border-neutral-200 bg-white hover:border-neutral-400'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span
                    className={`w-9 h-9 border flex items-center justify-center ${
                      role.accent
                        ? 'bg-red-600 border-red-600 text-white'
                        : 'bg-neutral-100 border-neutral-200 text-neutral-800'
                    }`}
                  >
                    <IconComp className="w-4 h-4" />
                  </span>
                  <span className="font-mono text-[10px] font-bold text-neutral-400 uppercase tracking-wider">
                    {role.code}
                  </span>
                </div>

                <div>
                  <h3
                    className={`text-base sm:text-lg font-extrabold tracking-tight uppercase ${
                      role.accent ? 'text-red-600' : 'text-neutral-950'
                    }`}
                  >
                    {role.title}
                  </h3>
                  <div className="text-xs font-semibold text-neutral-500 mt-0.5 uppercase tracking-wider">
                    {role.scope}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Informational Prompt Banner */}
        <div className="p-2.5 bg-neutral-50 border border-neutral-200 flex items-center justify-between gap-3 text-xs text-neutral-700">
          <div className="flex items-center gap-3 min-w-0">
            <div className="w-16 h-10 shrink-0 overflow-hidden bg-neutral-900 border border-neutral-300">
              <img
                src={AVIATION_IMAGES.airportOperations}
                alt="Airport ground operations and ramp logistics"
                className="w-full h-full object-cover filter brightness-95"
                referrerPolicy="no-referrer"
              />
            </div>
            <span className="font-bold text-neutral-900 uppercase text-[11px] sm:text-xs truncate">
              Ecosystem Insight: Every flight depends on seamless inter-departmental collaboration.
            </span>
          </div>
          <span className="text-[10px] font-extrabold text-red-600 uppercase tracking-widest shrink-0 hidden sm:inline">
            Aviation Breadth
          </span>
        </div>
      </div>

      {/* Slide Bottom Footer */}
      <div className="pt-3 border-t border-neutral-200 flex items-center justify-between text-xs text-neutral-500">
        <span>Airways Aviation India • Comprehensive Aviation Education</span>
        <span>Aviation Career Guidance Seminar 2026</span>
      </div>
    </div>
  );
};
