"use client";
import { useCallback, useState } from "react"
import { Grid } from '@mui/material';

export interface SampleUseCallbackProps {
    defaultCount: number
}

export default (props: SampleUseCallbackProps) => {
    const [count, setCount] = useState<number>(props.defaultCount)
    const increment = useCallback((cnt: number) => setCount(cnt + 1), [props.defaultCount])
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => increment(count)}>Increase</button>
        </div>
    )
}
