import React from "react";
import styled from "styled-components";

interface MenuProps {
  open: React.SetStateAction<boolean>;
}

const Menu: React.FC<MenuProps> = ({ open }: MenuProps) => {
  return (
    <StyledMenu open={open}>
      <ul>#todo</ul>
      <a href="/">
        <span role="img" aria-label="contacts">
          📩
        </span>
        Contacts
      </a>
    </StyledMenu>
  );
};

const StyledMenu = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #effffa;
  transform: ${({ open }: MenuProps): any =>
    open ? "translateX(0)" : "translateX(-100%)"};
  height: 100vh;
  text-align: left;
  padding: 2.5%;
  position: absolute;
  top: 0;
  left: 0;
  transition: transform 0.3s ease-in-out;
  max-width: 40%;

  @media (max-width: 576px) {
    width: 100%;
  }

  a,
  ul {
    font-size: 2rem;
    text-transform: uppercase;
    padding: 2rem 0;
    font-weight: bold;
    letter-spacing: 0.5rem;
    color: #0d0c1d;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 576px) {
      font-size: 1.5rem;
      text-align: center;
    }

    &:hover {
      color: #343078;
    }
  }
`;

export default Menu;
