import {todoReducers} from './todos';
import {dymaicDataReducers} from './dynamic-data';
import {Todo, DynamicData} from '../actions';
import { combineReducers } from 'redux';

export interface StoreState {
    todos: Todo[],
    dynamicData: DynamicData[]
}

export const reducers = combineReducers<StoreState>({
    todos: todoReducers,
    dynamicData: dymaicDataReducers
    
});

export type RootState = ReturnType<typeof reducers>;
