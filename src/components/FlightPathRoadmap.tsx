import React, { useState } from 'react';

export interface RoadmapStep {
  stepNumber: string;
  title: string;
  category: string;
  description: string;
  duration?: string;
  milestone: string;
}

interface FlightPathRoadmapProps {
  steps: RoadmapStep[];
  variant?: 'journey' | 'roadmap';
}

export const FlightPathRoadmap: React.FC<FlightPathRoadmapProps> = ({
  steps,
  variant = 'journey'
}) => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(0);
  const currentStep = steps[activeStepIndex] || steps[0];

  return (
    <div className="w-full flex flex-col gap-4">
      {/* Horizontal Flight Route Visual */}
      <div className="relative w-full bg-neutral-50 border border-neutral-200 p-4 md:p-6 overflow-hidden">
        {/* Subtle aviation runway markings */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-neutral-200 flex justify-between px-2">
          {Array.from({ length: 30 }).map((_, i) => (
            <div key={i} className="w-2 h-full bg-neutral-400 opacity-30" />
          ))}
        </div>

        {/* Steps track */}
        <div className="relative pt-6 pb-2">
          {/* Connecting Red & Grey Route Line */}
          <div className="absolute top-[38px] left-4 right-4 h-0.5 bg-neutral-300 z-0">
            <div
              className="h-full bg-red-600 transition-all duration-300 ease-out"
              style={{
                width: `${(activeStepIndex / (steps.length - 1)) * 100}%`
              }}
            />
          </div>

          {/* Step Waypoint Nodes */}
          <div className="relative z-10 flex items-center justify-between gap-1 overflow-x-auto no-scrollbar pb-2">
            {steps.map((step, idx) => {
              const isActive = idx === activeStepIndex;
              const isCompleted = idx < activeStepIndex;

              return (
                <button
                  key={step.stepNumber}
                  type="button"
                  onClick={() => setActiveStepIndex(idx)}
                  className="flex flex-col items-center group cursor-pointer text-left focus:outline-none min-w-[70px] sm:min-w-[85px] md:min-w-[100px]"
                >
                  {/* Waypoint circle */}
                  <div
                    className={`w-7 h-7 rounded-full flex items-center justify-center border text-[11px] font-bold transition-all duration-200 ${
                      isActive
                        ? 'bg-red-600 border-red-600 text-white ring-4 ring-red-100'
                        : isCompleted
                        ? 'bg-neutral-900 border-neutral-900 text-white'
                        : 'bg-white border-neutral-300 text-neutral-600 group-hover:border-red-400'
                    }`}
                  >
                    {isActive ? (
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                        <polygon points="12 2 19 21 12 17 5 21 12 2" fill="currentColor" />
                      </svg>
                    ) : (
                      step.stepNumber
                    )}
                  </div>

                  {/* Step Title in route line */}
                  <div className="mt-2 text-center">
                    <div
                      className={`text-[11px] leading-tight font-bold transition-colors ${
                        isActive
                          ? 'text-red-600 font-extrabold'
                          : isCompleted
                          ? 'text-neutral-900'
                          : 'text-neutral-600 group-hover:text-neutral-900'
                      }`}
                    >
                      {step.title}
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Selected Stage Detail Editorial Card */}
      <div className="bg-white border border-neutral-200 p-5 md:p-6 grid grid-cols-1 md:grid-cols-12 gap-5 items-center">
        <div className="md:col-span-8 flex flex-col gap-2">
          <div className="flex items-center gap-2">
            <span className="text-xs font-extrabold px-2 py-0.5 bg-neutral-100 text-neutral-700 uppercase tracking-wider">
              Stage {currentStep.stepNumber} of {steps.length.toString().padStart(2, '0')}
            </span>
            <span className="text-xs font-bold text-red-600 uppercase tracking-widest">
              {currentStep.category}
            </span>
            {currentStep.duration && (
              <span className="text-xs text-neutral-500 font-semibold border-l border-neutral-200 pl-2">
                Timeline: {currentStep.duration}
              </span>
            )}
          </div>

          <h3 className="text-xl md:text-2xl font-bold text-neutral-900 leading-tight">
            {currentStep.title}
          </h3>

          <p className="text-sm md:text-base text-neutral-700 leading-relaxed">
            {currentStep.description}
          </p>
        </div>

        <div className="md:col-span-4 bg-neutral-50 border border-neutral-200 p-4 flex flex-col justify-between h-full">
          <div>
            <div className="text-[10px] font-extrabold uppercase tracking-widest text-neutral-500 mb-1">
              Required Milestone
            </div>
            <div className="text-xs font-bold text-neutral-900 leading-snug">
              {currentStep.milestone}
            </div>
          </div>

          <div className="flex items-center justify-between mt-4 pt-3 border-t border-neutral-200">
            <button
              type="button"
              disabled={activeStepIndex === 0}
              onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
              className="text-xs font-bold text-neutral-600 hover:text-red-600 disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed"
            >
              ← Previous Stage
            </button>
            <button
              type="button"
              disabled={activeStepIndex === steps.length - 1}
              onClick={() => setActiveStepIndex((prev) => Math.min(steps.length - 1, prev + 1))}
              className="text-xs font-bold text-red-600 hover:text-red-700 disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed"
            >
              Next Stage →
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
