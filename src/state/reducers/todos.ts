import {Action, ActionTypes} from '../action-types';
import {Todo} from '../actions'

const inititalData = [{id: 2, title: 'hello', completed: false}];
export const todoReducers = (state:Todo[] = inititalData, action:Action) => {
    switch(action.type) {
        case ActionTypes.fetchTodos:
            return action.payload;
        case ActionTypes.deleteTodo:
            return state.filter((todo:Todo) => todo.id !== action.payload);
        case ActionTypes.addTodo:
            return [...state, action.payload]
        case ActionTypes.editTodo:
            const updateTodo = action.payload;
            const updatedTodo = state.map(todo => {
                if(todo.id === updateTodo.id) {
                    todo.title = updateTodo.title;
                    todo.completed = updateTodo.completed;
                }
                return todo;
            })
            return updatedTodo;
        default:
            return state;
    }
}
