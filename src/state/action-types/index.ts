import {
  FetchTodoAction,
  DeleteTodoAction,
  AddTodoAction,
  EditTodoAction,
  AddDynamicData,
  AddData,
  StopTimer,
  UpdateRow
} from "../actions";

export enum ActionTypes {
  fetchTodos,
  deleteTodo,
  addTodo,
  editTodo,
  addDynamicData,
  addData,
  stopTimer,
  updateRow
}

export type Action =
  | FetchTodoAction
  | DeleteTodoAction
  | AddTodoAction
  | EditTodoAction
  | AddDynamicData
  | AddData
  | StopTimer
  | UpdateRow
