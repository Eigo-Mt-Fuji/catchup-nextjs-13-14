'use client';

import { QuizQuestion } from "@/types/quiz-question";
import { useState } from "react";
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

export default function QuizQuestionItem({ question, index }: { question: QuizQuestion, index: number }) {
    const [answer, setAnswer] = useState<string|undefined>();
    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAnswer(event.target.value);
    }
    return (
        <FormControl>
            <FormLabel id="demo-radio-buttons-group-label"><span className="question-label">Q#{index}. {question.question}</span></FormLabel>
            <RadioGroup aria-labelledby="demo-controlled-radio-buttons-group" name={`question${index}`} value={answer} onChange={handleChange}>
                {question.answers.map((a, _) => {
                    return (<FormControlLabel value={a} control={<Radio />} label={a} />)
                })}
            </RadioGroup>
        </FormControl>
    )
}