import React from 'react';
import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent } from '@testing-library/react';
import type { QuizQuestion } from '../../../../domain/models/QuizQuestion';
import { Quiz } from '../Quiz';

vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: React.PropsWithChildren<Record<string, unknown>>) => {
      const validProps: Record<string, unknown> = {};
      for (const [key, value] of Object.entries(props)) {
        if (
          key === 'className' ||
          key === 'style' ||
          key.startsWith('on') ||
          key.startsWith('data-') ||
          key.startsWith('aria-')
        ) {
          validProps[key] = value;
        }
      }
      return React.createElement('div', validProps, children);
    },
  },
  AnimatePresence: ({ children }: React.PropsWithChildren) => children,
}));

const TEST_QUESTIONS: QuizQuestion[] = [
  {
    id: 'q1',
    question: 'What is 1 + 1?',
    options: [
      { id: 'a', text: '1' },
      { id: 'b', text: '2' },
      { id: 'c', text: '3' },
    ],
    correctOptionId: 'b',
    explanation: 'Basic math.',
  },
  {
    id: 'q2',
    question: 'What is 2 + 2?',
    options: [
      { id: 'a', text: '3' },
      { id: 'b', text: '4' },
    ],
    correctOptionId: 'b',
    explanation: 'Still basic math.',
  },
];

describe('Quiz', () => {
  it('renders first question', () => {
    render(<Quiz questions={TEST_QUESTIONS} />);
    expect(screen.getByText('What is 1 + 1?')).toBeInTheDocument();
    expect(screen.getByText('Q1/2')).toBeInTheDocument();
  });

  it('correct answer shows CORRECT feedback', () => {
    render(<Quiz questions={TEST_QUESTIONS} />);
    fireEvent.click(screen.getByRole('button', { name: 'B2' }));
    expect(screen.getByText('✓ CORRECT!')).toBeInTheDocument();
  });

  it('wrong answer shows WRONG feedback', () => {
    render(<Quiz questions={TEST_QUESTIONS} />);
    fireEvent.click(screen.getByRole('button', { name: 'A1' }));
    expect(screen.getByText('✗ WRONG!')).toBeInTheDocument();
  });

  it('options are disabled after answering', () => {
    render(<Quiz questions={TEST_QUESTIONS} />);
    fireEvent.click(screen.getByRole('button', { name: 'B2' }));
    expect(screen.getByRole('button', { name: 'A1' })).toBeDisabled();
    expect(screen.getByRole('button', { name: 'B2' })).toBeDisabled();
    expect(screen.getByRole('button', { name: 'C3' })).toBeDisabled();
  });

  it('navigating to next question', () => {
    render(<Quiz questions={TEST_QUESTIONS} />);
    fireEvent.click(screen.getByRole('button', { name: 'B2' }));
    fireEvent.click(screen.getByRole('button', { name: 'NEXT →' }));
    expect(screen.getByText('What is 2 + 2?')).toBeInTheDocument();
    expect(screen.getByText('Q2/2')).toBeInTheDocument();
  });

  it('shows final score after last question', () => {
    render(<Quiz questions={TEST_QUESTIONS} />);
    fireEvent.click(screen.getByRole('button', { name: 'B2' }));
    fireEvent.click(screen.getByRole('button', { name: 'NEXT →' }));
    fireEvent.click(screen.getByRole('button', { name: 'B4' }));
    fireEvent.click(screen.getByRole('button', { name: 'RESULTS' }));
    expect(screen.getByText(/SCORE: \d\/2/)).toBeInTheDocument();
  });
});
