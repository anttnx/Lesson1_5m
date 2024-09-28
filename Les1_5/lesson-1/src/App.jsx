import { useSelector, useDispatch } from 'react-redux'
import {
	increment,
	decrement,
	reset,
	decrementTen,
	incrementTen,
} from './store/action'

const App = () => {
	const count = useSelector((state) => state.count)

	const dispatch = useDispatch()

	return (
		<div>
			<h1>Counter: {count}</h1>
			<div style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
				<button onClick={() => dispatch(increment())}> + 1</button>
				<button disabled={count === 0} onClick={() => dispatch(decrement())}>
					- 1
				</button>
				<button onClick={() => dispatch(incrementTen())}> + 10</button>

				<button disabled={count < 10} onClick={() => dispatch(decrementTen())}>
					- 10
				</button>
				<button onClick={() => dispatch(reset())}>Reset</button>
			</div>
		</div>
	)
}

export default App
