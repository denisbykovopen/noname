import React, { useReducer } from "react";
import { fire } from "../firebase/fire";
import {
  SetUserDataReducer,
  UserDataInitialState,
} from "../reducers/SetUserDataReducer";
// import {
//   LoadingReducer,
//   LoadingInitialState,
// } from "../reducers/LoadingReducer";
// import { ErrorReducer, ErrorInitialState } from "../reducers/ErrorReducer";
import {
  SET_USER_DATA,
  START_LOADING,
  FINISH_LOADING,
} from "../constants/actionTypes";
import {
  LoadingReducer,
  LoadingInitialState,
} from "../reducers/LoadingReducer";

// export interface AuthProps {
//   initializing: boolean;
//   user: object | null;
// }

export const useOnAuth = (): any => {
  // const [state, setState] = React.useState(() => {
  //   const user = fire.auth().currentUser;
  //   return {
  //     initializing: !user,
  //     user,
  //   };
  // });

  const [userDataState, userDataDispatch] = useReducer(
    SetUserDataReducer,
    UserDataInitialState
  );

  const [loadingState, loadingDispatch] = useReducer(
    LoadingReducer,
    LoadingInitialState
  );

  // const [errorState, errorDispatch] = useReducer(
  //   ErrorReducer,
  //   ErrorInitialState
  // );

  console.log(" --- useOnAuth/upper/state:", userDataState, loadingState);

  function onChange(userData): void {
    // setState({ initializing: false, user });
    loadingDispatch({ type: START_LOADING });
    userDataDispatch({ type: SET_USER_DATA, payload: userData });
    loadingDispatch({ type: FINISH_LOADING });
  }

  React.useEffect(() => {
    const unsubscribe = fire.auth().onAuthStateChanged(onChange);
    // fire.auth().onAuthStateChanged(onChange);
    // loadingDispatch({ type: FINISH_LOADING });
    console.log(" --- useOnAuth/effect");

    // return (): void => unsubscribe();
    // return (): void => loadingDispatch({ type: FINISH_LOADING });
    return (): void => {
      return unsubscribe();
    };
  }, []);

  // console.log(" --- useOnAuth:", state);
  // return state;

  return [userDataState, loadingState];
};
