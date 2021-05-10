import {Action, ActionTypes} from '../action-types';
import {AddData} from '../actions'

export const addDataReducer = (state: AddData[] = [], action:Action) => {
    switch(action.type) {
        case ActionTypes.addData:
            return [...state, action.payload];
        default:
            return state;
    }
}
