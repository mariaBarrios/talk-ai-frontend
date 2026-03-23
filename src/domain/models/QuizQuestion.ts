export interface QuizQuestion {
  id: string;
  question: string;
  options: QuizOption[];
  correctOptionId: string;
  explanation: string;
}

interface QuizOption {
  id: string;
  text: string;
}

export interface QuizResult {
  questionId: string;
  selectedOptionId: string;
  isCorrect: boolean;
}
