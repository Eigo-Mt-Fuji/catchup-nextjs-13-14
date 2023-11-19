'use client';
import { createContext } from "react";

export interface IQuizContext {
    theme: string;
    themeText: string;
}
export const QuizContext = createContext<IQuizContext>({theme: "theme1", themeText: "theme1"})
