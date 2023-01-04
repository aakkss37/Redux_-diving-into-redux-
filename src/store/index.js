import redux from "redux";


const counterReducer = (state = {count: 3}, action)=>{
	if (action.type === "increment") {
		return{
			count: state.count + 1
		}
	}
	
	if (action.type === "decrement") {
		return{
			count: state.count - 1
		}
	}
	return state
}

const store = redux.createStore(counterReducer);


console.log(store.getState());


// const counterSubscriber = ()=>{
// 	const latestState = store.getState();
// 	console.log(latestState);
// };
// store.subscribe(counterSubscriber);

export default store;


store.dispatch({type: "increment"});
store.dispatch({type: "decrement"});

