import React from "react";
import {FlapperSpinner} from "react-spinners-kit";
import styled from "styled-components";

function Loader() {
  return (
    <Wrap>
      <FlapperSpinner />
    </Wrap>
  );
}

export default Loader;

const Wrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;
