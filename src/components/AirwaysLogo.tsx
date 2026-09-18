import React from 'react';
import { AIRWAYS_AVIATION_LOGO_BASE64, AIRWAYS_AVIATION_LOGO_PATH } from '../data/airwaysLogoData';

export interface AirwaysLogoProps {
  className?: string;
  variant?: 'dark' | 'light' | 'white';
  showSubtitle?: boolean;
  subtitleText?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  id?: string;
}

export const AirwaysLogo: React.FC<AirwaysLogoProps> = ({
  className = '',
  variant = 'dark',
  showSubtitle = false,
  subtitleText = 'INDIA • HYDERABAD CENTRE',
  size = 'md',
  id = 'airways-aviation-brand-logo'
}) => {
  const isLightOrWhite = variant === 'light' || variant === 'white';

  // Height mappings matching standard typography & UI baselines
  const sizeClasses = {
    sm: 'h-6 sm:h-7',
    md: 'h-8 sm:h-9',
    lg: 'h-11 sm:h-12',
    xl: 'h-14 sm:h-16'
  }[size];

  const subColor = isLightOrWhite ? 'text-neutral-300' : 'text-neutral-500';

  return (
    <div id={id} className={`inline-flex flex-col items-start ${className}`}>
      {/* Official Airways Aviation Logo (Image provided by user) */}
      <div className={`relative flex items-center ${isLightOrWhite ? 'bg-white/95 p-1.5 rounded-sm shadow-sm' : ''}`}>
        <img
          src={AIRWAYS_AVIATION_LOGO_BASE64}
          srcSet={`${AIRWAYS_AVIATION_LOGO_PATH} 1x, ${AIRWAYS_AVIATION_LOGO_BASE64} 2x`}
          alt="Airways Aviation"
          className={`${sizeClasses} w-auto object-contain block`}
          loading="eager"
          decoding="sync"
          referrerPolicy="no-referrer"
        />
      </div>

      {showSubtitle && (
        <div className={`text-[9px] sm:text-[10px] tracking-[0.24em] font-extrabold uppercase mt-1 ${subColor}`}>
          {subtitleText}
        </div>
      )}
    </div>
  );
};
