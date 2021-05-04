import React from "react";
import styled from "styled-components";

function Detail() {
  return (
    <Container>
      <Background>
        <img src="https://www.wallpaperbetter.com/wallpaper/575/996/976/rio-2-hi-res-images-720P-wallpaper.jpg" />
      </Background>
      <ImageTitle>
        <img src="https://images-platform.99static.com//9g9pg2hX6uMBKUoRFG2jNuq4Fog=/0x0:1000x1000/fit-in/500x500/projects-files/38/3878/387800/f603361c-1b55-4ffc-b63d-3f67e3eef275.png" />
      </ImageTitle>
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: calc(3.5vw + 5px);
  position: relative;
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.2;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageTitle = styled.div`
  height: 30vh;
  min-height: 17rem;
  width: 35vw;
  min-width: 20rem;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }
`;
