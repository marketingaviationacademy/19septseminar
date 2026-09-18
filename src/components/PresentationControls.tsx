import React from 'react';
import { ChevronLeft, ChevronRight, Play, Pause, RotateCcw } from 'lucide-react';

interface PresentationControlsProps {
  currentSlide: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
  onSelectSlide: (index: number) => void;
  isAutoplay: boolean;
  onToggleAutoplay: () => void;
  elapsedSeconds: number;
}

export const PresentationControls: React.FC<PresentationControlsProps> = ({
  currentSlide,
  totalSlides,
  onPrev,
  onNext,
  onSelectSlide,
  isAutoplay,
  onToggleAutoplay,
  elapsedSeconds
}) => {
  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const s = secs % 60;
    return `${mins.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  };

  return (
    <nav aria-label="Slide controls" className="w-full bg-white/95 backdrop-blur-xs border-t border-neutral-200 py-2.5 px-4 sticky bottom-0 z-30">
      <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-2.5">
        {/* Left: Audience Context & Timer */}
        <div className="flex items-center gap-3 text-xs text-neutral-600">
          <div className="flex items-center gap-1.5 font-semibold">
            <span className="w-2 h-2 rounded-full bg-red-600 animate-pulse" />
            <span className="text-neutral-900 font-bold uppercase tracking-wider text-[11px]">
              Orientation Seminar
            </span>
          </div>
          <span className="text-neutral-300">|</span>
          <span className="text-[11px] font-medium text-neutral-500 hidden md:inline">
            Little Flower • Future Pilots
          </span>
          <span className="text-neutral-300 hidden md:inline">|</span>
          <div className="text-[11px] font-mono text-neutral-700 bg-neutral-100 px-2 py-0.5 border border-neutral-200">
            ⏱ {formatTime(elapsedSeconds)}
          </div>
        </div>

        {/* Center: Slide Indicators Dots/Pills */}
        <div className="flex items-center gap-1 overflow-x-auto no-scrollbar max-w-[280px] sm:max-w-md py-1">
          {Array.from({ length: totalSlides }).map((_, idx) => {
            const slideNum = idx + 1;
            const isCurrent = slideNum === currentSlide;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => onSelectSlide(slideNum)}
                title={`Go to Slide ${slideNum}`}
                className={`transition-all duration-200 cursor-pointer ${
                  isCurrent
                    ? 'w-6 h-2 bg-red-600'
                    : 'w-2 h-2 bg-neutral-300 hover:bg-neutral-500'
                }`}
              />
            );
          })}
        </div>

        {/* Right: Prev & Next Navigation Buttons */}
        <div className="flex items-center gap-2">
          {/* Autoplay toggle */}
          <button
            type="button"
            onClick={onToggleAutoplay}
            title={isAutoplay ? 'Pause auto-slides' : 'Auto-advance slides (P)'}
            className={`px-2 py-1 text-xs font-bold border transition-colors cursor-pointer flex items-center gap-1 ${
              isAutoplay 
                ? 'bg-red-50 text-red-700 border-red-300' 
                : 'bg-neutral-50 text-neutral-700 border-neutral-300 hover:bg-neutral-100'
            }`}
          >
            {isAutoplay ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5" />}
            <span className="text-[10px] uppercase font-bold">{isAutoplay ? 'Auto ON' : 'Auto'}</span>
          </button>

          {/* Previous Slide */}
          <button
            type="button"
            disabled={currentSlide === 1}
            onClick={onPrev}
            className="flex items-center gap-1 px-3 py-1.5 text-xs font-bold bg-white text-neutral-900 border border-neutral-300 hover:border-neutral-900 hover:bg-neutral-50 disabled:opacity-30 disabled:hover:border-neutral-300 disabled:hover:bg-white cursor-pointer disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft className="w-4 h-4" />
            <span>Prev</span>
          </button>

          {/* Next Slide */}
          <button
            type="button"
            disabled={currentSlide === totalSlides}
            onClick={onNext}
            className="flex items-center gap-1 px-4 py-1.5 text-xs font-bold bg-neutral-900 text-white border border-neutral-900 hover:bg-red-600 hover:border-red-600 disabled:opacity-30 disabled:hover:bg-neutral-900 disabled:hover:border-neutral-900 cursor-pointer disabled:cursor-not-allowed transition-all"
          >
            <span>Next</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </nav>
  );
};
