import React from "react";
import {useSelector, useDispatch /*gives abilitiy to dispatch action*/} from "react-redux" //used to extract state
import { increment, decrement } from "./actions";


function App() {
  const counter = useSelector(state => state.counter) //access to whole state
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch()
  return (
    <div className="App">
      <h1>Counter {counter}</h1>
      <button onClick={() => dispatch(increment())}>+</button>
      <button onClick={() => dispatch(decrement())}>-</button>
      {isLogged ? <h3>Valuable Informaton i shouldn't see</h3> : ''}
    </div>
  );
}

export default App;
