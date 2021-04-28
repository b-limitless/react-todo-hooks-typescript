import {FetchTodoAction, DeleteTodoAction, AddTodoAction, EditTodoAction} from '../actions';

export enum ActionTypes {
    fetchTodos,
    deleteTodo,
    addTodo,
    editTodo
}

export type Action = FetchTodoAction | DeleteTodoAction | AddTodoAction | EditTodoAction;