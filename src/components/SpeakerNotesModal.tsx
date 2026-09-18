import React from 'react';
import { X, FileText, UserCheck, GraduationCap, AlertCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { SlideContent } from '../data/slidesData';

interface SpeakerNotesModalProps {
  isOpen: boolean;
  onClose: () => void;
  slide: SlideContent;
  currentSlide: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
}

export const SpeakerNotesModal: React.FC<SpeakerNotesModalProps> = ({
  isOpen,
  onClose,
  slide,
  currentSlide,
  totalSlides,
  onPrev,
  onNext
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-900/60 backdrop-blur-xs">
      <div className="bg-white border border-neutral-300 w-full max-w-2xl max-h-[90vh] flex flex-col shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-neutral-200 bg-neutral-50">
          <div className="flex items-center gap-2">
            <FileText className="w-5 h-5 text-red-600" />
            <div>
              <div className="text-xs font-extrabold tracking-wider uppercase text-neutral-500">
                INSTRUCTOR & SPEAKER TALKING POINTS
              </div>
              <div className="text-sm font-bold text-neutral-900">
                Slide {currentSlide} of {totalSlides}: {slide.category}
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

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-5 text-sm text-neutral-800">
          {/* Main Slide Title Context */}
          <div className="bg-neutral-50 border-l-4 border-red-600 p-4">
            <div className="text-xs font-bold text-neutral-500 uppercase tracking-wider mb-1">
              Slide Visual Prompt
            </div>
            <div className="text-base font-bold text-neutral-900">
              {slide.title.replace('\n', ' ')}
            </div>
            {slide.subtitle && (
              <div className="text-xs font-semibold text-neutral-600 mt-0.5">
                {slide.subtitle}
              </div>
            )}
          </div>

          {/* Core Verbal Delivery Notes */}
          <div>
            <div className="text-xs font-extrabold uppercase tracking-wider text-neutral-500 mb-2 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-red-600 rounded-full" />
              Instructor Talking Points (Verbal Explanation)
            </div>
            <p className="text-neutral-800 leading-relaxed bg-white border border-neutral-200 p-4 text-sm font-medium">
              "{slide.instructorNotes}"
            </p>
          </div>

          {/* Dual Audience Strategy: For Parents vs For Students */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-neutral-50 border border-neutral-200 p-4">
              <div className="flex items-center gap-1.5 text-xs font-extrabold text-neutral-900 uppercase tracking-wider mb-2">
                <UserCheck className="w-4 h-4 text-neutral-700" />
                For Parents
              </div>
              <ul className="text-xs text-neutral-600 space-y-1.5 list-disc list-inside leading-relaxed">
                <li>Acknowledge family investments and emphasize safety regulations.</li>
                <li>Explain that thorough DGCA ground theory is mastered in Hyderabad first.</li>
                <li>Clarify timelines and phased financial transparency.</li>
              </ul>
            </div>

            <div className="bg-neutral-50 border border-neutral-200 p-4">
              <div className="flex items-center gap-1.5 text-xs font-extrabold text-neutral-900 uppercase tracking-wider mb-2">
                <GraduationCap className="w-4 h-4 text-red-600" />
                For Students
              </div>
              <ul className="text-xs text-neutral-600 space-y-1.5 list-disc list-inside leading-relaxed">
                <li>Inspire dedication toward mathematics, physics, and aerodynamics.</li>
                <li>Emphasize leadership, precision, and global flight career mobility.</li>
                <li>Clarify the journey from training dual flight hours to airline cockpits.</li>
              </ul>
            </div>
          </div>

          {/* Seminar Rule Reminder */}
          <div className="flex items-start gap-2.5 p-3 bg-red-50/50 border border-red-200 text-xs text-neutral-700">
            <AlertCircle className="w-4 h-4 text-red-600 shrink-0 mt-0.5" />
            <div>
              <strong className="text-red-900">Educational Directive:</strong> Keep explanations conversational and objective. Slides act as visual prompts; deliver details verbally.
            </div>
          </div>
        </div>

        {/* Footer with Prev / Next */}
        <div className="flex items-center justify-between px-6 py-3 border-t border-neutral-200 bg-neutral-50">
          <div className="flex items-center gap-2">
            <button
              type="button"
              disabled={currentSlide === 1}
              onClick={onPrev}
              className="px-3 py-1.5 text-xs font-bold text-neutral-700 border border-neutral-300 hover:bg-white disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed flex items-center gap-1"
            >
              <ChevronLeft className="w-4 h-4" /> Prev Slide
            </button>
            <button
              type="button"
              disabled={currentSlide === totalSlides}
              onClick={onNext}
              className="px-3 py-1.5 text-xs font-bold text-neutral-700 border border-neutral-300 hover:bg-white disabled:opacity-30 cursor-pointer disabled:cursor-not-allowed flex items-center gap-1"
            >
              Next Slide <ChevronRight className="w-4 h-4" />
            </button>
          </div>
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-1.5 text-xs font-bold bg-neutral-900 text-white hover:bg-neutral-800 transition-colors cursor-pointer"
          >
            Done
          </button>
        </div>
      </div>
    </div>
  );
};
