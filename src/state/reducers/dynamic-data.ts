import {Action, ActionTypes} from '../action-types';
import {DynamicData} from '../actions'

// const defaultData = [
// 	{
// 		filedName: "A",
// 		value: 3,
// 		mutable: false,
// 		previousValue: 3,
// 		enabled: true,
// 	},
// 	{
// 		filedName: "B",
// 		value: 3,
// 		mutable: false,
// 		previousValue: 3,
// 		enabled: true,
// 	},
// 	{
// 		filedName: "C",
// 		value: 3,
// 		mutable: false,
// 		previousValue: 3,
// 		enabled: true,
// 	},
// 	{
// 		filedName: "D",
// 		value: 3,
// 		mutable: false,
// 		previousValue: 3,
// 		enabled: false,
// 	},
// ];

export const dymaicDataReducers = (state: DynamicData[] = [], action:Action) => {
    switch(action.type) {
        case ActionTypes.addDynamicData:
            return [...state, action.payload];
        default:
            return state;
    }
}