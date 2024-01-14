import React, { useState } from 'react';

function CounterApp(){
    const [count, setCount] = useState(0);

    const incrementHandler = () => {
        setCount(count + 1);
    }

    const decrementHandler = () => {
        if(count > 0)
            setCount(count - 1);
    }

    return(
        <>
        <p>Count: {count}</p>
        <button type='button' onClick={incrementHandler}>+</button>
        <button type='button' onClick={decrementHandler}>-</button>
        </>
    )
};

export default CounterApp;
