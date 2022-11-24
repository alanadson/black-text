import { useEffect, useState } from "react";
import devtools from "devtools-detect";
import "./App.css";

function App() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [blockContent, setBlockContent] = useState(false);

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
    // setResult(a);
    const filler = "&ZeroWidthSpace;";
    const b = [...a].join(filler);
    setResult(b);
  };

  useEffect(() => {
    window.addEventListener("orientationchange", function () {
      setBlockContent(false);
    });

    window.addEventListener("devtoolschange", (event) => {
      setBlockContent(devtools.isOpen);
    });
  }, []);

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

        {blockContent && (
          <div className="a" dangerouslySetInnerHTML={{ __html: result }} />
        )}
      </>
    </div>
  );
}

export default App;
