import { combineReducers, compose, createStore, applyMiddleware } from "redux";
// import ReduxThunk from "redux-thunk";
import tabbarRed from "./reducers/tabbarRed";
import {thunk} from 'redux-thunk'
import videosRed from "./reducers/videosRed";

const reducers = combineReducers({
    tabbarRed,
    videosRed
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, {}, composeEnhancers(applyMiddleware(thunk)));

export { store }