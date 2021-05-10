import {todoReducers} from './todos';
import {dymaicDataReducers} from './dynamic-data';
import {stopTimerReducer} from './stop-timer';
import {addDataReducer} from './add-data';
import {Todo, DynamicData, StopTimer} from '../actions';
import { combineReducers } from 'redux';

export interface StoreState {
    todos: Todo[],
    dynamicData: DynamicData[],
    addData: any,
    stopTimer: any

}

export const reducers = combineReducers<StoreState>({
    todos: todoReducers,
    dynamicData: dymaicDataReducers,
    addData: addDataReducer,
    stopTimer: stopTimerReducer
    
});

export type RootState = ReturnType<typeof reducers>;
