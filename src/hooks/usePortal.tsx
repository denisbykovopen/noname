import React from "react";
import ReactDOM from "react-dom";

type PortalProps = {
  children: React.ReactChild | React.ReactNode | React.ReactElement;
};

const Portal = ({ children }: PortalProps): React.ReactElement => {
  return ReactDOM.createPortal(
    <React.Fragment>{children}</React.Fragment>,
    document.body
  );
};

const usePortal = (): object => {
  const [isOpen, setOpen] = React.useState(false);

  const open = setOpen(true);
  const close = setOpen(false);

  const portalContent = ({
    children,
  }: {
    children: React.ReactChild;
  }): React.ReactElement => (
    <React.Fragment>{isOpen && <Portal> {children} </Portal>}</React.Fragment>
  );

  return {
    open,
    close,
    portalContent,
  };
};

export default usePortal;
