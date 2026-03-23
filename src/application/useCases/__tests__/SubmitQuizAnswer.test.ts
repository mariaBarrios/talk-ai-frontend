import { describe, it, expect } from 'vitest';
import type { QuizQuestion } from '../../../domain/models/QuizQuestion';
import { SubmitQuizAnswer } from '../SubmitQuizAnswer';

const baseQuestion: QuizQuestion = {
  id: 'q1',
  question: 'Test?',
  options: [
    { id: 'a', text: 'A' },
    { id: 'b', text: 'B' },
  ],
  correctOptionId: 'a',
  explanation: 'Because.',
};

describe('SubmitQuizAnswer', () => {
  const useCase = new SubmitQuizAnswer();

  it('returns isCorrect: true when selectedOptionId matches correctOptionId', () => {
    const result = useCase.execute(baseQuestion, 'a');
    expect(result.isCorrect).toBe(true);
  });

  it('returns isCorrect: false when selectedOptionId does not match', () => {
    const result = useCase.execute(baseQuestion, 'b');
    expect(result.isCorrect).toBe(false);
  });

  it('returns the correct questionId and selectedOptionId in the result', () => {
    const result = useCase.execute(baseQuestion, 'b');
    expect(result.questionId).toBe('q1');
    expect(result.selectedOptionId).toBe('b');
  });
});
