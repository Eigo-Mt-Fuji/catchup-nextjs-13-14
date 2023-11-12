// Page component for the quiz

import React, { useState } from 'react';
// import { useHistory } from 'react-router-dom';
// import { useQuizContext } from './context';
// import { useQuiz } from './use-quiz';
// import { Question } from './question';
// import { Result } from './result';
// import { Button } from './button';
// import { Progress } from './progress';
// import { useTranslation } from 'react-i18next';

export const QuizPage = () => {
    return (
        <div>
            
        </div>
    );
//   const { t } = useTranslation();
//   const history = useHistory();
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

//   return (
//     <div className="quiz">
//       <Progress total={questions.length} current={currentQuestion} />
//       {isFinished ? (
//         <Result score={score} />
//       ) : (
//         <>
//           <Question
//             question={questions[currentQuestion]}
//             answer={answers[currentQuestion]}
//             isAnswered={isAnswered}
//           />
//           {isAnswered ? (
//             <Button onClick={currentQuestion === questions.length - 1 ? handleFinishClick : handleNextQuestionClick}>
//               {currentQuestion === questions.length - 1 ? t('Finish') : t('Next')}
//             </Button>
//           ) : (
//             <>
//               {questions[currentQuestion].answers.map((answer, index) => (
//                 <Button key={index} onClick={() => handleAnswerClick(answer)}>
//                   {answer}
//                 </Button>
//               ))}
//             </>
//           )}
//         </>
//       )}
//     </div>
//   );
};


