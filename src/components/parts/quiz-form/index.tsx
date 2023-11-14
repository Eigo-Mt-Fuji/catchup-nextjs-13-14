'use client';

import { QuizContext } from "@/hooks/quiz-context"
import { useContext, useState } from "react"
import { QuizQuestion } from '../../../types/quiz-question';
import { generateId }from '@/modules/generate-id'
import { LinearProgress } from "@mui/joy";
import QuizQuestionItem from "../quiz-question-item";
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
export default function QuizForm() {
    // コンポーネントの useContext() 呼び出しは、同じコンポーネントから返されるプロバイダの影響を受けません。対応する <Context.Provider> は、useContext() を呼び出すコンポーネントの上にある必要があります。
    // あるコンテクストのプロバイダが異なる value を受け取ると、当該プロバイダより下にありそのコンテクストを使用しているすべての子コンポーネントは、React によって自動的に再レンダーされます。前の値と次の値は、Object.is で比較されます。memo を使って再レンダーをスキップする場合でも、子コンポーネントがコンテクストから新しい値を受け取ることによる再レンダーは妨げられません。
        // ツリーの深くにデータを渡す
        // コンテクスト経由で渡されたデータの更新
        // フォールバックとなるデフォルト値の指定
        // ツリーの一部でコンテクストの値を上書きする
        // オブジェクトや関数を渡すときの再レンダーの最適化
    const value = useContext(QuizContext);
    const [currentQuestion, setCurrentQuestion] = useState<number>(0);

    //   const { state } = useQuizContext();
    //   const { questions, answers, currentQuestion, score, isFinished } = state;
    //   const [isAnswered, setIsAnswered] = useState(false);
    //   const { handleAnswer, handleNextQuestion } = useQuiz();

    //   const handleAnswerClick = (answer: string) => {
    //     handleAnswer(answer);
    //     setIsAnswered(true);
    //   };

    //   const handleNextQuestionClick = () => {
    //     setIsAnswered(false);
    //     handleNextQuestion();
    //   };

    //   const handleFinishClick = () => {
    //     history.push('/result');
    //   };

    // filter -> filter((q) => q.theme === value.theme); is auto complete(excellent) 
    const questions: QuizQuestion[] = [
        {
            id: generateId(),
            theme: "theme1",
            order: 1,
            question: "What you want to do?",
            answers: ["Have a Lunch", "Think about peace"],
            correctAnswer: "Think about peace"
        },
        {
            id: generateId(),
            theme: "theme2",
            order: 1,
            question: "Look for the outcast",
            answers: ["CloudRun", "Appsync", "Amplify", "EC2"],
            correctAnswer: "CloudRun"
        },
        {
            id: generateId(),
            theme: "theme1",
            order: 2,
            question: "Which do you like better?",
            answers: ["Cat", "Dog"],
            correctAnswer: "Cat"
        },
    ].filter((q) => q.theme === value.theme);

    // form for answering questions
    return (
        <>
            <div>{value.theme}のクイズたち</div>
            <div className="quiz">
                <LinearProgress value={currentQuestion / questions.length}/>
                {questions.map((question, index) => <QuizQuestionItem question={question} index={index} onChanged={(e)=> { /*update answer state*/}}></QuizQuestionItem>} />)}
                <ButtonGroup variant="contained" aria-label="contained button group">
                    <Button color="primary">これでどうだ</Button>
                    <Button color="secondary">やっぱなし</Button>
                </ButtonGroup>
            </div>
        </>
    )
}
