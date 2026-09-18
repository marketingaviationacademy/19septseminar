import React from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { SlideContent } from '../data/slidesData';
import { Slide01Welcome } from './slides/Slide01Welcome';
import { Slide02Journey } from './slides/Slide02Journey';
import { Slide03WhyAviation } from './slides/Slide03WhyAviation';
import { Slide04BeyondCockpit } from './slides/Slide04BeyondCockpit';
import { Slide05Basics } from './slides/Slide05Basics';
import { Slide06Pathway } from './slides/Slide06Pathway';
import { Slide07PilotsStudy } from './slides/Slide07PilotsStudy';
import { Slide08Develop } from './slides/Slide08Develop';
import { Slide09Parents } from './slides/Slide09Parents';
import { Slide10Stats } from './slides/Slide10Stats';
import { Slide11Hyderabad } from './slides/Slide11Hyderabad';
import { Slide12Closing } from './slides/Slide12Closing';

interface SlideRendererProps {
  slide: SlideContent;
  direction: number; // 1 for next, -1 for prev
}

export const SlideRenderer: React.FC<SlideRendererProps> = ({ slide, direction }) => {
  const renderSlideContent = () => {
    switch (slide.id) {
      case 1:
        return <Slide01Welcome slide={slide} />;
      case 2:
        return <Slide02Journey slide={slide} />;
      case 3:
        return <Slide03WhyAviation slide={slide} />;
      case 4:
        return <Slide04BeyondCockpit slide={slide} />;
      case 5:
        return <Slide05Basics slide={slide} />;
      case 6:
        return <Slide06Pathway slide={slide} />;
      case 7:
        return <Slide07PilotsStudy slide={slide} />;
      case 8:
        return <Slide08Develop slide={slide} />;
      case 9:
        return <Slide09Parents slide={slide} />;
      case 10:
        return <Slide10Stats slide={slide} />;
      case 11:
        return <Slide11Hyderabad slide={slide} />;
      case 12:
        return <Slide12Closing slide={slide} />;
      default:
        return <Slide01Welcome slide={slide} />;
    }
  };

  return (
    <div className="w-full h-full relative overflow-hidden bg-white">
      <AnimatePresence mode="wait" initial={false}>
        <motion.div
          key={slide.id}
          initial={{ opacity: 0, x: direction > 0 ? 15 : -15 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: direction > 0 ? -15 : 15 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          className="w-full h-full"
        >
          {renderSlideContent()}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};
