import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import { Quiz } from '../Quiz';
import { aQuizQuestion } from '../../../../__tests__/builders';

vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => {
      const domProps: Record<string, unknown> = {};
      for (const [key, value] of Object.entries(props)) {
        if (key === 'className' || key === 'style' || key.startsWith('on') || key.startsWith('data-') || key.startsWith('aria-')) {
          domProps[key] = value;
        }
      }
      return React.createElement('div', domProps, children);
    },
  },
  AnimatePresence: ({ children }: React.PropsWithChildren) => children,
}));

const QUESTIONS = [
  aQuizQuestion({
    id: 'q1',
    question: '¿Qué devuelve typeof null?',
    options: [
      { id: 'a', text: '"null"' },
      { id: 'b', text: '"object"' },
    ],
    correctOptionId: 'b',
    explanation: 'Bug historico de JS.',
  }),
  aQuizQuestion({
    id: 'q2',
    question: '¿Qué imprime 1 + "2" + 3?',
    options: [
      { id: 'a', text: '6' },
      { id: 'b', text: '"123"' },
    ],
    correctOptionId: 'b',
    explanation: 'Coercion de tipos.',
  }),
];

function answerCorrectly() {
  fireEvent.click(screen.getByRole('button', { name: /^B/i }));
}

function answerIncorrectly() {
  fireEvent.click(screen.getByRole('button', { name: /^A/i }));
}

function goToNextQuestion() {
  fireEvent.click(screen.getByRole('button', { name: /NEXT|RESULTS/ }));
}

describe('Quiz', () => {
  it('renders the first question and progress counter', () => {
    render(<Quiz questions={QUESTIONS} />);

    expect(screen.getByText('¿Qué devuelve typeof null?')).toBeInTheDocument();
    expect(screen.getByText('Q1/2')).toBeInTheDocument();
    expect(screen.getByText('SCORE: 0')).toBeInTheDocument();
  });

  it('shows positive feedback on correct answer', () => {
    render(<Quiz questions={QUESTIONS} />);

    answerCorrectly();

    expect(screen.getByText('✓ CORRECT!')).toBeInTheDocument();
    expect(screen.getByText('Bug historico de JS.')).toBeInTheDocument();
  });

  it('shows negative feedback on wrong answer', () => {
    render(<Quiz questions={QUESTIONS} />);

    answerIncorrectly();

    expect(screen.getByText('✗ WRONG!')).toBeInTheDocument();
  });

  it('disables all options after answering', () => {
    render(<Quiz questions={QUESTIONS} />);

    answerCorrectly();

    const buttons = screen.getAllByRole('button').filter((b) => !b.textContent?.includes('NEXT'));
    for (const button of buttons) {
      expect(button).toBeDisabled();
    }
  });

  it('advances to the next question', () => {
    render(<Quiz questions={QUESTIONS} />);

    answerCorrectly();
    goToNextQuestion();

    expect(screen.getByText('¿Qué imprime 1 + "2" + 3?')).toBeInTheDocument();
    expect(screen.getByText('Q2/2')).toBeInTheDocument();
  });

  it('shows final score after the last question', () => {
    render(<Quiz questions={QUESTIONS} />);

    answerCorrectly();
    goToNextQuestion();
    answerCorrectly();
    goToNextQuestion();

    expect(screen.getByText('SCORE: 2/2')).toBeInTheDocument();
    expect(screen.getByText('¡Perfecto! Tienes buen nivel de fundamentos.')).toBeInTheDocument();
  });

  it('counts only correct answers in the score', () => {
    render(<Quiz questions={QUESTIONS} />);

    answerIncorrectly();
    goToNextQuestion();
    answerCorrectly();
    goToNextQuestion();

    expect(screen.getByText('SCORE: 1/2')).toBeInTheDocument();
  });
});
