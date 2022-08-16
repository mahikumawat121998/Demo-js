import React, { useState, useEffect } from 'react'

const UseEffect = () => {
    const [Number, setNumber] = useState(0);
    const [Toggal, setToggal] = useState(true);

    useEffect(() => {
        console.count("Hello World");
        const myInterval = setInterval(() => {
            setNumber(previous => previous + 1);
        }, 1000);

        return (() => {
            clearInterval(myInterval)
            console.log("Here We Are Using Cleaning Function")
        })
    }, [Toggal])

    return (
        <div>
            <h2>{Number}erfner</h2>
            <h1>{Toggal}</h1>
            <button onClick={() => setToggal(!Toggal)}>Click Me</button>
        </div>

    )
}

export default UseEffect