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

	return (
		fetch(baseURL + "dishes")
			.then(
				(response) => {
					if (response.ok) {
						// if ok then go to next then
						return response;
					} else {
						// generate new error object
						const error = new Error(
							"Error: " +
								response.status +
								": " +
								response.statusText
						);
						error.response = response;
						throw error;
					}
				},
				(error) => {
					// if the server does not response
					const errorMessage = new Error(error.message);
					throw errorMessage;
				}
			)
			.then((response) => response.json())
			.then((dishes) => dispatch(addFetchData(dishes)))
			.then(() => dispatch(fetchDataLoading(false)))
			// catch the thrown errors and dispatch the needed actions
			.catch((error) => dispatch(fetchFailed(error.message)))
	);
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

export const addFetchData = (dishes) => ({
	type: TYPE.ADD_FETCH_DATA,
	payload: dishes,
});
