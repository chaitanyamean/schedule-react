
import {ScheduleTypes} from '../types/schedule.types';



const scheduleReducer = (state = [], action) => {

    switch(action.type) {

        case ScheduleTypes.ADD_SCHEDULE:
      return [
        ...state,
        Object.assign({}, action.payload)
      ];

      case ScheduleTypes.GET_SCHEDULE:
      return [...state];

        default:
            return state;
    }
}

export default scheduleReducer;