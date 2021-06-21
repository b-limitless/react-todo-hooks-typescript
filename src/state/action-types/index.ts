import {
  FetchTodoAction,
  DeleteTodoAction,
  AddTodoAction,
  EditTodoAction,
  AddDynamicData,
  AddData,
  StopTimer,
  UpdateRow,
  AuthUserAction
} from "../actions";

export enum ActionTypes {
  fetchTodos,
  deleteTodo,
  addTodo,
  editTodo,
  addDynamicData,
  addData,
  stopTimer,
  updateRow,
  authUser
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
  | AuthUserAction
