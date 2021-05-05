import React from "react";
import styled from "styled-components";
import Link from "next/link";

function Movies(props) {
  const {movies} = props;

  return (
    <Container>
      <h4>Recomended For You</h4>
      <Content>
        {movies &&
          movies.map(movie => (
            <Wrap>
              <Link href={`/detail/${movie._id}`}>
                <a>
                  <img src={movie.cardImg} alt={movie.subTitle} />
                </a>
              </Link>
            </Wrap>
          ))}
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
  border: 2px solid transparent;
  box-shadow: 1px 12px 11px -2px rgba(0, 0, 0, 0.75);
  -webkit-box-shadow: 1px 12px 11px -2px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 1px 12px 11px -2px rgba(0, 0, 0, 0.75);
  transition: transform 0.6s cubic-bezier(0.22, 1, 0.36, 1);
  img {
    width: 100%;
    height: 100%;
    overflow: hidden;
    object-fit: cover;
  }

  &:hover {
    transform: scale(1.05);
    border-color: #ddd;
  }
`;
