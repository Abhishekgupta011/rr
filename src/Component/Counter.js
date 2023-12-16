import {useSelector , useDispatch} from "react-redux";
import {counterAction} from './Store/Index'
import classes from './Counter.module.css';
const Counter = ()=>{
    const dispatch = useDispatch();
    const counter = useSelector(state=>state.counter.counter)
    const show = useSelector(state => state.counter.showCounter)
    const incrementHandler = ()=>{
        dispatch(counterAction.increment())
    }
    const decrementHandler = ()=>{
        dispatch(counterAction.decrement())
    }
    const increaseHandler =()=>{
        dispatch(counterAction.increase(5))
    }
    const toggleCounterHandler = () =>{
        dispatch(counterAction.toggle())
    }
    return (
        <main className={classes.counter}>
            <h1>Counter Value</h1>
            {show && <div className={classes.value}>{counter}</div>}
            <div>
                <button onClick={incrementHandler}>Increment</button>
                <button onClick={decrementHandler}>Decrement</button>
                <button onClick={increaseHandler}>IncrementBy 5</button>
            </div>
            <button onClick={toggleCounterHandler}>Counter Button</button>
        </main>
    )
}

export default Counter;