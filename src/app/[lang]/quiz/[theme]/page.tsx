'use server';

// Page component for the quiz
// 開発のポイントがいくつあるか探りながら、丁寧にやるんだぞ
// Figma デザイン - Storybook デザインシステム - Next.js/React

import React, { useState } from 'react';
import { getDictionary } from '../../dictionaries';
import { QuizContext, IQuizContext } from '@/hooks/quiz-context';
// TODO: export default  vs named export
// defaultの場合は import時に名前を変更することができるため、複数ファイルで呼び出されるときにそれぞれのファイルで名前が一致しないという状況が起きてしまうかも。予期せぬエラーや可読性が落ちる。エディタの自動importがnamed exportのみ恩恵を受けれるという情報をみかけたほんと？
import QuizForm from '@/components/parts/quiz-form';
import { useParams } from 'next/navigation';
import { Params } from 'next/dist/shared/lib/router/utils/route-matcher';

export default async function QuizPage() {
    // useParams only works in Client Components
    const params: Params = useParams();
    const dict = await getDictionary(params.lang) // ja or en
    const c: IQuizContext ={
        theme: params.theme,
        themeText: dict[params.theme],
    }
//   const { t } = useTranslation();

//   const history = useHistory();

return (
        <QuizContext.Provider value={c}>
            <QuizForm />
        </QuizContext.Provider>
    );
};


