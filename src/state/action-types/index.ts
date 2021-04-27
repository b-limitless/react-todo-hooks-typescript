import {FetchTodoAction, DeleteTodoAction, AddTodoAction} from '../actions';

export enum ActionTypes {
    fetchTodos,
    deleteTodo,
    addTodo
}

export type Action = FetchTodoAction | DeleteTodoAction | AddTodoAction;