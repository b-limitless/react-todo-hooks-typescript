import {ActionTypes } from "../action-types";
import { Dispatch } from "redux";
import axios from "axios";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface FetchTodoAction {
  type: ActionTypes.fetchTodos;
  payload: Todo[];
}

export interface DeleteTodoAction {
  type: ActionTypes.deleteTodo;
  payload: number;
}

export interface AddTodoAction {
  type: ActionTypes.addTodo;
  payload: Todo;
}

export interface EditTodoAction {
  type: ActionTypes.editTodo;
  payload: Todo;
}



const url = "https://jsonplaceholder.typicode.com/todos/";

export const fetchTodos = () => {
  return async (dispatch: Dispatch) => {
    const response = await axios(url);
    const data = response.data.slice(0, 10);
    dispatch<FetchTodoAction>({
      type: ActionTypes.fetchTodos,
      payload: data,
    });
  };
};

export const deleteTodo = (id: number) => {
  return {
    type: ActionTypes.deleteTodo,
    payload: id,
  };
};

export const addTodo = (todo: Todo) => {
  return {
    type: ActionTypes.addTodo,
    payload: todo,
  };
};

export const editTodo = (todo: Todo) => {
  return {
    type: ActionTypes.editTodo,
    payload: todo,
  };
};

