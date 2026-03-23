import type { Section } from '../../domain/models/Section';
import type { TimelineEvent } from '../../domain/models/TimelineEvent';
import type { QuizQuestion } from '../../domain/models/QuizQuestion';
import type { SectionRepository } from '../../domain/ports/SectionRepository';

export class GetSections {
  constructor(private readonly repository: SectionRepository) {}

  all(): Section[] {
    return this.repository.getSections();
  }

  timeline(): TimelineEvent[] {
    return this.repository.getTimelineEvents();
  }

  quiz(): QuizQuestion[] {
    return this.repository.getQuizQuestions();
  }
}
