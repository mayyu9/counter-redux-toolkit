import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incrementSlice, decrementSlice, incrementSliceBy } from './slices/CounterSlice';

function CounterWithToolKit() {

    const counterInitVal = useSelector((state) => state.counterSliceReducer.counterState);
    const dispatch = useDispatch();

    return(
        <>
        <h1>Counter App using redux toolkit</h1>
        <p>Count: {counterInitVal}</p>
        <button type='button' onClick={() => dispatch(incrementSlice())}>+</button>
        <button type='button' onClick={() => dispatch(decrementSlice())}>-</button>
        <button type='button' onClick={() => dispatch(incrementSliceBy(5))}>Increment By 5</button>
        </>
    )
}

export default CounterWithToolKit;
