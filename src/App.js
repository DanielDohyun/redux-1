import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import {increment, decrement} from './actions'

function App() {

  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged);
  const dispatch = useDispatch();

  return (
    <div className="app">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment(2))}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>

      {
        isLogged && <h1>logged in</h1>
      }

    </div>
  );
}

export default App;
