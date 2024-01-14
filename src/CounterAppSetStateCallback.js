import React, { useState } from 'react';

const CounterApp = () => {
    const [count, setCount] = useState(0);

    const incrementHandler = () => {
        /* the below code  on ne click of increment count
         will br updated to 1 */
        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);
        setCount(count + 1);

        /* using call back way- if we uncomment the below line then on one click of increment count
         will br updated to 4, as we are passing the callback to the setCount function */
        // setCount(prevCount => prevCount + 1);
        // setCount(prevCount => prevCount + 1);
        // setCount(prevCount => prevCount + 1);
        // setCount(prevCount => prevCount + 1);
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
