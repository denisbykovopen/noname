import { Reducer } from "react";
import { Action } from "../@types/typedActions";
import { MSGS } from "../constants/actionTypes";

export interface Msg {
  sender: string;
  text: string;
  createdAt: string;
}

export interface MsgsState {
  msgs: Msg[];
}

export const MsgsInitial: MsgsState = {
  msgs: [],
};

export const MsgsReducer: Reducer<MsgsState, Action> = (
  state = MsgsInitial,
  action
) => {
  switch (action.type) {
    case MSGS:
      console.log(" --- msgsReducer/payload:", action.payload);
      return {
        ...state,
        msgs: [...state.msgs, action.payload],
      };
    default:
      return state;
  }
};
