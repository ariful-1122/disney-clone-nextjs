import React from "react";
import styled from "styled-components";

function Movies() {
  return (
    <Container>
      <h4>Recomended For You</h4>
      <Content>
        <Wrap>
          <img
            width="400"
            src="https://wallpapercave.com/wp/wp6674867.jpg"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            width="400"
            src="https://www.wallpapertip.com/wmimgs/32-320322_cloudy-with-a-chance-of-meatballs-tree.jpg"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            width="400"
            src="https://all4desktop.com/data_images/1920%20x%201200/4147719-2014-rio-2.jpg"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            width="400"
            src="https://i.pinimg.com/originals/fb/be/5d/fbbe5d447190fe5b45501e6088da6200.jpg"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            width="400"
            src="https://lh5.googleusercontent.com/proxy/mDF95n7R2ZOTrtCKNn1vPo2pLE64wLWGQFHJAGLp4kYIVHTprs6kCtjl1xw1ZbXK_8HXSlX9DKG0cZoOMDU1YCJhDZsdYDMNy0F7KRBGNsKb0HLrVNAluO0RFffoXRUsP1rbaA=s0-d"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            width="400"
            src="https://wallpapercave.com/wp/wp6674867.jpg"
            alt=""
          />
        </Wrap>
        <Wrap>
          <img
            width="400"
            src="https://www.wallpaperbetter.com/wallpaper/575/996/976/rio-2-hi-res-images-720P-wallpaper.jpg"
            alt=""
          />
        </Wrap>
      </Content>
    </Container>
  );
}

export default Movies;

const Container = styled.div`
  padding: 4rem 0;
  h4 {
    font-size: 1.6rem;
    margin-bottom: 1.4rem;
  }
`;

const Content = styled.div`
  display: grid;
  grid-gap: 2.5rem;
  grid-template-columns: repeat(4, minmax(0, 1fr));
`;

const Wrap = styled.div`
  border-radius: 1rem;
  cursor: pointer;
  overflow: hidden;
  border: 4px solid transparent;
  box-shadow: 1px 12px 11px -2px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 1px 12px 11px -2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 1px 12px 11px -2px rgba(0, 0, 0, 0.75);
  transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
    border-color: #ddd;
  }
`;
