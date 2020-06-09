import React from "react";
import {
  UserDataState,
  UserDataInitialState,
} from "../reducers/SetUserDataReducer";

// export interface UserContextProps {
//   user: null | object;
// }

export const UserContext: React.Context<UserDataState> = React.createContext(
  // userData: null,
  UserDataInitialState
);

export const useSession = (): UserDataState => {
  const userData = React.useContext(UserContext);
  console.log(" --- useSession", userData);
  return userData;
};
