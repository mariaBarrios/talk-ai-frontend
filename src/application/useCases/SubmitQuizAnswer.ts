import type { QuizQuestion, QuizResult } from '../../domain/models/QuizQuestion';

export class SubmitQuizAnswer {
  execute(question: QuizQuestion, selectedOptionId: string): QuizResult {
    return {
      questionId: question.id,
      selectedOptionId,
      isCorrect: question.correctOptionId === selectedOptionId,
    };
  }
}
