import classes from './Counter.module.css';
import { useSelector, useDispatch } from 'react-redux';

const Counter = () => {
	const dispatch = useDispatch();
	const counter = useSelector(state => state.counter)

	const incrementHandler = ()=>{
		dispatch({type: "increment"})
	}
	const increaseByHandler = ()=>{
		dispatch({type: "increase", amount: 10})
	}
	const decrementHandler = ()=>{
		dispatch({type: "decrement"})
	}
	const toggleCounterHandler = () => { };
	

	return (
		<main className={classes.counter}>
			<h1>Redux Counter</h1>
			<div className={classes.value}>{counter}</div>
			<div>
				<button onClick={incrementHandler}>increment</button>
				<button onClick={increaseByHandler}>increment by 10</button>
				<button onClick={decrementHandler}>decrement</button>
			</div>
			<button onClick={toggleCounterHandler}>Toggle Counter</button>
		</main>
	);
};

export default Counter;
