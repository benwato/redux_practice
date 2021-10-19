import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { createStore} from 'redux'; //combines reducers into to one allowing to be added to the store
import allReducers from './reducers';
import { Provider } from 'react-redux';

const store = createStore(allReducers, 
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


//let store = createStore(reducer)


// //STORE- global state-holds all data or state for application


// //ACTION- describes what you want to do, in this case increment
// //describe i am hungry e.g- function that returns an object
// const increment = () => {
//   return{
//     type: 'INCREMENT',
//   }
// }

// const decrement = () => {
//   return{
//     type: 'DECREMENT',
//   }
// }

// //REDUCER- describes how actions transform one state into the next state
// //takes two parameters, initial state and action
// const counter = (state = 0, action) => {
//   switch(action.type){ //based on the name
//     case "INCREMENT":
//       return state + 1; //initial state which is 0 plus 1- then update store
//     case "DECREMENT":
//       return state - 1;
//   } 
// }

// let store = createStore(counter) //creating the store

// //DISPLAY IN CONSOLE
// store.subscribe(() => console.log(store.getState())) //display our store

// //DISPATCH- way in which we exectue the action- dispatch action to reducer
// store.dispatch(increment())
// store.dispatch(decrement())


ReactDOM.render( //wrap in provider to allow whole app access to the store
  <React.StrictMode>
    <Provider store={store}> 
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();


//action called, dispatch action to reducer, reducer check action we did, based on action it will modify store 