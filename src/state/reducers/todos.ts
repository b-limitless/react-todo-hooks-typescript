import {ActionTypes, Action} from '../action-types';
import {Todo} from '../actions';
export const todoReducer = (state: Todo[] = [], action:Action) => {
    switch(action.type) {
        case ActionTypes.fetchTodos:
            return action.payload;
        case ActionTypes.deleteTodo:
            return state.filter((todos:Todo) => todos.id !== action.payload);
        default:
            return state;
    }
}