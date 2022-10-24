import { applyMiddleware, combineReducers, createStore } from "redux"
import { visiblePopup } from "./store/popup"
import { visibleAside } from './store/aside'
import { roomsStore } from "./store/rooms"
import thunk from "redux-thunk"

export const rootReducer = combineReducers({
    visibleAside,
    roomsStore,
    visiblePopup,
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
