import { useReducer, useEffect } from "react";
import { msgsRef } from "../firebase/fire";
import { MSGS } from "../constants/actionTypes";
import { MsgsReducer, MsgsInitial } from "../reducers/MsgsReducer";

const useOnMsgs = (): any => {
  const [msgsState, msgsDispatch] = useReducer(MsgsReducer, MsgsInitial);

  // const initialMount: React.MutableRefObject<boolean> = useRef(true);

  useEffect(() => {
    msgsRef.on("value", (snap) => {
      console.log(" !!! useOnMsgs/useEffect/on/snap:", snap.val());
      if (snap.val()) {
        const msgsObject = snap.val();
        const msgsList = Object.keys(msgsObject).map((key) => ({
          ...msgsObject[key],
          uid: key,
        }));
        msgsDispatch({ type: MSGS, payload: msgsList });
      }
    });
    // return (): void => {
    //   return msgsRef.off("value");
    // };
  }, []);

  // useEffect(() => {
  //   if (initialMount.current) {
  //     initialMount.current = false;
  //   } else {
  //     msgsRef.on("child_added", (snap) => {
  //       console.log(" !!! useOnMsgs/useCallback/on/snap:", snap.val());
  //       // snap.forEach((childSnap) =>
  //       msgsDispatch({ type: MSGS, payload: snap.val() });
  //       // );
  //     });
  //   }
  //   // return msgsRef.off("child_added");
  // }, []);

  return msgsState;
};

export default useOnMsgs;
