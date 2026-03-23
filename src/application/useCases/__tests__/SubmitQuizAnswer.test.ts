import { describe, it, expect } from 'vitest';
import { SubmitQuizAnswer } from '../SubmitQuizAnswer';
import { aQuizQuestion } from '../../../__tests__/builders';

describe('SubmitQuizAnswer', () => {
  const useCase = new SubmitQuizAnswer();

  it('marks correct when selected option matches the answer', () => {
    const question = aQuizQuestion({ correctOptionId: 'b' });
    const result = useCase.execute(question, 'b');

    expect(result).toEqual({
      questionId: question.id,
      selectedOptionId: 'b',
      isCorrect: true,
    });
  });

  it('marks incorrect when selected option differs from the answer', () => {
    const question = aQuizQuestion({ correctOptionId: 'a' });
    const result = useCase.execute(question, 'c');

    expect(result).toEqual({
      questionId: question.id,
      selectedOptionId: 'c',
      isCorrect: false,
    });
  });
});
