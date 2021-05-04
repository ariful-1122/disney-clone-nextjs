import React from "react";
import styled from "styled-components";

function Viewers() {
  return (
    <Container>
      <Wrap>
        <img src="/images/viewers-disney.png" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-pixar.png" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-marvel.png" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-starwars.png" />
      </Wrap>
      <Wrap>
        <img src="/images/viewers-national.png" />
      </Wrap>
    </Container>
  );
}

export default Viewers;

const Container = styled.div`
  margin-top: 4rem;
  display: grid;
  grid-gap: 2rem;
  grid-template-columns: repeat(5, minmax(0, 1fr));
`;

const Wrap = styled.div`
  border-radius: 1rem;
  border: 3px solid rgba(249, 249, 249, 0.1);
  box-shadow: 2px 45px 36px -22px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 2px 45px 36px -22px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 2px 45px 36px -22px rgba(0, 0, 0, 0.75);
  transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
  cursor: pointer;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    border-color: #ddd;
    transform: scale(1.06);
  }
`;
