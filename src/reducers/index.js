import { combineReducers } from "redux";
import counterReducer from "./counter";
import loggedReducer from "./isLogged";

const allReducers = combineReducers({
    counter: counterReducer, //giving it a name
    isLogged: loggedReducer
})

export default allReducers