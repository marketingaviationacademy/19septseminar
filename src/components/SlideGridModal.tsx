import React from 'react';
import { X, LayoutGrid, Check } from 'lucide-react';
import { SLIDES } from '../data/slidesData';

interface SlideGridModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentSlide: number;
  onSelectSlide: (slideNumber: number) => void;
}

export const SlideGridModal: React.FC<SlideGridModalProps> = ({
  isOpen,
  onClose,
  currentSlide,
  onSelectSlide
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8 bg-neutral-900/70 backdrop-blur-xs">
      <div className="bg-white border border-neutral-300 w-full max-w-5xl max-h-[90vh] flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 bg-neutral-50">
          <div className="flex items-center gap-2">
            <LayoutGrid className="w-5 h-5 text-red-600" />
            <div>
              <div className="text-xs font-extrabold tracking-wider uppercase text-neutral-500">
                SEMINAR PRESENTATION DECK OVERVIEW
              </div>
              <div className="text-sm font-bold text-neutral-900">
                12 Minimalist Visual Prompts • 19 September 2026 • Little Flower • Hyderabad
              </div>
            </div>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="p-1 text-neutral-500 hover:text-neutral-900 border border-transparent hover:border-neutral-300 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* 12 Slides Grid */}
        <div className="p-6 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3.5">
          {SLIDES.map((slide) => {
            const isCurrent = slide.id === currentSlide;
            return (
              <button
                key={slide.id}
                type="button"
                onClick={() => {
                  onSelectSlide(slide.id);
                  onClose();
                }}
                className={`relative text-left p-3.5 border transition-all cursor-pointer flex flex-col justify-between min-h-[120px] group ${
                  isCurrent
                    ? 'border-red-600 bg-red-50/20 ring-2 ring-red-600/20 shadow-xs'
                    : 'border-neutral-200 bg-white hover:border-neutral-400 hover:bg-neutral-50'
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-1.5">
                    <span
                      className={`text-[10px] font-mono font-bold px-1.5 py-0.5 border ${
                        isCurrent
                          ? 'bg-red-600 border-red-600 text-white'
                          : 'bg-neutral-100 border-neutral-200 text-neutral-700'
                      }`}
                    >
                      {slide.slideNumber}
                    </span>
                    <span className="text-[9px] font-bold uppercase tracking-wider text-neutral-500 line-clamp-1">
                      {slide.category}
                    </span>
                  </div>
                  <h4 className="text-xs font-bold text-neutral-900 line-clamp-2 leading-snug group-hover:text-red-600 transition-colors">
                    {slide.title.replace('\n', ' ')}
                  </h4>
                </div>

                <div className="mt-2 pt-2 border-t border-neutral-100 flex items-center justify-between text-[10px] text-neutral-500">
                  <span className="capitalize">{slide.stageName || 'Agenda Slide'}</span>
                  {isCurrent && (
                    <span className="flex items-center gap-0.5 text-red-600 font-bold">
                      <Check className="w-3 h-3" /> Active
                    </span>
                  )}
                </div>
              </button>
            );
          })}
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between px-6 py-3 border-t border-neutral-200 bg-neutral-50 text-xs text-neutral-500">
          <div>
            Click any slide to jump immediately. Press <kbd className="px-1.5 py-0.5 bg-white border border-neutral-300 font-mono text-[10px]">Esc</kbd> to return.
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 font-bold bg-neutral-900 text-white hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            Close Overview
          </button>
        </div>
      </div>
    </div>
  );
};
