import React, { useState } from "react";
import memesData from "./memesData";
import "./meme.css";

// const Meme = () => {
//   const [memeimage, setmemeimage] = useState(
//     "https://i.imgflip.com/30b1gx.jpg"
//   );
const Meme = () => {
  const [meme, setMeme] = useState({
    topText: "",
    botText: "",
    randomImage: "https://i.imgflip.com/30b1gx.jpg",
  });

  const [allMemeImages, setAllMemeImages] = useState(memesData);

  function getMemeImage() {
    const memesArray = allMemeImages.data.memes;
    const rng = Math.floor(Math.random() * memesArray.length);
    const url = memesArray[rng].url;
    setMeme((prevMeme) => ({
      ...prevMeme,
      randomImage: url,
    }));
  }

  function handleChange(event) {
    const { name, value } = event.target;
    setMeme((prevMeme) => ({
      ...prevMeme,
      [name]: value,
    }));
  }
  return (
    <>
      <form className="generatorForm">
        <input
          type="text"
          placeholder="Top text"
          className="input"
          name="topText"
          onChange={handleChange}
          value={meme.topText}
        />
        <input
          type="text"
          placeholder="Bottom text"
          className="input"
          name="botText"
          onChange={handleChange}
          value={meme.botText}
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
        <h2 className="meme-txt top">{meme.topText}</h2>
        <h2 className="meme-txt bot">{meme.botText}</h2>
      </div>
    </>
  );
};

export default Meme;
