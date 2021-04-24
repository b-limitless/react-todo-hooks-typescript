import {todoReducer} from './todos';
import {Todo} from '../actions';
import { combineReducers } from 'redux';

export interface StoreState {
    todos: Todo[]
}

export const reducers = combineReducers<StoreState>({
    todos: todoReducer
})

export type RootState = ReturnType<typeof reducers>