export interface SlideContent {
  id: number;
  slideNumber: string;
  category: string;
  title: string;
  subtitle?: string;
  supportingText?: string;
  instructorNotes: string;
  stageName?: string;
}

export const SLIDES: SlideContent[] = [
  {
    id: 1,
    slideNumber: '01',
    category: 'WELCOME & OPENING',
    title: 'AIRWAYS AVIATION × LITTLE FLOWER',
    subtitle: 'Aviation Career Guidance Seminar',
    supportingText: '19 SEPTEMBER 2026 | HYDERABAD\nLITTLE FLOWER • FUTURE PILOTS',
    instructorNotes: 'Welcome students and parents. State clearly that today’s session is an educational, objective career briefing to provide genuine clarity on aviation pathways, prerequisites, and realistic expectations.',
    stageName: 'Welcome'
  },
  {
    id: 2,
    slideNumber: '02',
    category: 'ORIENTATION',
    title: 'YOUR AVIATION JOURNEY STARTS WITH UNDERSTANDING',
    subtitle: 'From career awareness to the cockpit',
    instructorNotes: 'Explain the 5 core stages: Explore (curiosity), Understand (regulations & requirements), Prepare (academics & medicals), Train (ground school & flight hours), and Progress (commercial airline transition).',
    stageName: "Today's Journey"
  },
  {
    id: 3,
    slideNumber: '03',
    category: 'INDUSTRY SCOPE',
    title: 'WHY AVIATION?',
    subtitle: 'A global high-technology ecosystem',
    instructorNotes: 'Highlight that commercial aviation connects continents, relies on state-of-the-art aerospace technology, provides global mobility, and offers structured long-term professional career ladders.',
    stageName: 'Why Aviation'
  },
  {
    id: 4,
    slideNumber: '04',
    category: 'CAREER ECOSYSTEM',
    title: 'AVIATION IS MORE THAN FLYING',
    subtitle: 'Interconnected technical professions',
    instructorNotes: 'Clarify that while the pilot is in the cockpit, aviation functions through a team of specialists: cabin crew, licensed aircraft engineers, flight dispatchers, ground operations, and aviation managers.',
    stageName: 'Beyond the Cockpit'
  },
  {
    id: 5,
    slideNumber: '05',
    category: 'ELIGIBILITY BASICS',
    title: 'START WITH THE BASICS',
    subtitle: 'Core regulatory prerequisites',
    supportingText: 'Eligibility • Medical • Documentation',
    instructorNotes: 'Address the mandatory DGCA requirements: 10+2 with Physics and Mathematics (or NIOS equivalent), minimum age of 17 years, Class 2 medical clearance before training, and valid passport.',
    stageName: 'Basics & Eligibility'
  },
  {
    id: 6,
    slideNumber: '06',
    category: 'TRAINING TIMELINE',
    title: 'FROM CLASSROOM TO COCKPIT',
    subtitle: 'Sequential professional milestones',
    instructorNotes: 'Walk the audience through the chronological timeline: Initial Career Counselling → DGCA Ground School in Hyderabad → Clearing DGCA central exams → Practical Flight Training → CPL Licence issue → Airline Type Rating & First Officer pathway.',
    stageName: 'The Pilot Pathway'
  },
  {
    id: 7,
    slideNumber: '07',
    category: 'THEORY CURRICULUM',
    title: 'KNOWLEDGE BEFORE TAKEOFF',
    subtitle: 'Mandatory DGCA ground subjects',
    instructorNotes: 'Briefly explain the 6 central DGCA written papers: Air Regulations, Air Navigation, Aviation Meteorology, Technical General (aerodynamics & engines), Technical Specific (aircraft type), and RTR (radio communication). Academic foundation is paramount.',
    stageName: 'What Pilots Study'
  },
  {
    id: 8,
    slideNumber: '08',
    category: 'CORE COMPETENCIES',
    title: 'WHAT DOES PILOT TRAINING DEVELOP?',
    subtitle: 'Professional qualities beyond stick and rudder',
    instructorNotes: 'Emphasize that flight training builds lifelong leadership: deep theoretical knowledge, strict operational discipline, sound aeronautical decision-making (ADM), standard ATC phraseology, technical precision, and an uncompromising safety mindset.',
    stageName: 'Core Competencies'
  },
  {
    id: 9,
    slideNumber: '09',
    category: 'PARENTAL GUIDANCE',
    title: 'WHAT SHOULD EVERY PARENT KNOW?',
    subtitle: 'Crucial pillars for family due diligence',
    supportingText: 'ASK QUESTIONS. UNDERSTAND THE PATH. PLAN WITH CONFIDENCE.',
    instructorNotes: 'Speak directly to parents on the four pillars: verifying academic eligibility (10+2 PCM), obtaining DGCA Class 2 medicals before committing, phased transparent financial planning without hidden costs, and allocating 18–24 months of consistent study and flight hours.',
    stageName: 'For Parents'
  },
  {
    id: 10,
    slideNumber: '10',
    category: 'INSTITUTIONAL HERITAGE',
    title: 'MEET AIRWAYS AVIATION',
    subtitle: 'Global aviation education network',
    instructorNotes: 'Share Airways Aviation verified track record: 45+ years of training legacy, 12,000+ commercial airline pilots graduated, 30,000+ total aviation graduates, a fleet of 100+ modern aircraft, and 15+ certified flight simulators worldwide.',
    stageName: 'Airways Aviation'
  },
  {
    id: 11,
    slideNumber: '11',
    category: 'REGIONAL HUB',
    title: 'YOUR JOURNEY CAN BEGIN HERE',
    subtitle: 'Airways Aviation India • Hyderabad Centre',
    instructorNotes: 'Explain how students in Telangana, Andhra Pradesh, and across India start at the Banjara Hills centre: personalized career guidance, full DGCA ground school prep, seamless transition to international flight bases, DGCA licence conversion, and airline preparation.',
    stageName: 'Journey from Hyderabad'
  },
  {
    id: 12,
    slideNumber: '12',
    category: 'CONCLUDING REMARKS',
    title: 'YOUR DREAM.\nOUR DIRECTION.',
    subtitle: 'THANK YOU FOR JOINING US',
    supportingText: '19 SEPTEMBER 2026 | LITTLE FLOWER | HYDERABAD\nAIRWAYS AVIATION',
    instructorNotes: 'Thank students and parents for their time and attentiveness. Open the floor for open Q&A and invite families to discuss academic documents with the senior aviation counselors present.',
    stageName: 'Closing'
  }
];
