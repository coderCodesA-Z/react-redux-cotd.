import { actionTypes } from "./actions";

export const initialState = { counter: 0 };
export const reducer = (state = initialState, action) => {
	switch (action.type) {
		case actionTypes.INCREMENT:
			return {
				...state,
				counter: state.counter + 1,
			};
		case actionTypes.DECREMENT:
			return {
				...state,
				counter: state.counter - 1,
			};
		case actionTypes.SET:
			return {
				...state,
				counter: parseInt(action.payload, 10),
			};
		default:
			return state;
	}
};
