import React from "react";
import styled from "styled-components";

const Container = styled.header`
  width: 100%;
  position: absolute;
  height: 88px;
  top: 0;
  padding: 24px;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
`;
const Logo = styled.svg`
  height: 40px;
  width: 40px;
`;
const Burger = styled.button`
  height: 40px;
  width: 40px;
`;

function Header() {
  return (
    <Container>
      <Logo
        viewBox="0 0 40 40"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="20" cy="20" r="20" fill="white" />
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M20 0C20 0 20 20 0 20C19.648 20.1428 20 40 20 40C20 40 20 20 39.9999 20C20 20 20 0 20 0Z"
          fill="#0B0D17"
        />
      </Logo>
      <Burger />
    </Container>
  );
}

export default Header;
