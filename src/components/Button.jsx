import React from "react";
import "./Button.css";

export function Button({ setOption, option }) {
  return (
    <>
      <button
        className="btnOption"
        onClick={() => setOption((prevOption) => !prevOption)}
      >
        {" "}
        {option ? "Jogar sem dica " : "Jogar com dica "}{" "}
      </button>
    </>
  );
}
