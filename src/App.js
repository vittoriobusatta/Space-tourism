import "./Assets/Styles//Fonts.css";
import "./Assets/Styles/Reset.css";
import Header from "./Components/Header";
import Home from "./Components/Home";
import styled, { createGlobalStyle } from "styled-components";
var data = require("./Assets/data/data.json");

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
    scroll-behavior: smooth;
    -ms-overflow-style: none;
    scrollbar-width: none;
    ::-webkit-scrollbar{
      display: none;
    }
 
    @media screen and (max-width: 1400px) {
      font-size: 58%;
    }
    @media screen and (max-width: 1224px) {
      font-size: 52%;
    }
    @media screen and (max-width: 992px) {
      font-size: 46%;
    }
    @media screen and (max-width: 768px) {
      font-size: 40%;
    }
    @media screen and (max-width: 576px) {
      font-size: 34%;
    }
    @media screen and (max-width: 321px) {
      font-size: 28%;
    }
    
  } 
  body {
    background-color: ${(props) =>
      props.darkMode === true ? "#1D1D1D" : "#FFEFD1"};
    font-size: 1.6rem;
    transition: background-color 0.5s ease-in-out;
    min-height: 100vh;
    min-height: -webkit-fill-available;
  }
  ::-moz-selection {
    background: #1AC8ED;
    text-shadow: none;
  }
  ::selection {
    background: #1AC8ED;
    text-shadow: none;
  }
`;

function App() {

  console.log(data);

  return (
    <>
      <GlobalStyle />
      <Header />
      <Home />
      <Destination />
    </>
  );
}

export default App;
