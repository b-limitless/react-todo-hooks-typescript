import {todoReducers} from './todos';
import {dymaicDataReducers} from './dynamic-data';
import {stopTimerReducer} from './stop-timer';
import {addDataReducer} from './add-data';
import { authReducer  } from './auth';
import {Todo, DynamicData, AuthUser} from '../actions';
import { combineReducers } from 'redux';

export interface StoreState {
    auth: AuthUser,
    todos: Todo[],
    dynamicData: DynamicData[],
    addData: any,
    stopTimer: any

}

export const reducers = combineReducers<StoreState>({
    auth: authReducer,
    todos: todoReducers,
    dynamicData: dymaicDataReducers,
    addData: addDataReducer,
    stopTimer: stopTimerReducer
    
});

export type RootState = ReturnType<typeof reducers>;
