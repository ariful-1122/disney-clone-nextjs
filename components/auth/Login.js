import React from "react";
import styled from "styled-components";

function Login() {
  return (
    <Container>
      <CTA>
        <CTALogoOne src="/images/cta-logo-one.svg" />
        <SignUp>Get All There</SignUp>
        <Description>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt
          eius blanditiis dignissimos, neque ratione laudantium repellendus
          Lorem ipsum dolor sit amet consectetur adipisicing.
        </Description>
        <CTALogoTwo src="/images/cta-logo-two.png" />
      </CTA>
    </Container>
  );
}

export default Login;

const Container = styled.div`
  position: relative;
  min-height: calc(100vh - 70px);
  display: flex;
  justify-content: center;
  align-items: top;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    opacity: 0.5;
    background-image: url("/images/login-background.jpg");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    z-index: -1;
  }
`;

const CTA = styled.div`
  width: 80%;
  max-width: 65rem;
  padding: 8rem 4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CTALogoOne = styled.img``;

const SignUp = styled.a`
  width: 100%;
  background: #0063e5;
  font-weight: bold;
  text-align: center;
  padding: 1.7rem 0;
  font-size: 1.8rem;
  text-transform: uppercase;
  border-radius: 4px;
  cursor: pointer;
  transition: all 0.3s;
  letter-spacing: 1.4px;
  margin: 0.8rem 0;

  &:hover {
    background-color: #0483ee;
  }
`;

const Description = styled.p`
  font-size: 1.1rem;
  /* font-weight: 300; */
  color: #ddd;
  letter-spacing: 1.5px;
  text-align: center;
`;

const CTALogoTwo = styled.img`
  width: 90%;
  margin: 1rem 0;
`;
