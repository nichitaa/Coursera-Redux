import {createStore} from 'redux'
import {Reducer, initialState} from './reducer'

export const StoreConfigs = () => {
    const store = createStore(Reducer, initialState);
    return store
}