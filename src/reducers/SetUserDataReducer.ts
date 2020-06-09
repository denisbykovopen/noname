import { Reducer } from "react";
import { Action } from "../@types/typedActions";
import { SET_USER_DATA } from "../constants/actionTypes";

export interface UserDataState {
  userData: object | null;
}

export const UserDataInitialState: UserDataState = {
  userData: null,
};

export const SetUserDataReducer: Reducer<UserDataState, Action> = (
  state = UserDataInitialState,
  action
) => {
  switch (action.type) {
    case SET_USER_DATA:
      console.log(" --- setUserDataReducer/state:", state);
      return {
        ...state,
        userData: action.payload,
      };
    default:
      return state;
  }
};

// export const setUserData = (
//   userData: SetUserDataAction["payload"]
// ): SetUserDataAction => ({
//   type: "SET_USER_DATA",
//   payload: userData,
// });

// interface UserDataContextProps {
//   state: UserDataState;
//   dispatch: React.Dispatch<Action>;
// }

// export const UserDataContext = React.createContext<UserDataContextProps>(
//   {} as UserDataContextProps
// );
