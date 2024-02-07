import React, { useState } from "react";

export default function Hex2rgb() {
  const [inputHex, setInputHex] = useState("#e2e2e2");
  const [convert, setConvert] = useState({
    resultText: converter(inputHex),
    bgColor: converter(inputHex),
  });

  const regex = /#[\dabcdef]{6}$/;

  const handleChangeInput = (evt) => {
    let result = evt.target.value;
    setInputHex(result);

    if (result.length < 7) {
      return;
    }
    regex.test(result.toLowerCase())
      ? setConvert({
          resultText: converter(result),
          bgColor: converter(result),
        })
      : setConvert({ resultText: "Error" });
  };

  return (
    <>
      <div
        className="converter-color__wrapper"
        style={{ backgroundColor: convert.bgColor }}
      >
        <div className="converter-color__content">
          <div className="input-wrapper">
            <input
              className="hex2-input"
              type="text"
              placeholder="Введите значение..."
              value={inputHex}
              maxLength="7"
              onChange={handleChangeInput}
            />
          </div>
          <div className="result-wrapper">
            <span className="rgb-result">
              {inputHex.length > 6 ? convert.resultText : ""}
            </span>
          </div>
        </div>
      </div>
    </>
  );
}

function converter(value) {
  const red = parseInt(value.slice(1, 3), 16);
  const green = parseInt(value.slice(3, 5), 16);
  const blue = parseInt(value.slice(5), 16);

  return `rgb(${red},${green},${blue})`;
}
