import * as TYPE from "./actionsTypes";

export const initialState = [
    {
        firstname: "nichita",
        lastname: 'pasecinic',
        telnum: 12345,
        email: "asfasdf@gmail.com"
    }
];

export const Reducer = (state = initialState, action) => {
	switch (action.type) {
		case TYPE.SUBMIT_FORM:
            var formData = action.payload;
            formData.id = state.length;
            formData.date = new Date().toISOString();
            // push the new object to the state array, 
            return state.concat(formData);
		default:
			return state;
	}
};
