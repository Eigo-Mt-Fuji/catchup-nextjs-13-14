'use client';

import { styled } from '@mui/system';
import { Typography } from '@mui/material';

const RotatedText = styled(Typography)({
    fontSize: '1.5rem',
    color: 'black',
    transform: 'rotate(5deg)',
    transformOrigin: '0 0',
});

export function Transform() { 
    // Text1をcss transformで45 deg 回転させるサンプルコード muiのstyledコンポーネントを使用
    // StyledTransformText = styled.div`
    return (
        <div style={{'height':'100vh', 'width':'100vw'}}>
            <RotatedText variant='h1'>ちょっと</RotatedText>
            <RotatedText variant='h1'>ちょっとちょっと</RotatedText>
        </div>
    )
}