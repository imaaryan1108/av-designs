import { combineReducers } from 'redux'
import viewReducer from './isView'

const allReducers = combineReducers({
    view: viewReducer
})

export default allReducers;