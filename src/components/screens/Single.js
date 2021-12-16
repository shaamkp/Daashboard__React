import React from "react";
import styled from "styled-components";
import Main from "../include/Main";

export default function Single() {
  return (
    <div>
      <Main />
      <Body>
        <Container>
          <Name> Listndey Stroud</Name>
          <Email>fg@example.com</Email>
        </Container>
      </Body>
    </div>
  );
}

const Body = styled.div`
  position: relative;
  background: #000;
  z-index: -5;
`;
const Container = styled.div`
  box-shadow: 9px 6px 46px -24px rgba(0, 0, 0, 0.75);
  position: absolute;
  padding: 20px 25px;
  left: 22%;
  top: 150px;
  width: 70%;
`;
const Name = styled.h2``;
const Email = styled.p``;
