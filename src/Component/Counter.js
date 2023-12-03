import {useSelector , useDispatch} from "react-redux";

const Counter = ()=>{
    const dispatch = useDispatch();
    const counter = useSelector(state=>state.counter)

    const incrementHandler = ()=>{
        dispatch({type:'increment'})
    }
    const decrementHandler = ()=>{
        dispatch({type:'decrement'})
    }
    const toggleCounterHandler = () =>{

    }
    return (
        <main>
            <h1>Counter Value</h1>
            <div>{counter}</div>
            <div>
                <button onClick={incrementHandler}>IncrementBy 5</button>
                <button onClick={decrementHandler}>DecrementBy 5</button>
            </div>
            <button onClick={toggleCounterHandler}>Counter Button</button>
        </main>
    )
}

export default Counter;