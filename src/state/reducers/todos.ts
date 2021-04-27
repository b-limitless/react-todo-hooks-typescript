import {Action, ActionTypes} from '../action-types';
import {Todo} from '../actions'

export const todoReducers = (state:Todo[] = [], action:Action) => {
    switch(action.type) {
        case ActionTypes.fetchTodos:
            return action.payload;
        case ActionTypes.deleteTodo:
            return state.filter((todo:Todo) => todo.id !== action.payload);
        case ActionTypes.addTodo:
            return [...state, action.payload]
        default:
            return state;
    }
}
