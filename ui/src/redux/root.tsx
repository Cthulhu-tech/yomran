import { applyMiddleware, combineReducers, createStore } from "redux";
import { visibleAside } from './store/aside'
import thunk from "redux-thunk";

export const rootReducer = combineReducers({
    visibleAside
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
