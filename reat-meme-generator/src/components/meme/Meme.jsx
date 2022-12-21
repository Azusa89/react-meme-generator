import React, { useState } from "react";
import memesData from "./memesData";
import "./meme.css";

// const Meme = () => {
//   const [memeimage, setmemeimage] = useState(
//     "https://i.imgflip.com/30b1gx.jpg"
//   );
const Meme = () => {
  const [meme, setmeme] = useState({
    topText: "",
    botText: "",
    randomImage: "https://i.imgflip.com/30b1gx.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState(memesData);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const rng = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[rng].url;
    setmeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }
  return (
    <>
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
      <div className="meme">
        <img src={meme.randomImage} alt="" className="memeImg" />
        <h2 className="meme-txt top">top text</h2>
        <h2 className="meme-txt bot">bottom text</h2>
      </div>
    </>
  );
};

export default Meme;
