import {createStore} from 'redux'
import alertReducer from './alertReducer'

const store = createStore(alertReducer);

export default store;