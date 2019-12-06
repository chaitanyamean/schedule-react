    import {ScheduleTypes} from '../types/schedule.types';

    export const addSchedule = (schedule) => {
     return {

         type: ScheduleTypes.ADD_SCHEDULE,
         payload:schedule
        }
    }

    // export const getSchedule = schedule => ({
    //     type: ScheduleTypes.GET_SCHEDULE,
    //     payload:schedule
    // })