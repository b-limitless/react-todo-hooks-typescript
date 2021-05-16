import {Action, ActionTypes} from '../action-types';
import {DynamicData} from '../actions'

const defaultData = [
	{
		filedName: "A",
		value: 3,
		mutable: false,
		previousValue: 3,
		enabled: true,
	},
	{
		filedName: "B",
		value: 3,
		mutable: false,
		previousValue: 3,
		enabled: true,
	},
	{
		filedName: "C",
		value: 3,
		mutable: false,
		previousValue: 3,
		enabled: true,
	},
	{
		filedName: "D",
		value: 3,
		mutable: false,
		previousValue: 3,
		enabled: false,
	},
];

export const dymaicDataReducers = (state: DynamicData[] = defaultData, action:Action) => {
    switch(action.type) {
        case ActionTypes.addDynamicData:
            return [...state, action.payload];
        case ActionTypes.updateRow:
            const updated = state.map(row => {
                if(row.filedName === action.payload) {
                    row.enabled = !row.enabled;
                    return row;
                }
                return row;
            });
            return updated;
        default:
            return state;
    }
}