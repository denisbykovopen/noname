import React from "react";
import useInput from "../hooks/useInput";
import useOnMsgs from "../hooks/useOnMsgs";

const Messanger: React.FC = (): React.ReactElement => {
  const [inputState, onChange, onSubmit] = useInput();
  const msgsState = useOnMsgs();
  const { msgs } = msgsState;

  console.log(" --- Messanger/inputState:", inputState);
  console.log(" --- Messanger/msgsState/msgs:", msgs);

  return (
    <div className="Messanger">
      <h1> r-t msgr </h1>
      <h2> root room </h2>
      <h3> msgs: </h3>
      <form onSubmit={onSubmit} autoComplete="off" id="message-form">
        <input
          type="text"
          name="message"
          className="text-input"
          placeholder="message..."
          autoFocus
          onChange={(event): React.ChangeEvent => onChange(event)}
        />
        <button type="submit" className="login-button">
          Send
        </button>
      </form>
    </div>
  );
};

export default Messanger;
