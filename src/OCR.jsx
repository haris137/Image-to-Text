import React from "react";
import Tesseract from "tesseract.js";
import { useState } from "react";

function OCR() {
  const [image, setImage] = useState(null);
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);

  const handleImageUpload = (e) => {
    setImage(URL.createObjectURL(e.target.files[0]));
  };

  const handleOCR = () => {
    setLoading(true);
    Tesseract.recognize(image, "eng", {
      logger: (m) => console.log(m),
    }).then(({ data: { text } }) => {
      setText(text);
      setLoading(false);
    });
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <p className="text-xl font-semibold m-10">Choose yor image</p>
      <input
        type="file"
        accept="image/*"
        className="bg-black rounded-2xl text-white p-5 w-[20%] cursor-pointer"
        onClick={handleImageUpload}
      />

        {image && <img src={image} alt="uploaded image" className="my-2 max-h-64" />}
      <button
        className="bg-blue-500 text-white p-3 rounded-2xl w-[10%] m-5 cursor-pointer hover:bg-blue-600"
        onClick={handleOCR}
      >
        {loading ? "Processing" : "Extarct Text"}
      </button>
        {text && (
      <textarea value={text} readOnly  className="w-[70%] h-64 mt-4 border">
      </textarea>)}
    </div>
  );
}

export default OCR;
