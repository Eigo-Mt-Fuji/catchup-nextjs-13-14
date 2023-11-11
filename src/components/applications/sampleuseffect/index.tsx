'use client';


// Cursor useState import漏れたのなぜ?
import { useState, useEffect } from "react"

export interface SampleUseEffectProps {
    defaultCount: number
}

export default function SampleUseeffect(props: SampleUseEffectProps) {
    const [count, setCount] = useState<number>(props.defaultCount)
    useEffect(() => {
        document.title = `Count: ${count}`
    }, [count])
    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increase</button>
        </div>
    )
}
