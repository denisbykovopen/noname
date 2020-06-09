import React from "react";
// import { logInWithGitHub } from "../helpers/auth";
import useGit from "../hooks/useGit";
import { useHistory } from "react-router";

const SignIn: React.FC = (): any => {
  const [userDataState, loadingState, errorState, logInWithGit] = useGit();
  console.log(
    " --- SignIn/return from useGit:",
    userDataState,
    loadingState,
    errorState
  );

  const history = useHistory();
  if (userDataState !== null) {
    history.push("/messanger");
  }

  return (
    <div>
      <h1>SignIn</h1>
      {/* <button onClick={(): any => logInWithGitHub()}>
        Sign Up With GitHub
      </button> */}
      <button onClick={logInWithGit}>Sign Up With GitHub From Hook</button>
    </div>
  );
};

export default SignIn;
