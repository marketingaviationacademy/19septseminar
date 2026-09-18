export interface SlideData {
  id: number;
  slug: string;
  category: string;
  title: string;
  subtitle?: string;
  eyebrow?: string;
  supportingText?: string;
  speakerNotes: string;
}

export type PresentationMode = 'presentation' | 'presenter' | 'overview';
