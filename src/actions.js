// action types
const INCREMENT = "INCREMENT";
const DECREMENT = "DECREMENT";
const SET = "SET";

// action creators
export const incrementAction = () => {
	return {
		type: INCREMENT,
	};
};
export const decrementAction = () => {
	return {
		type: DECREMENT,
	};
};
export const setAction = (value) => {
	return {
		type: SET,
		payload: value,
	};
};

export const actionTypes = { INCREMENT, DECREMENT, SET };
