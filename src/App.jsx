import { useState } from "react";
import Header from "./components/header/Header.jsx";
import Meme from "./components/meme/Meme.jsx";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <main className="container">
        <Header />
        <Meme />
      </main>
    </>
  );
}

export default App;
