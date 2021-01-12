import { createStore, combineReducers, applyMiddleware } from "redux";
import { createForms } from "react-redux-form";
import thunk from "redux-thunk";
import logger from "redux-logger";
import { Reducer } from "./reducer";
import { AppReducer } from "./appReducer";
import { ThunkReducer } from "./thunkReducer";

import { initialFeedback } from "./formReducer"; // from state 

export const StoreConfigs = () => {
	const store = createStore(
		combineReducers({
			// state name: reducer to take care of ( global -> state.app )
			app: AppReducer,
			general: Reducer,
			thunk: ThunkReducer,
			// new form
			...createForms({
				feedback: initialFeedback,
			}),
		}),
		applyMiddleware(thunk, logger)
	);
	return store;
};
