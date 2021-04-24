import axios from 'axios';
import { Dispatch } from 'redux';
import {ActionTypes} from '../action-types';

export interface Todo {
    id:number;
    title:string;
    completed:boolean;
}

export interface FetchTodosAction  {
    type: ActionTypes.fetchTodos;
    payload: Todo[]
}

export interface DeleteTodoAction {
    type: ActionTypes.deleteTodo,
    payload:number;
}

export interface AddTodoAction {
    type: ActionTypes.addTodo,
    payload: Todo
}

const url = 'https://jsonplaceholder.typicode.com/todos/';

export const fetchTodos = () => {
    return async(dispatch:Dispatch) => {
        const response = await axios.get(url);
        const sliceData = response.data.splice(0,10);
        dispatch<FetchTodosAction>({
            type: ActionTypes.fetchTodos,
            payload: sliceData
        })
    }
}

export const deleteTodo = (id:number) => {
    return {
        type: ActionTypes.deleteTodo,
        payload:id
    }
}

export const addTodo = (todo:Todo) => {
   return {
       type: ActionTypes.addTodo,
       payload: todo
   }
}