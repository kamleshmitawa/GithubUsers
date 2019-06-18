
import { createStore } from 'redux'
import { UserReducer } from './Redux/Reducers';

export const Store = createStore(UserReducer);