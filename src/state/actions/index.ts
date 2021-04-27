
import {ActionTypes} from '../action-types';
import {Dispatch} from 'redux';
import axios from 'axios';

export interface Todo {
    id: number;
    title: string;
    completed: boolean | string
}

export interface FetchTodoAction {
    type: ActionTypes.fetchTodos,
    payload: Todo[]
}

export interface DeleteTodoAction {
    type: ActionTypes.deleteTodo,
    payload: number
}

export interface AddTodoAction {
    type: ActionTypes.addTodo,
    payload: Todo
}

const url = 'https://jsonplaceholder.typicode.com/todos/';

export const fetchTodos = () => {
    return async(dispatch: Dispatch) => {
        const response = await axios(url);
        const data = response.data.slice(0,10);
        dispatch<FetchTodoAction>({
            type: ActionTypes.fetchTodos,
            payload: data
        })
    }
}

export const deleteTodo = (id:number) => {
    return {
        type: ActionTypes.deleteTodo,
        payload: id
    }
} 

export const addTodo = (todo: Todo) => {
    return {
        type: ActionTypes.addTodo,
        payload: todo
    }
}