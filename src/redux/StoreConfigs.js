import { createStore, combineReducers } from "redux";
import { Reducer } from "./reducer";
import { AppReducer } from "./appReducer";

export const StoreConfigs = () => {
	const store = createStore(
		combineReducers({
			app: AppReducer,
			general: Reducer,
		})
	);
	return store;
};
