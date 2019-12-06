import {combineReducers} from 'redux'
           
import scheduleReducer from './schedule.reducers';

export default combineReducers({

    schedule:scheduleReducer
})