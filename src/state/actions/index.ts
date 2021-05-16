import {ActionTypes } from "../action-types";
import { Dispatch } from "redux";
import axios from "axios";

export interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

export interface DynamicData {
  filedName: string;
  value: number;
  mutable: boolean;
  previousValue: number;
  enabled: boolean;
  time?: string | Date;
  upOrDown?: string;
  change?: number | string;
}

export interface StopTimer {
  stop: boolean;
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

export interface AddData {
  type: ActionTypes.addData;
  payload: any;
}

export interface UpdateRow {
  type: ActionTypes.updateRow,
  payload: string;
}

export interface AddDynamicData {
  type: ActionTypes.addDynamicData;
  payload: DynamicData;
}

export interface StopTimer {
  type: ActionTypes.stopTimer,
  payload: StopTimer
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

export const addDynamicData = (data: DynamicData) => {
  return {
    type: ActionTypes.addDynamicData,
    payload: data,
  };
};

export const addData = (data: any) => {
  return {
    type: ActionTypes.addData,
    payload: data,
  };
};

export const stopTimer = (data:boolean) => {
  return {
    type: ActionTypes.stopTimer,
    payload: data
  }
}

export const updateRow = (fieldName:string) => {
  return {
    type: ActionTypes.updateRow,
    payload: fieldName
  }
}
