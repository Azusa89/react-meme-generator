import React from "react";
import memesData from "./memesData";
import "./meme.css";

const Meme = () => {
  function getMemeImage() {
    const memesArray = memesData.data.memes;
    const rng = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[rng].url;
    console.log(url);
  }
  return (
    <form className="generatorForm">
      <input
        className="input"
        type="text"
        id="top-txt"
        name="top-txt"
        placeholder="Top text"
      />
      <input
        className="input"
        type="text"
        id="bot-txt"
        name="bot-txt"
        placeholder="Bottom text"
      />
      <input
        type="button"
        value="Generate!"
        className="btn submit"
        onClick={getMemeImage}
      />
    </form>
  );
};

export default Meme;
