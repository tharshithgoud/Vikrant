import React, { useRef, useState } from "react";
import { FileDrop } from "react-file-drop";

import "./app.scss";

export default function FD() {
  const inputRef = useRef();
  const [filenames, setNames] = useState([]);

  const fileHandler = (files) => {
    const extension = files[0].name.split(".")[1]?.toLowerCase();

    if (extension !== undefined) {
      const fNames = Object.keys(files).map((name) => {
        return {
          name: files[name].name,
          icon: files[name].name.split(".")[1]?.toUpperCase().trim(),
        };
      });
      setNames((prev) => [...prev, fNames].flat());
    } else {
      alert("file type not supported");
    }
  };

  const filePicker = () => {
    inputRef.current.click();
  };

  return (
    <div className="container">
      <h3>UPLOAD FILE</h3>

      <FileDrop onTargetClick={filePicker} onDrop={(f) => fileHandler(f)}>
        <p className="placeholder">
          DRAG FILE HERE <br /> OR <span>BROWSE</span>
        </p>
        <input
          accept=".xls, .png, .psd, .doc, .docx, .ai, .pdf, .jpg, .jpeg"
          value=""
          style={{ visibility: "hidden", opacity: 0 }}
          ref={inputRef}
          multiple="multiple"
          type="file"
          onChange={(e) => fileHandler(e.target.files)}
        />
      </FileDrop>
    </div>
  );
}
