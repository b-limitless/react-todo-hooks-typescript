import { ActionTypes } from "../action-types";

export interface DynamicData {
  filedName: string;
  value: number;
  mutable: boolean;
  previousValue: number;
  enabled: boolean;
  time?: string | Date;
  upOrDown?: string;
  change?: number | string | undefined;
}

export interface StopTimer {
  stop: boolean;
}

export interface AddData {
  type: ActionTypes.addData;
  payload: any;
}

export interface UpdateRow {
  type: ActionTypes.updateRow;
  payload: string;
}

export interface AddDynamicData {
  type: ActionTypes.addDynamicData;
  payload: DynamicData;
}

export interface StopTimer {
  type: ActionTypes.stopTimer;
  payload: StopTimer;
}

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

export const stopTimer = (data: boolean) => {
  return {
    type: ActionTypes.stopTimer,
    payload: data,
  };
};

export const updateRow = (fieldName: string) => {
  return {
    type: ActionTypes.updateRow,
    payload: fieldName,
  };
};
