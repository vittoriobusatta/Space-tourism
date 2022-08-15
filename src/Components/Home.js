import React from "react";
import styled from "styled-components";
import backgroundMobile from "../Assets/data/home/background-home-mobile.jpg";
import { barlowRegular, bellefairRegular, grey, white } from "../Utils/Common";

const Container = styled.section`
  height: 100vh;
  width: 100%;
  min-height: fill-available;
  background-image: url(${backgroundMobile});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  padding-top: 88px;
`;

const Content = styled.div`
  height: auto;
  /* width: fit-content; */
  margin-top: 24px;
  & h2 {
    font-size: 16px;
    line-height: 19px;
    letter-spacing: 2.700000047683716px;
    text-align: center;
    font-family: ${barlowRegular};
    text-transform: uppercase;
    color: ${grey};
    margin-bottom: 16px;
  }
  & h1 {
    font-family: ${bellefairRegular};
    font-size: 80px;
    line-height: 100px;
    text-align: center;
    color: ${white};
    margin-bottom: 16px;
    text-transform: uppercase;
  }
  & p {
    font-family: "Barlow";
    font-size: 16px;
    line-height: 25px;
    text-align: center;
    color: ${grey};
    padding-right: 24px;
    padding-left: 24px;
  }
`;

const Button = styled.button`
  height: 150px;
  width: 150px;
  border-radius: 50%;
  font-family: ${bellefairRegular};
  font-size: 20px;
  line-height: 23px;
  letter-spacing: 1.25px;
  text-align: center;
  text-transform: uppercase;
  margin-top: 81px;
  border: none;
  position: relative;
  left: 50%;
  transform: translateX(-50%);
  z-index: 20;
  background-color: #fff;
`;

function Home() {
  return (
    <Container>
      <Content>
        <h2>So, you want to travel to</h2>
        <h1>Space</h1>
        <p>
          Let’s face it; if you want to go to space, you might as well genuinely
          go to outer space and not hover kind of on the edge of it. Well sit
          back, and relax because we’ll give you a truly out of this world
          experience!
        </p>
      </Content>
      <Button>Explore</Button>
    </Container>
  );
}

export default Home;
