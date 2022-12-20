import React from "react";
import "./meme.css";

const Meme = () => {
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
      <input type="submit" value="Generate!" className="btn submit" />
    </form>
  );
};

export default Meme;
