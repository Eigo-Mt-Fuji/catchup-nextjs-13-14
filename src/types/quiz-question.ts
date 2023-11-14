type QuizQuestionId = string;
export type QuizQuestion = {
    id: QuizQuestionId;
    theme: string;
    order: number;
    question: string;
    answers: string[];
    correctAnswer: string;
}
