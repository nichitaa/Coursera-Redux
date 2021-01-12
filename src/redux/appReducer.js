import * as TYPE from "./actionsTypes";

export const initialState = {
	loading: false,
	error: false,
	errorMessage: null,
};

export const AppReducer = (state = initialState, action) => {
	switch (action.type) {

		case TYPE.FETCH_LOADING:
			return {
				...state,
				loading: action.payload,
				error: false,
				errorMessage: null,
            };
            
		case TYPE.FETCH_FAILED:
			return { 
                ...state, 
                loading: false, 
                error: true,
                errorMessage: action.payload 
            };

		default:
			return state;
	}
};
