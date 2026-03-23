import type { Section } from '../models/Section';
import type { TimelineEvent } from '../models/TimelineEvent';
import type { QuizQuestion } from '../models/QuizQuestion';

export interface SectionRepository {
  getSections(): Section[];
  getTimelineEvents(): TimelineEvent[];
  getQuizQuestions(): QuizQuestion[];
}
