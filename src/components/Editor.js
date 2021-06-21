import React from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-github";
import "ace-builds/src-noconflict/theme-monokai";

const Editor = (props) => {
  const { mode, title, value, onChange, darkMode } = props;

  const handleChange = (value) => {
    onChange(value);
  };

  return (
    <div className="editor-component">
      <div
        className="title"
        style={{
          background: darkMode ? "#222222" : "#6618a1",
          color: "#fff",
        }}
      >
        <h3>{title}</h3>
      </div>
      <AceEditor
        mode={mode}
        theme={darkMode ? "monokai" : "github"}
        name="editor"
        value={value}
        onChange={handleChange}
        fontSize={14}
        showGutter={true}
        highlightActiveLine={true}
        setOptions={{
          showLineNumbers: true,
        }}
        style={{ width: "100%", height: "76%" }}
      />
    </div>
  );
};

export default Editor;
