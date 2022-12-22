import React, { useEffect, useState } from "react";
import "./meme.css";
import Draggable from "react-draggable";

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

  const [allMemes, setAllMemes] = useState([]);

  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => setAllMemes(data.data.memes));
  }, []);

  function getMemeImage() {
    const rng = Math.floor(Math.random() * allMemes.length);
    const url = allMemes[rng].url;
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
        <Draggable>
          <h2 className="meme-txt top">{meme.topText}</h2>
        </Draggable>
        <Draggable>
          <h2 className="meme-txt bot">{meme.botText}</h2>
        </Draggable>
      </div>
    </>
  );
};

export default Meme;
