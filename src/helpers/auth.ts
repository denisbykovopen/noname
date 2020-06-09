import { fire } from "../firebase/fire";

const gitProvider = new fire.auth.GithubAuthProvider();
gitProvider.addScope("repo");

export const logInWithGitHub = async (): Promise<any> => {
  try {
    const result = await fire.auth().signInWithPopup(gitProvider);
    console.log(" --- logInWithGitHub/result:", result);
    // return result;
  } catch (err) {
    console.error(err);
    throw err;
  }
};
