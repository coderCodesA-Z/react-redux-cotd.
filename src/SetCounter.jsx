import { useEffect, useState } from "react";
import { useCounter } from "./useCounter";

export const SetCounter = () => {
	const { count: countFromStore, setAction } = useCounter();
	const [count, setCount] = useState(countFromStore);

	//  if subscribe could be used for the input instead of useEffect :
	// NO, SINCE THE ENTIRE STORE OBJECT IS NOT AVAILABLE TO US
	// useSelector and useDispatch only exposes the state from the store
	useEffect(() => {
		setCount(countFromStore);
	}, [countFromStore]);

	return (
		<section className="controls">
			<form
				onSubmit={(event) => {
					event.preventDefault();
					setAction(count);
				}}
			>
				<label htmlFor="set-to">Set Count</label>
				<input
					id="set-to"
					type="number"
					value={count}
					onChange={(event) => {
						setCount(event.target.value);
					}}
				/>
				<input type="submit" />
			</form>
		</section>
	);
};
