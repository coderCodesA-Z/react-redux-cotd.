import { useSelector } from "react-redux";
import { decrementAction, incrementAction, setAction } from "./actions";
import { useActions } from "./useAction";

export const useCounter = () => {
	const count = useSelector((state) => state.counter);
	const actions = useActions({ incrementAction, decrementAction, setAction });

	return { count, ...actions };
};
