import * as TYPE from './actionsTypes';

export const initialState = {
    data: []
}

export const ThunkReducer = (state = initialState, action) => {
    switch(action.type) {

        case TYPE.ADD_FETCH_DATA: 
            return {...state, data: action.payload}

        default: 
            return state
    }
}