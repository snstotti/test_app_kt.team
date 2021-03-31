import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from 'redux-devtools-extension';
import taskReduser from "../reducer/taskReduser";




const rootReducer = combineReducers({
    taskStore: taskReduser
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)))