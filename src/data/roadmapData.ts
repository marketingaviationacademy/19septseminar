import { RoadmapStep } from '../components/FlightPathRoadmap';

export const PILOT_JOURNEY_STEPS: RoadmapStep[] = [
  {
    stepNumber: '01',
    title: 'INTEREST',
    category: 'Aspiration & Orientation',
    description: 'Initial curiosity develops into deliberate career awareness. Students and families assess personal aptitude, dedication to STEM subjects, and life as an airline crew member.',
    duration: 'Early Exploration',
    milestone: 'Attending Career Guidance Briefings & Self-Assessment'
  },
  {
    stepNumber: '02',
    title: 'ELIGIBILITY',
    category: 'Regulatory Qualification',
    description: 'Official confirmation of educational prerequisites: 10+2 / Intermediate with Physics and Mathematics (minimum age 17+). Verification of mark sheets and documentation readiness.',
    duration: 'Pre-enrollment',
    milestone: 'Formal verification of 10+2 Physics & Maths eligibility'
  },
  {
    stepNumber: '03',
    title: 'GROUND TRAINING',
    category: 'Theoretical Mastery',
    description: 'Intensive academic study covering core aeronautical sciences including Navigation, Meteorology, Regulations, and Aircraft Technical systems in Hyderabad.',
    duration: '4 to 6 Months',
    milestone: 'Classroom mastery of 6 core DGCA theory subjects'
  },
  {
    stepNumber: '04',
    title: 'MEDICAL & DOCS',
    category: 'Flight Fitness',
    description: 'Undergoing DGCA Class 2 and Class 1 medical examinations conducted by certified civil aviation medical examiners. Acquisition of Computer Number and passport formalities.',
    duration: '2 to 3 Months',
    milestone: 'Issuance of DGCA Class 1 Medical Fitness Assessment'
  },
  {
    stepNumber: '05',
    title: 'FLIGHT TRAINING',
    category: 'Practical Flying',
    description: 'Logging the required 200+ dual, solo, cross-country, night, and instrument flight hours in modern training aircraft at dedicated international flight academies.',
    duration: '12 to 14 Months',
    milestone: '200 Hours logged flight time meeting regulatory standards'
  },
  {
    stepNumber: '06',
    title: 'LICENSING',
    category: 'Commercial Accreditation',
    description: 'Completion of rigorous flight skill tests, radio telephony (RTR) licensing, and formal issuance of the Commercial Pilot Licence (CPL) with Instrument Rating (IR).',
    duration: '1 to 2 Months',
    milestone: 'Official Commercial Pilot Licence (CPL / MEIR) granted'
  },
  {
    stepNumber: '07',
    title: 'ADVANCED TRAINING',
    category: 'Airline Transition',
    description: 'Multi-Crew Cooperation (MCC), Jet Orientation Courses (JOC), and Type Rating preparation on commercial airliner simulators (such as Airbus A320 or Boeing 737).',
    duration: '2 to 3 Months',
    milestone: 'Multi-Crew Cooperation (MCC) & Type Rating Certification'
  },
  {
    stepNumber: '08',
    title: 'AIRLINE CAREER',
    category: 'Professional Operations',
    description: 'Induction into commercial passenger or cargo airlines as a First Officer, progressing with flight hours toward Senior First Officer and Airline Transport Pilot Captain.',
    duration: 'Lifetime Career',
    milestone: 'Airline Line Oriented Flight Training (LOFT) & First Officer Wings'
  }
];

export const CLASSROOM_TO_COCKPIT_STEPS: RoadmapStep[] = [
  {
    stepNumber: '01',
    title: 'CAREER COUNSELLING',
    category: 'Phase 1: Alignment',
    description: 'Transparent consultation in Hyderabad to evaluate student eligibility, discuss family planning, review timelines, and build an individualized flight training roadmap.',
    duration: 'Week 1',
    milestone: 'Complete documentation audit and candidate pathway mapping'
  },
  {
    stepNumber: '02',
    title: 'FOUNDATION / GROUND SCHOOL',
    category: 'Phase 2: Academic Core',
    description: 'Commencement of ground school in Banjara Hills, establishing strong baseline knowledge in principles of flight, cockpit terminology, physics, and flight logic.',
    duration: 'Month 1 - 2',
    milestone: 'Aviation foundation certification & internal progress tests'
  },
  {
    stepNumber: '03',
    title: 'DGCA THEORY',
    category: 'Phase 3: Regulatory Exams',
    description: 'In-depth preparation for Directorate General of Civil Aviation (DGCA) written examinations: Air Nav, Meteorology, Air Regs, Tech General, Tech Specific, and RTR.',
    duration: 'Month 3 - 6',
    milestone: 'Passing mandatory DGCA central examination papers'
  },
  {
    stepNumber: '04',
    title: 'MEDICAL & DOCUMENTATION',
    category: 'Phase 4: Regulatory Clearances',
    description: 'Assistance with DGCA Class 1 medical appointment booking, student pilot license issuance, visa paperwork, and international flight academy transfer preparations.',
    duration: 'Parallel',
    milestone: 'DGCA Class 1 Medical Fitness & International Visa approvals'
  },
  {
    stepNumber: '05',
    title: 'FLIGHT TRAINING',
    category: 'Phase 5: Aircraft Operation',
    description: 'Commencement of hands-on flying abroad (Australia / Europe) covering pre-solo circuits, stalls, steep turns, navigation cross-countries, and instrument flying.',
    duration: 'Month 7 - 18',
    milestone: 'Completion of 200+ flight hours across Single & Multi-Engine'
  },
  {
    stepNumber: '06',
    title: 'LICENSING',
    category: 'Phase 6: Professional CPL',
    description: 'Passing commercial pilot flight tests with approved flight examiners, acquiring Multi-Engine Instrument Rating (MEIR), and regulatory CPL endorsement.',
    duration: 'Month 19',
    milestone: 'Issuance of Commercial Pilot Licence & DGCA License Conversion'
  },
  {
    stepNumber: '07',
    title: 'AIRLINE PREPARATION',
    category: 'Phase 7: Jet Induction',
    description: 'Bridging the transition from light aircraft to jet airliners via Multi-Crew Cooperation (MCC), Jet Orientation Courses (JOC), and airline interview grooming.',
    duration: 'Month 20 - 22',
    milestone: 'Airline assessment readiness, simulator evaluation mastery'
  },
  {
    stepNumber: '08',
    title: 'CAREER PROGRESSION',
    category: 'Phase 8: Commercial Service',
    description: 'Airline cadet/junior first officer joining. Building commercial flight hours leading to ATPL unfreezing (1,500 hours) and eventual Captain command.',
    duration: 'Ongoing',
    milestone: 'Command upgrade to Captain (PIC) on commercial airliners'
  }
];
