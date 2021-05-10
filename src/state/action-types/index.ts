import {
  FetchTodoAction,
  DeleteTodoAction,
  AddTodoAction,
  EditTodoAction,
  AddDynamicData,
  AddData,
  StopTimer
} from "../actions";

export enum ActionTypes {
  fetchTodos,
  deleteTodo,
  addTodo,
  editTodo,
  addDynamicData,
  addData,
  stopTimer
}

export type Action =
  | FetchTodoAction
  | DeleteTodoAction
  | AddTodoAction
  | EditTodoAction
  | AddDynamicData
  | AddData
  | StopTimer
