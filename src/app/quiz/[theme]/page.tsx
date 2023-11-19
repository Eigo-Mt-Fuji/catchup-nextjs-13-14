'use client';

// Page component for the quiz

import React, { useState } from 'react';

// 開発のポイントがいくつあるか探りながら、丁寧にやるんだぞ
// Figma デザイン - Storybook デザインシステム - Next.js/React

// import { useHistory } from 'react-router-dom';
// import { useTranslation } from 'react-i18next';
import { QuizContext, IQuizContext } from '@/hooks/quiz-context';
// TODO: export default  vs named export
// defaultの場合は import時に名前を変更することができるため、複数ファイルで呼び出されるときにそれぞれのファイルで名前が一致しないという状況が起きてしまうかも。予期せぬエラーや可読性が落ちる。エディタの自動importがnamed exportのみ恩恵を受けれるという情報をみかけたほんと？
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


