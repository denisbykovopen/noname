import React from "react";
import styled, { StyledComponent } from "styled-components";

interface BurgerProps {
  open: boolean;
  setOpen: (open: boolean) => void;
}

const StyledBurger: StyledComponent<any, any> = styled.button`
  position: absolute;
  top: 30%;
  left: 2.5%;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 2rem;
  height: 2rem;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0;
  z-index: 10;

  &:focus {
    outline: none;
  }

  div {
    width: 2rem;
    height: 0.25rem;
    background: ${({ open }: BurgerProps): any =>
      open ? "#0D0C1D" : "#EFFFFA"};
    border-radius: 10px;
    transition: all 0.3s linear;
    position: relative;
    transform-origin: 1px;

    :first-child {
      transform: ${({ open }): any => (open ? "rotate(45deg)" : "rotate(0)")};
    }

    :nth-child(2) {
      width: 1.5rem;
      opacity: ${({ open }): any => (open ? "0" : "1")};
      transform: ${({ open }): any =>
        open ? "translateX(20px)" : "translateX(0)"};
    }

    :nth-child(3) {
      transform: ${({ open }): any => (open ? "rotate(-45deg)" : "rotate(0)")};
    }
  }
`;

const BurgerButton: React.FC<BurgerProps> = ({
  open,
  setOpen,
}: BurgerProps) => {
  return (
    <StyledBurger open={open} onClick={(): any => setOpen(!open)}>
      <div />
      <div />
      <div />
    </StyledBurger>
  );
};

export default BurgerButton;
