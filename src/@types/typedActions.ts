import {
  SET_USER_DATA,
  ERROR,
  START_LOADING,
  FINISH_LOADING,
  SET_INPUT,
} from "../constants/actionTypes";

export interface Action {
  type: string;
  payload?: any;
}

export interface SetUserDataAction extends Action {
  type: SET_USER_DATA;
  payload: object | null;
}

export interface SetUserErrorAction extends Action {
  type: ERROR;
  payload: string | null;
}

export interface StartLoading extends Action {
  type: START_LOADING;
  //   payload: true;
}

export interface FinishLoading extends Action {
  type: FINISH_LOADING;
  //   payload: false;
}

export interface SetInput extends Action {
  type: SET_INPUT;
  payload: string;
}
