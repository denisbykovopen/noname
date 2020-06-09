import { useCallback, useReducer } from "react";
import { fire } from "../firebase/fire";
// import { useHistory } from "react-router";

import {
  SetUserDataReducer,
  UserDataInitialState,
} from "../reducers/SetUserDataReducer";
import {
  SET_USER_DATA,
  ERROR,
  START_LOADING,
  FINISH_LOADING,
} from "../constants/actionTypes";
import {
  LoadingReducer,
  LoadingInitialState,
} from "../reducers/LoadingReducer";
import { ErrorReducer, ErrorInitialState } from "../reducers/ErrorReducer";
import { useHistory } from "react-router";

const gitProvider = new fire.auth.GithubAuthProvider();
gitProvider.addScope("repo");

const useGit = (): any => {
  // const [userData, setUserData] = useState<object | null>(null);
  // const [error, setError] = useState<string | null>(null);

  const [userDataState, userDataDispatch] = useReducer(
    SetUserDataReducer,
    UserDataInitialState
  );

  const [loadingState, loadingDispatch] = useReducer(
    LoadingReducer,
    LoadingInitialState
  );

  const [errorState, errorDispatch] = useReducer(
    ErrorReducer,
    ErrorInitialState
  );

  const history = useHistory();

  return [
    // userData,
    userDataState,
    loadingState,
    errorState,
    useCallback(() => {
      const logInWithGit = async (): Promise<any> => {
        try {
          const result = await fire.auth().signInWithPopup(gitProvider);
          // setUserData(result);
          loadingDispatch({ type: START_LOADING });
          userDataDispatch({ type: SET_USER_DATA, payload: result });
          console.log(" --- useGit/try/result:", result);
          loadingDispatch({ type: FINISH_LOADING });
          history.push("/messanger");
        } catch (err) {
          // setError(err);
          errorDispatch({ type: ERROR, payload: err });
          console.error(" --- useGit/err:", err);
          // throw err;
        }
      };
      logInWithGit();
    }, [history]),
  ];
};

export default useGit;
