import { useEffect, useState } from "react";
import copy from "copy-to-clipboard";
import devtools from "devtools-detect";
import Typed from "react-typed";
import "./App.css";

function App() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");
  const [showText, setShowText] = useState(true);
  const [orientation, setOrientation] = useState(true);

  const cryptography = prompt
    .replace(/A/g, "А")
    .replace(/B/g, "В")
    .replace(/C/g, "С")
    .replace(/E/g, "Е")
    .replace(/H/g, "Н")
    .replace(/E/g, "Е")
    .replace(/K/g, "Κ")
    .replace(/M/g, "М")
    .replace(/N/g, "Ν")
    .replace(/O/g, "О")
    .replace(/P/g, "Р")
    .replace(/S/g, "Ѕ")
    .replace(/T/g, "Т")
    .replace(/X/g, "​​​​​Х")
    .replace(/Y/g, "​​​​​Υ")
    .replace(/Z/g, "​​​​​Ζ")
    .replace(/a/g, "а")
    .replace(/c/g, "с")
    .replace(/e/g, "е")
    .replace(/i/g, "і")
    .replace(/j/g, "ј")
    .replace(/o/g, "о")
    .replace(/p/g, "р")
    .replace(/s/g, "ѕ")
    .replace(/x/g, "х")
    .replace(/y/g, "у");

  const generateCryptographyEmail = async () => {
    const email = "‮" + prompt.split("").reverse().join("");
    copy(email);
    setResult(email);
  };

  const generateCryptographySms = async () => {
    copy(cryptography);
    setResult(cryptography);
  };

  const generateCryptographyAnnouncement = async () => {
    const filler = "&ZeroWidthSpace;";
    const b = [...cryptography].join(filler);
    const c = b.concat(filler);
    setResult(b);
  };

  useEffect(() => {
    window.addEventListener("orientationchange", function () {
      if (screen.orientation.angle === 0 || screen.orientation.angle === 90) {
        return setOrientation(false);
      }

      return setOrientation(true);
    });

    window.addEventListener("devtoolschange", (event) => {
      setShowText(devtools.isOpen);
    });
  }, []);

  const headline = "BLACK TEXT";

  return (
    <div className="app-main">
      <>
        <h2>
          CRIPTOGRAFADOR <Typed strings={[headline]} typeSpeed={250} loop />
        </h2>

        <textarea
          className="app-input"
          placeholder="Cole o texto que deseja criptografar e clique no botão abaixo👇👇"
          onChange={(e) => setPrompt(e.target.value)}
          rows="10"
          cols="57"
        />
        <div className="app-button">
          <button onClick={generateCryptographyEmail}>Email</button>
          <button onClick={generateCryptographySms}>Sms</button>
          <button onClick={generateCryptographyAnnouncement}>Anuncio</button>
        </div>
        {showText && orientation && (
          <div className="a" dangerouslySetInnerHTML={{ __html: result }} />
        )}
      </>
    </div>
  );
}

export default App;
