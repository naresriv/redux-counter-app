import React from 'react';
import {useDispatch, useSelector} from 'react-redux'
import { incrementCounter, decrementCounter } from '../../Redux/Action';

const CounterApp = () => {
    const dispatch = useDispatch();
    const count = useSelector(state => state.count)
    console.log("state", count)

    const increase= ()=>{
        dispatch(incrementCounter())
    }
    const decrease= ()=>{
        dispatch(decrementCounter())
    }
  return (
    <div>
            <h4>{count}</h4>
            <button onClick={increase}>increment</button>
            <button onClick={decrease}>decrement</button>
    </div>
  )
}

export default CounterApp
