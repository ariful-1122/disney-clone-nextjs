import React from "react";
import styled from "styled-components";
import ImgSlider from "./ImgSlider";
import Movies from "./Movies";
import Viewers from "./Viewers";

function Home(props) {
  const {movies} = props;

  return (
    <Container>
      <ImgSlider />
      <Viewers />
      <Movies movies={movies} />
    </Container>
  );
}

export default Home;

const Container = styled.main`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 0.5rem);
  position: relative;
  overflow-x: hidden;
  &::before {
    content: "";
    position: absolute;
    background: url("/images/home-background.png");
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: fixed;
    z-index: -1;
  }
`;
