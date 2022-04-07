import "./App.css";

function App() {
  
    const msg = new SpeechSynthesisUtterance();
    let txt = "niggas niggas niggas niggas niggas you are a  fucking neeegaaa "
    msg.text = txt;
      //"Never gonna give you up\n never gonna let you down, never gonna run around\n and desert you\n Never gonna make you cry\n Never gonna say goodbye\n Never gonna tell a lie and hurt you\n";
    for (let i = 0; i < 20; i++) {
      window.speechSynthesis.speak(msg);
    }
   
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
