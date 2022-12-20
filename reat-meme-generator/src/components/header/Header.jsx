import React from "react";
import { AiFillGithub } from "react-icons/ai";
import "./header.css";

const Header = () => {
  return (
    <header className="header">
      <h1>React Meme Generator</h1>
      <small>
        some fun by{" "}
        <a href="https://github.com/Azusa89">
          Azusa89
          <AiFillGithub className="ghIcon" />
        </a>
      </small>
    </header>
  );
};

export default Header;
