"use client"

import {useState, useEffect} from 'react'

function Component() {
    const [helloWorld, setHelloWorld] = useState<string>("(^_^)");
    useEffect(() => {
        fetch('http://localhost:3000/myapi?lat=35.657741&lon=139.7009714&amenity=toilets')
        .then(() => setHelloWorld('done'))
    }, [helloWorld])
    return <div>Hello {helloWorld}</div>
}
export default Component;