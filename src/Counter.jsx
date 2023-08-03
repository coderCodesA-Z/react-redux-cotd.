import { SetCounter } from "./SetCounter";
import { useCounter } from "./useCounter";

export const Counter = () => {
	const incident = "Incident";
	const { count, incrementAction, decrementAction, setAction } = useCounter();

	return (
		<main className="Counter">
			<h1>Days Since Last {incident}</h1>
			<p className="count">{count}</p>
			<section className="controls">
				<button onClick={() => incrementAction()}>Increment</button>
				<button onClick={() => setAction(0)}>Reset</button>
				<button onClick={() => decrementAction()}>Decrement</button>
			</section>
			<SetCounter />
		</main>
	);
};

export default Counter;
