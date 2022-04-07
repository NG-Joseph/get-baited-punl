import logo from "./logo.svg";
import "./App.css";
import { useEffect } from "react";

function App() {
  const song = new Audio("./song.mp3");
  useEffect(() => {
    song.play(); // play the song
    song.volume = 0.04; // set the volume
    const msg = new SpeechSynthesisUtterance();
    msg.text =
      "Never gonna give you up\n never gonna let you down. never gonna run around\n and desert you\n Never gonna make you cry\n Never gonna say goodbye\n Never gonna tell a lie and hurt you\n";
    for (let i = 0; i < 1000000; i++) {
      window.speechSynthesis.speak(msg);
    }
  });
  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{ fontSize: "200px" }}>🖕</h1>
        <p>HAHA YOU JUST GOT BAITED</p>
      </header>
    </div>
  );
}

export default App;
