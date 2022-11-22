import { useState } from "react";
import "./App.css";

function App() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");

  const generateCryptography = async () => {
    var a = prompt
      .toLocaleUpperCase()
      .replace(/A/gi, "А")
      .replace(/P/gi, "Р")
      .replace(/C/gi, "С")
      .replace(/B/gi, "В")
      .replace(/T/gi, "Т")
      .replace(/S/gi, "Ѕ")
      .replace(/E/gi, "Е")
      .replace(/X/gi, "Х")
      .replace(/J/gi, "Ј")
      .replace(/H/gi, "Н")
      .replace(/O/gi, "О")
      .replace(/Y/gi, "Ү")
      .replace(/M/gi, "Μ")
      .replace(/N/gi, "Ν");
    setResult(a);
  };

  return (
    <div className="app-main">
      <>
        <h2>Criptografador de Texto</h2>

        <textarea
          className="app-input"
          placeholder="Cole o texto que deseja criptografar e clique no botão abaixo👇👇"
          onChange={(e) => setPrompt(e.target.value)}
          rows="10"
          cols="40"
        />
        <button onClick={generateCryptography}>Criptografar texto</button>
        <h1>{result}</h1>
      </>
    </div>
  );
}

export default App;
