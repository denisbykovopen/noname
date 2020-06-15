import React from "react";
// import { logInWithGitHub } from "../helpers/auth";
import useGit from "../hooks/useGit";
import { useHistory } from "react-router";

const SignIn: React.FC = (): React.ReactElement => {
  const [userDataState, loadingState, errorState, logInWithGit] = useGit();

  console.log(
    " --- SignIn/return from useGit:",
    userDataState,
    loadingState,
    errorState
  );

  const history = useHistory();
  if (userDataState.userData !== null) {
    history.push("/messanger");
  }

  return (
    <div>
      <h1>SignIn</h1>
      <button onClick={logInWithGit}>Sign In With GitHub</button>
    </div>
  );
};

export default SignIn;
