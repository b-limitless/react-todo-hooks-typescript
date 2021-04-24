import {FetchTodosAction, DeleteTodoAction, AddTodoAction} from '../actions';

export enum ActionTypes {
    fetchTodos,
    deleteTodo,
    addTodo
}

export type Action = FetchTodosAction | DeleteTodoAction | AddTodoAction;
