import React from "react";

// interface OutsideProps {
//   ref: React.Ref<HTMLDivElement>;
//   handler: () => void;
// }

const useOnClickOutside = (ref, handler): any => {
  React.useEffect(() => {
    const listener = (event): any => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);

    return (): any => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
};

export default useOnClickOutside;
