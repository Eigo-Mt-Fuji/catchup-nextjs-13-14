'use client';

// Page component for the quiz

import React, { useState } from 'react';

// 開発のポイントがいくつあるか探りながら、丁寧にやるんだぞ
// Figma デザイン - Storybook デザインシステム - Next.js/React

// import { useHistory } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
import { QuizContext, IQuizContext } from '@/hooks/quiz-context';
// TODO: export default  vs named export
import QuizForm from '@/components/parts/quiz-form';
import { useParams } from 'next/navigation';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';

export default function QuizPage() {
    // useParams only works in Client Components
    const params: Params = useParams();
    const c: IQuizContext ={
        theme: params.theme,
    }
//   const { t } = useTranslation();

//   const history = useHistory();

return (
        <QuizContext.Provider value={c}>
            <QuizForm />
        </QuizContext.Provider>
    );
};


