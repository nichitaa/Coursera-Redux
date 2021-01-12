import * as TYPE from "./actionsTypes";
import { baseURL } from "../components/baseULR";

export const formSubmit = (firstname, lastname, telnum, email) => ({
	type: TYPE.SUBMIT_FORM,
	payload: {
		firstname,
		lastname,
		telnum,
		email,
	},
});

// thunk -> returns dispatch -> returns a function
// dispatch several actions
export const fetchData = () => (dispatch) => {
	dispatch(fetchDataLoading(true));

	return fetch(baseURL + "dishes")
		.then((response) => response.json())
		.then((dishes) => dispatch(addFetchData(dishes)));
};

// action creator -> returns a action of type fetch_loading
export const fetchDataLoading = (loading) => ({
	type: TYPE.FETCH_LOADING,
	payload: loading,
});

export const fetchFailed = (errorMessage) => ({
	type: TYPE.FETCH_FAILED,
	payload: errorMessage,
});

// destruction {data} -> string "hello redux-thunk"
export const addFetchData = ({ data }) => ({
	type: TYPE.ADD_FETCH_DATA,
	payload: data,
});
