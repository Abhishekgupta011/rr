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
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={decrementHandler}>Decrement</button>
            </div>
            <button onClick={toggleCounterHandler}>Counter Button</button>
        </main>
    )
}

export default Counter;