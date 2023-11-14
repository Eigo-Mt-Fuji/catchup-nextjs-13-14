'use client';
import { createContext } from "react";

export interface IQuizContext {
    theme: string;
}
export const QuizContext = createContext<IQuizContext>({theme: "theme1"})
