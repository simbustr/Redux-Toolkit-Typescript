
import { increment, decrement } from '../../store/counterSlice';
import { useAppSelector, useAppDispatch } from '../../store/hooks'


const Counter = () => {
    
  const counter = useAppSelector((state) => state.counter.value)
  const dispatch = useAppDispatch()

    

  return (
    <div>
            <h1>Counter: {counter}</h1>
            <button onClick={() => dispatch(increment())}>Increment</button>
            <button onClick={() => dispatch(decrement())}>Decrement</button>
    </div>
  )
}

export default Counter
