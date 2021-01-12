import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { Reducer } from "./reducer";
import { AppReducer } from "./appReducer";
import {ThunkReducer} from "./thunkReducer"

export const StoreConfigs = () => {
	const store = createStore(
		combineReducers({
			app: AppReducer,
			general: Reducer,
			thunk: ThunkReducer,
		}),
		applyMiddleware(thunk, logger)
	);
	return store;
};
