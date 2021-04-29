import {FetchTodoAction, DeleteTodoAction, AddTodoAction, EditTodoAction, AddDynamicData} from '../actions';

export enum ActionTypes {
    fetchTodos,
    deleteTodo,
    addTodo,
    editTodo,
    addDynamicData
}

export type Action = FetchTodoAction | DeleteTodoAction | AddTodoAction | EditTodoAction | AddDynamicData;