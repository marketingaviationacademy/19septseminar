import React from 'react';
import { AirwaysLogo } from './AirwaysLogo';
import { 
  Maximize2, 
  Minimize2, 
  LayoutGrid, 
  FileText, 
  HelpCircle,
  Clock
} from 'lucide-react';

interface PresentationHeaderProps {
  currentSlide: number;
  totalSlides: number;
  category: string;
  isFullscreen: boolean;
  onToggleFullscreen: () => void;
  onOpenNotes: () => void;
  onOpenGrid: () => void;
  onOpenHelp: () => void;
}

export const PresentationHeader: React.FC<PresentationHeaderProps> = ({
  currentSlide,
  totalSlides,
  category,
  isFullscreen,
  onToggleFullscreen,
  onOpenNotes,
  onOpenGrid,
  onOpenHelp
}) => {
  const progressPercent = ((currentSlide) / totalSlides) * 100;

  return (
    <header className="w-full bg-white border-b border-neutral-200 z-30 sticky top-0">
      {/* Top Red Progress Line */}
      <div className="w-full h-1 bg-neutral-100">
        <div
          className="h-full bg-red-600 transition-all duration-300 ease-out"
          style={{ width: `${progressPercent}%` }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        {/* Brand & Emblem */}
        <div className="flex items-center gap-3">
          <AirwaysLogo />
          <div className="hidden lg:flex items-center gap-2 pl-3 border-l border-neutral-300">
            <span className="text-[11px] font-bold text-neutral-800 tracking-wider">
              19 SEPTEMBER 2026
            </span>
            <span className="text-neutral-300">•</span>
            <span className="text-[11px] font-bold text-neutral-700 tracking-wider">
              LITTLE FLOWER
            </span>
            <span className="text-neutral-300">•</span>
            <span className="text-[11px] font-bold text-red-600 tracking-wider">
              HYDERABAD
            </span>
          </div>
        </div>

        {/* Center: Slide Category and Counter */}
        <div className="flex items-center gap-3">
          <div className="hidden sm:block text-[10px] font-extrabold uppercase tracking-widest text-neutral-500 bg-neutral-100 px-2 py-0.5 border border-neutral-200">
            {category}
          </div>
          <div className="flex items-center gap-1.5 text-xs font-bold text-neutral-900 bg-neutral-50 px-2.5 py-1 border border-neutral-200">
            <span className="text-red-600">{currentSlide.toString().padStart(2, '0')}</span>
            <span className="text-neutral-400">/</span>
            <span>{totalSlides.toString().padStart(2, '0')}</span>
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-1 sm:gap-2">
          {/* Slide Overview Grid */}
          <button
            type="button"
            onClick={onOpenGrid}
            title="Slide Overview (G)"
            className="p-1.5 text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 rounded-none border border-transparent hover:border-neutral-200 transition-colors cursor-pointer flex items-center gap-1 text-xs font-semibold"
          >
            <LayoutGrid className="w-4 h-4 text-neutral-600" />
            <span className="hidden md:inline text-[11px]">Slides</span>
          </button>

          {/* Speaker Notes */}
          <button
            type="button"
            onClick={onOpenNotes}
            title="Speaker Guidance Notes (N)"
            className="p-1.5 text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 rounded-none border border-transparent hover:border-neutral-200 transition-colors cursor-pointer flex items-center gap-1 text-xs font-semibold"
          >
            <FileText className="w-4 h-4 text-neutral-600" />
            <span className="hidden md:inline text-[11px]">Presenter Notes</span>
          </button>

          {/* Shortcuts Help */}
          <button
            type="button"
            onClick={onOpenHelp}
            title="Keyboard Shortcuts (?)"
            className="p-1.5 text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 rounded-none border border-transparent hover:border-neutral-200 transition-colors cursor-pointer"
          >
            <HelpCircle className="w-4 h-4 text-neutral-600" />
          </button>

          {/* Fullscreen Toggle */}
          <button
            type="button"
            onClick={onToggleFullscreen}
            title={isFullscreen ? 'Exit Fullscreen (F)' : 'Enter Fullscreen (F)'}
            className="p-1.5 text-neutral-700 hover:text-neutral-900 hover:bg-neutral-100 rounded-none border border-transparent hover:border-neutral-200 transition-colors cursor-pointer"
          >
            {isFullscreen ? (
              <Minimize2 className="w-4 h-4 text-red-600" />
            ) : (
              <Maximize2 className="w-4 h-4 text-neutral-600" />
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
