import React from "react";
import Header from "./components/Header";
import Meme from "./components/Meme";

export default function App() {

  // function handleClick() {
  //   console.log("Hi there i was clicked");
  // } 

  // function handleOnMouseOver() {
  //   console.log("MouseOver");
  // }

  return (
    <div>
      <Header />
      <Meme />
{/* 
      <div className="container">
        <img onMouseOver={handleOnMouseOver} src="https://picsum.photos/640/360" alt="meme" />
        <button onClick={handleClick}>Click me</button>
      </div> */}

    </div>
  );
}
