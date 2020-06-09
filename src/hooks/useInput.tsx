import React, { useReducer } from "react";
import { InputReducer, InputInitialState } from "../reducers/InputReducer";
import { SET_INPUT } from "../constants/actionTypes";
import { fire, sv, msgsRef } from "../firebase/fire";

const useInput = (): any => {
  const [inputState, dispatch] = useReducer(InputReducer, InputInitialState);

  const onChange = (
    event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ): void => {
    dispatch({ type: SET_INPUT, payload: event?.target.value });
    console.log(" --- useInput/value:", event.target.value, inputState);
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event?.preventDefault();
    const userId = fire.auth().currentUser?.uid;
    const msg = {
      sender: userId,
      text: inputState.input,
      createdAt: sv.TIMESTAMP,
    };
    console.log(" --- useInput/onSubmit/msg:", msg);
    msgsRef.push(msg);
  };

  return [inputState, onChange, onSubmit];
};

export default useInput;
