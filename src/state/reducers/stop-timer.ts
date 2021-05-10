import {Action, ActionTypes} from '../action-types';


export const stopTimerReducer = (state: false = false, action:Action) => {
    switch(action.type) {
        case ActionTypes.stopTimer:
            return action.payload;
        default:
            return state;
    }
}
