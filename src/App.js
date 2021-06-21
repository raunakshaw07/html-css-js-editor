import { useState, useEffect } from "react";
import "./App.css";
import Editor from "./components/Editor";
import Navbar from "./components/Navbar";

function App() {
  const [html, setHtml] = useState("");
  const [css, setCss] = useState("");
  const [js, setJs] = useState("");
  const [run, setRun] = useState(false);
  const [srcDoc, setSrcDoc] = useState("");
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    setSrcDoc(`
      <html>
        <body>${html}</body>
        <style>${css}</style>
        <script>${js}</script>
      </html>
    `);
    setRun(false);
  }, [run]);

  return (
    <div
      className="App"
      style={{ background: darkMode ? "#505050" : "#e5e5e5" }}
    >
      <Navbar
        onClick={setRun}
        html={html}
        css={css}
        js={js}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />
      <div className="editor">
        <Editor
          mode="html"
          title="HTML"
          value={html}
          onChange={setHtml}
          darkMode={darkMode}
        />
        <Editor
          mode="css"
          title="CSS"
          value={css}
          onChange={setCss}
          darkMode={darkMode}
        />
        <Editor
          mode="javascript"
          title="JS"
          value={js}
          onChange={setJs}
          darkMode={darkMode}
        />
      </div>
      <div className="output">
        <iframe
          srcDoc={srcDoc}
          title="Output"
          sandbox="allow-scripts"
          width="100%"
          height="100%"
          frameborder="0"
          style={{ background: "#fff" }}
        />
      </div>
    </div>
  );
}

export default App;
