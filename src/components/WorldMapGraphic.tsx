import React, { useState } from 'react';

interface LocationInfo {
  id: string;
  name: string;
  country: string;
  region: 'India' | 'Europe' | 'Middle East' | 'Australia' | 'Africa';
  x: number; // percentage on SVG map
  y: number; // percentage on SVG map
  details: string;
  role: string;
}

export const GLOBAL_LOCATIONS: LocationInfo[] = [
  {
    id: 'hyd',
    name: 'Hyderabad (Banjara Hills)',
    country: 'India',
    region: 'India',
    x: 69.5,
    y: 53.5,
    details: 'Aviation Education & DGCA Theory Foundation Hub',
    role: 'Primary Ground Preparation & Counseling Centre'
  },
  {
    id: 'aus-gc',
    name: 'Gold Coast & Sunshine Coast',
    country: 'Australia',
    region: 'Australia',
    x: 88.5,
    y: 77.0,
    details: 'CASA Commercial Pilot Licence (CPL) Flight Training Academy',
    role: 'Primary International Flight Base & Multi-Engine Training'
  },
  {
    id: 'uae',
    name: 'Dubai',
    country: 'United Arab Emirates',
    region: 'Middle East',
    x: 62.5,
    y: 48.5,
    details: 'Regional Aviation Training & Global Partnerships',
    role: 'Aviation Foundation & Commercial Operations'
  },
  {
    id: 'fra',
    name: 'Montpellier',
    country: 'France',
    region: 'Europe',
    x: 48.5,
    y: 35.5,
    details: 'EASA Approved Training Organisation (ATO)',
    role: 'European Integrated ATPL & Flight Operations'
  },
  {
    id: 'prt',
    name: 'Castelo Branco',
    country: 'Portugal',
    region: 'Europe',
    x: 44.8,
    y: 37.8,
    details: 'EASA Commercial Flight Training Centre',
    role: 'Continuous Year-Round Flight Training Weather'
  },
  {
    id: 'ita',
    name: 'Rome',
    country: 'Italy',
    region: 'Europe',
    x: 51.5,
    y: 37.0,
    details: 'EASA Aviation Academy & Maintenance Programs',
    role: 'Cabin Crew & Flight Preparation'
  },
  {
    id: 'fin',
    name: 'Helsinki',
    country: 'Finland / Nordic',
    region: 'Europe',
    x: 54.5,
    y: 24.5,
    details: 'Nordic Flight Operations & Advanced Instrument Rating',
    role: 'Specialized All-Weather Flight Training'
  },
  {
    id: 'mar',
    name: 'Rabat',
    country: 'Morocco',
    region: 'Africa',
    x: 44.2,
    y: 41.5,
    details: 'North Africa Aviation & Flight Operations',
    role: 'Commercial Pilot & Engineering Preparation'
  },
  {
    id: 'cpv',
    name: 'Cabo Verde',
    country: 'Cabo Verde',
    region: 'Africa',
    x: 38.5,
    y: 52.0,
    details: 'Atlantic Aviation Training Academy',
    role: 'Strategic Oceanic Flight Operations'
  }
];

export const WorldMapGraphic: React.FC = () => {
  const [selectedLoc, setSelectedLoc] = useState<LocationInfo>(GLOBAL_LOCATIONS[0]);

  // SVG coordinates for routes from India (Hyderabad)
  const hyd = GLOBAL_LOCATIONS[0];

  return (
    <div className="w-full bg-neutral-50 border border-neutral-200 rounded-none p-4 md:p-6">
      {/* Map visual canvas */}
      <div className="relative w-full aspect-[2/1] bg-white border border-neutral-200 overflow-hidden">
        {/* Subtle grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#F3F4F6_1px,transparent_1px),linear-gradient(to_bottom,#F3F4F6_1px,transparent_1px)] bg-[size:4%_8%] opacity-60 pointer-events-none" />

        {/* Global World Map Vector */}
        <svg
          viewBox="0 0 1000 500"
          className="w-full h-full object-contain"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Simplified Continental Landmasses */}
          {/* North America */}
          <path
            d="M80,90 Q150,70 230,80 Q290,130 260,200 Q200,230 140,180 Q80,140 80,90 Z"
            fill="#E5E7EB"
          />
          {/* South America */}
          <path
            d="M230,240 Q290,250 310,310 Q280,390 240,440 Q200,380 210,300 Z"
            fill="#E5E7EB"
          />
          {/* Europe */}
          <path
            d="M440,110 Q520,90 560,140 Q540,190 480,190 Q430,170 440,110 Z"
            fill="#D1D5DB"
          />
          {/* Africa */}
          <path
            d="M430,200 Q530,190 540,260 Q520,380 470,410 Q410,330 410,240 Z"
            fill="#E5E7EB"
          />
          {/* Asia */}
          <path
            d="M570,90 Q780,80 820,160 Q790,260 670,250 Q600,210 570,140 Z"
            fill="#E5E7EB"
          />
          {/* India Subcontinent */}
          <path
            d="M660,230 Q720,240 710,310 Q685,345 660,310 Q640,260 660,230 Z"
            fill="#FEE2E2"
            stroke="#DC2626"
            strokeWidth="1"
          />
          {/* Australia */}
          <path
            d="M810,330 Q890,320 920,370 Q880,440 820,410 Q790,370 810,330 Z"
            fill="#D1D5DB"
          />

          {/* Flight Path Lines from Hyderabad */}
          {GLOBAL_LOCATIONS.slice(1).map((loc) => {
            const x1 = (hyd.x / 100) * 1000;
            const y1 = (hyd.y / 100) * 500;
            const x2 = (loc.x / 100) * 1000;
            const y2 = (loc.y / 100) * 500;
            // Arc curve control point
            const midX = (x1 + x2) / 2;
            const midY = Math.min(y1, y2) - 40;

            const isSelected = selectedLoc.id === loc.id;

            return (
              <g key={loc.id}>
                <path
                  d={`M${x1},${y1} Q${midX},${midY} ${x2},${y2}`}
                  fill="none"
                  stroke={isSelected ? '#DC2626' : '#9CA3AF'}
                  strokeWidth={isSelected ? '2' : '1'}
                  strokeDasharray={isSelected ? 'none' : '3,3'}
                  className="transition-all duration-300"
                />
              </g>
            );
          })}

          {/* Map Location Markers */}
          {GLOBAL_LOCATIONS.map((loc) => {
            const cx = (loc.x / 100) * 1000;
            const cy = (loc.y / 100) * 500;
            const isHyd = loc.id === 'hyd';
            const isSelected = selectedLoc.id === loc.id;

            return (
              <g
                key={loc.id}
                className="cursor-pointer group"
                onClick={() => setSelectedLoc(loc)}
              >
                {/* Pulse ring for Hyderabad */}
                {isHyd && (
                  <circle
                    cx={cx}
                    cy={cy}
                    r="12"
                    fill="none"
                    stroke="#DC2626"
                    strokeWidth="1.5"
                    className="animate-ping opacity-60"
                  />
                )}

                {/* Outer ring */}
                <circle
                  cx={cx}
                  cy={cy}
                  r={isSelected ? '7' : isHyd ? '6' : '4.5'}
                  fill={isHyd ? '#DC2626' : isSelected ? '#DC2626' : '#111827'}
                  stroke="#FFFFFF"
                  strokeWidth="1.5"
                  className="transition-all duration-200"
                />

                {/* City name text */}
                <text
                  x={cx}
                  y={cy - 10}
                  textAnchor="middle"
                  className={`text-[9px] font-bold fill-neutral-900 pointer-events-none transition-all ${
                    isHyd || isSelected ? 'fill-red-700 font-extrabold text-[11px]' : 'fill-neutral-700'
                  }`}
                  style={{ fontFamily: 'Open Sans' }}
                >
                  {loc.name.split(' ')[0]}
                </text>
              </g>
            );
          })}
        </svg>

        {/* Floating Quick Location Card */}
        <div className="absolute bottom-2 left-2 right-2 md:left-auto md:right-3 md:bottom-3 md:w-80 bg-white/95 backdrop-blur-xs border border-neutral-300 p-3 shadow-xs">
          <div className="flex items-center justify-between border-b border-neutral-100 pb-1.5 mb-1.5">
            <span className="text-[10px] uppercase tracking-wider font-extrabold text-red-600">
              {selectedLoc.region}
            </span>
            <span className="text-[10px] font-semibold text-neutral-500">
              {selectedLoc.country}
            </span>
          </div>
          <div className="text-sm font-bold text-neutral-900">
            {selectedLoc.name}
          </div>
          <div className="text-xs font-semibold text-red-700 mt-0.5">
            {selectedLoc.role}
          </div>
          <div className="text-[11px] text-neutral-600 mt-1 leading-snug">
            {selectedLoc.details}
          </div>
        </div>
      </div>

      {/* Pathway Chain Bar */}
      <div className="mt-4 pt-3 border-t border-neutral-200 flex flex-wrap items-center justify-between gap-2 text-xs">
        <div className="flex items-center gap-2 font-bold text-neutral-900">
          <span className="px-2 py-0.5 bg-neutral-900 text-white font-extrabold text-[11px]">HYDERABAD</span>
          <span className="text-red-600 font-extrabold">→</span>
          <span className="px-2 py-0.5 bg-neutral-100 border border-neutral-300 text-neutral-800 font-bold text-[11px]">EUROPE / ATO</span>
          <span className="text-red-600 font-extrabold">→</span>
          <span className="px-2 py-0.5 bg-neutral-100 border border-neutral-300 text-neutral-800 font-bold text-[11px]">AUSTRALIA / CASA</span>
          <span className="text-red-600 font-extrabold">→</span>
          <span className="px-2 py-0.5 bg-red-600 text-white font-extrabold text-[11px]">GLOBAL AIRLINES</span>
        </div>
        <div className="text-[11px] text-neutral-500 font-medium">
          Click any highlighted station above to view operational capabilities.
        </div>
      </div>
    </div>
  );
};
