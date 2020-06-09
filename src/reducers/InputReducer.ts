import { Reducer } from "react";
import { Action } from "../@types/typedActions";
import { SET_INPUT } from "../constants/actionTypes";

export interface InputState {
  input: string;
}

export const InputInitialState: InputState = {
  input: "",
};

export const InputReducer: Reducer<InputState, Action> = (
  state = InputInitialState,
  action
) => {
  switch (action.type) {
    case SET_INPUT:
      return {
        ...state,
        input: action.payload,
      };
    default:
      return state;
  }
};
