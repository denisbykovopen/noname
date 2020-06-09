import { Reducer } from "react";
import { Action } from "../@types/typedActions";
import { START_LOADING, FINISH_LOADING } from "../constants/actionTypes";

interface LoadingState {
  loading: boolean;
}

export const LoadingInitialState: LoadingState = {
  loading: false,
};

export const LoadingReducer: Reducer<LoadingState, Action> = (
  state = LoadingInitialState,
  action
) => {
  switch (action.type) {
    case START_LOADING:
      return {
        ...state,
        loading: true,
      };
    case FINISH_LOADING:
      return {
        ...state,
        loading: false,
      };
    default:
      return state;
  }
};
