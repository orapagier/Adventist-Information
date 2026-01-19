export enum AppTab {
  BELIEFS = 'BELIEFS',
  MANUAL = 'MANUAL',
  QUESTIONS = 'QUESTIONS'
}

export interface Belief {
  id: number;
  title: string;
  shortDescription: string;
  fullText: string;
}

export interface ManualChapter {
  id: string;
  title: string;
  category: string;
  fullText: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: number;
}

export interface ContentState {
  isLoading: boolean;
  data: string | null;
  error: string | null;
}