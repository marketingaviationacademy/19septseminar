import React, { useState, useEffect, useRef, useCallback } from 'react';
import { SLIDES } from './data/slidesData';
import { PresentationHeader } from './components/PresentationHeader';
import { PresentationControls } from './components/PresentationControls';
import { SlideRenderer } from './components/SlideRenderer';
import { SpeakerNotesModal } from './components/SpeakerNotesModal';
import { SlideGridModal } from './components/SlideGridModal';
import { KeyboardShortcutsModal } from './components/KeyboardShortcutsModal';

export default function App() {
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>(0);
  const [direction, setDirection] = useState<number>(1);
  const [isNotesOpen, setIsNotesOpen] = useState<boolean>(false);
  const [isGridOpen, setIsGridOpen] = useState<boolean>(false);
  const [isHelpOpen, setIsHelpOpen] = useState<boolean>(false);
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);
  const [isAutoplay, setIsAutoplay] = useState<boolean>(false);
  const [elapsedSeconds, setElapsedSeconds] = useState<number>(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const currentSlide = SLIDES[currentSlideIndex] || SLIDES[0];

  // Timer for session duration
  useEffect(() => {
    const timer = setInterval(() => {
      setElapsedSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Slide navigation handlers
  const goToNext = useCallback(() => {
    setCurrentSlideIndex((prev) => {
      if (prev < SLIDES.length - 1) {
        setDirection(1);
        return prev + 1;
      }
      return prev;
    });
  }, []);

  const goToPrev = useCallback(() => {
    setCurrentSlideIndex((prev) => {
      if (prev > 0) {
        setDirection(-1);
        return prev - 1;
      }
      return prev;
    });
  }, []);

  const goToSlide = useCallback((slideNum: number) => {
    const targetIdx = Math.max(0, Math.min(SLIDES.length - 1, slideNum - 1));
    setDirection(targetIdx > currentSlideIndex ? 1 : -1);
    setCurrentSlideIndex(targetIdx);
  }, [currentSlideIndex]);

  // Autoplay functionality (12s per slide)
  useEffect(() => {
    if (!isAutoplay || isNotesOpen || isGridOpen || isHelpOpen) return;

    const autoTimer = setInterval(() => {
      setCurrentSlideIndex((prev) => {
        if (prev >= SLIDES.length - 1) {
          setIsAutoplay(false);
          return prev;
        }
        setDirection(1);
        return prev + 1;
      });
    }, 12000);

    return () => clearInterval(autoTimer);
  }, [isAutoplay, isNotesOpen, isGridOpen, isHelpOpen]);

  // Fullscreen toggle handler
  const toggleFullscreen = useCallback(() => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen?.().catch(() => {});
      setIsFullscreen(true);
    } else {
      document.exitFullscreen?.().catch(() => {});
      setIsFullscreen(false);
    }
  }, []);

  // Fullscreen change listener
  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(!!document.fullscreenElement);
    };
    document.addEventListener('fullscreenchange', handleFullscreenChange);
    return () => document.removeEventListener('fullscreenchange', handleFullscreenChange);
  }, []);

  // Global Keyboard shortcuts
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Avoid firing if user is typing in an input
      if (['INPUT', 'TEXTAREA'].includes((e.target as HTMLElement).tagName)) {
        return;
      }

      switch (e.key) {
        case 'ArrowRight':
        case ' ':
        case 'PageDown':
          e.preventDefault();
          goToNext();
          break;
        case 'ArrowLeft':
        case 'PageUp':
          e.preventDefault();
          goToPrev();
          break;
        case 'Home':
          e.preventDefault();
          goToSlide(1);
          break;
        case 'End':
          e.preventDefault();
          goToSlide(SLIDES.length);
          break;
        case 'f':
        case 'F':
          e.preventDefault();
          toggleFullscreen();
          break;
        case 'n':
        case 'N':
          e.preventDefault();
          setIsNotesOpen((prev) => !prev);
          break;
        case 'g':
        case 'G':
          e.preventDefault();
          setIsGridOpen((prev) => !prev);
          break;
        case 'p':
        case 'P':
          e.preventDefault();
          setIsAutoplay((prev) => !prev);
          break;
        case '?':
          e.preventDefault();
          setIsHelpOpen((prev) => !prev);
          break;
        case 'Escape':
          setIsNotesOpen(false);
          setIsGridOpen(false);
          setIsHelpOpen(false);
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [goToNext, goToPrev, goToSlide, toggleFullscreen]);

  return (
    <div
      ref={containerRef}
      className="min-h-screen bg-neutral-100 flex flex-col justify-between text-neutral-900 font-sans selection:bg-red-100 selection:text-red-900"
    >
      {/* Top Professional Header */}
      <PresentationHeader
        currentSlide={currentSlideIndex + 1}
        totalSlides={SLIDES.length}
        category={currentSlide.category}
        isFullscreen={isFullscreen}
        onToggleFullscreen={toggleFullscreen}
        onOpenNotes={() => setIsNotesOpen(true)}
        onOpenGrid={() => setIsGridOpen(true)}
        onOpenHelp={() => setIsHelpOpen(true)}
      />

      {/* Main Presentation Stage */}
      <main className="flex-1 flex items-center justify-center p-2 sm:p-4 md:p-6 overflow-hidden">
        <div className="w-full max-w-7xl mx-auto aspect-[16/10] sm:aspect-[16/9] min-h-[580px] md:min-h-[640px] bg-white border border-neutral-300 shadow-xl flex flex-col overflow-hidden relative">
          <SlideRenderer slide={currentSlide} direction={direction} />
        </div>
      </main>

      {/* Bottom Navigation & Controls */}
      <PresentationControls
        currentSlide={currentSlideIndex + 1}
        totalSlides={SLIDES.length}
        onPrev={goToPrev}
        onNext={goToNext}
        onSelectSlide={goToSlide}
        isAutoplay={isAutoplay}
        onToggleAutoplay={() => setIsAutoplay((prev) => !prev)}
        elapsedSeconds={elapsedSeconds}
      />

      {/* Speaker Guidance Notes Modal */}
      <SpeakerNotesModal
        isOpen={isNotesOpen}
        onClose={() => setIsNotesOpen(false)}
        slide={currentSlide}
        currentSlide={currentSlideIndex + 1}
        totalSlides={SLIDES.length}
        onPrev={goToPrev}
        onNext={goToNext}
      />

      {/* Slide Overview Grid Modal */}
      <SlideGridModal
        isOpen={isGridOpen}
        onClose={() => setIsGridOpen(false)}
        currentSlide={currentSlideIndex + 1}
        onSelectSlide={goToSlide}
      />

      {/* Keyboard Shortcuts Cheatsheet */}
      <KeyboardShortcutsModal
        isOpen={isHelpOpen}
        onClose={() => setIsHelpOpen(false)}
      />
    </div>
  );
}
