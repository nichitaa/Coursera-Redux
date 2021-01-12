import * as TYPE from "./actionsTypes";

export const formSubmit = (firstname, lastname, telnum, email) => ({
    type: TYPE.SUBMIT_FORM,
    payload: {
        firstname,
        lastname,
        telnum,
        email,
    }
});
