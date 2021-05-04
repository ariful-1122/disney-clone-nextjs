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
      <Controls>
        <PlayButton>
          <img src="/images/play-icon-black.png" />
          <span>Play</span>
        </PlayButton>
        <TrailerButton>
          <img src="/images/play-icon-white.png" />
          <span>Trailer</span>
        </TrailerButton>
        <AddButton>
          <span>+</span>
        </AddButton>
        <GroupWatchButton>
          <img src="/images/group-icon.png" />
        </GroupWatchButton>
      </Controls>

      <SubTitle>2020.20m.Family,Kids,Fantasy,Animation</SubTitle>

      <Description>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Natus,
        doloribus? Maiores deserunt sed delectus nesciunt rerum accusantium
        recusandae quod quam reiciendis alias laborum blanditiis fugit,
        voluptate quaerat molestiae, nemo et!
      </Description>
    </Container>
  );
}

export default Detail;

const Container = styled.div`
  min-height: calc(100vh - 70px);
  padding: 0 calc(3.5vw + 5px);
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

const Controls = styled.div`
  display: flex;
`;

const PlayButton = styled.button`
  border-radius: 4px;
  border: none;
  display: flex;
  align-items: center;
  padding: 0.3rem 1.5rem;
  letter-spacing: 1.5px;
  margin-right: 2rem;
  cursor: pointer;
  transition: all 0.2s;
  text-transform: uppercase;
  &:hover {
    background-color: rgba(250, 250, 250, 0.6);
  }
`;
const TrailerButton = styled(PlayButton)`
  background: transparent;
  color: #fff;
  border: 1px solid #ddd;
`;
const AddButton = styled.button`
  width: 4rem;
  height: 4rem;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  outline: none;
  border-radius: 50%;
  background: transparent;
  border: 2px solid #ddd;
  color: #fff;
  margin-right: 2rem;
  cursor: pointer;

  span {
    font-size: 3rem;
  }
`;
const GroupWatchButton = styled(AddButton)``;

const SubTitle = styled.div`
  font-size: 1.3rem;
  color: #ddd;
  margin: 1.5rem 0;
`;
const Description = styled.div`
  font-size: 2rem;
  font-weight: 100;
  letter-spacing: 1.3px;
  margin-top: 2rem;
  line-height: 1.4;
  max-width: 80rem;
  text-align: left;
`;
