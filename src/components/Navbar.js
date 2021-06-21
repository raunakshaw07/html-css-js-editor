import React from "react";
import JSZip from "jszip";
import FileSaver from "file-saver";

const Navbar = (props) => {
  const { onClick, html, css, js, darkMode, setDarkMode } = props;

  const handleClick = () => {
    onClick(true);
  };

  const handleDownload = async (e) => {
    e.preventDefault();
    var zip = new JSZip();
    var code = zip.folder("code");
    code.file("sample.html", html);
    code.file("style.css", css);
    code.file("script.js", js);
    zip.generateAsync({ type: "blob" }).then(function (content) {
      // see FileSaver.js
      FileSaver.saveAs(content, "code.zip");
    });
  };
  return (
    <div
      className="navbar"
      style={{ background: darkMode ? "#2e2e2e" : "#6618a1" }}
    >
      <button
        onClick={handleClick}
        style={{ color: darkMode ? "#c6c6c6" : "#ffffff" }}
      >
        <i className="fas fa-play fa-2x"></i>
      </button>
      <button
        onClick={handleDownload}
        style={{ color: darkMode ? "#c6c6c6" : "#ffffff" }}
      >
        <i className="fas fa-download fa-2x"></i>
      </button>
      <button onClick={() => setDarkMode(!darkMode)}>
        {darkMode ? (
          <i class="fas fa-sun fa-2x" style={{ color: "#c6c6c6" }}></i>
        ) : (
          <i class="fas fa-moon fa-2x" style={{ color: "#ffffff" }}></i>
        )}
      </button>
    </div>
  );
};

export default Navbar;
