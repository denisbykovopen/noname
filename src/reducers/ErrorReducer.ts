import { Reducer } from "react";
import { Action } from "../@types/typedActions";
import { ERROR } from "../constants/actionTypes";

interface ErrorState {
  error: string | null;
}

export const ErrorInitialState = {
  error: null,
};

export const ErrorReducer: Reducer<ErrorState, Action> = (
  state = ErrorInitialState,
  action
) => {
  switch (action.type) {
    case ERROR:
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};
