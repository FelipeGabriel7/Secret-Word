import React from "react";
import { useEffect } from "react";
import { useState, useRef } from "react";
import { Button } from "./Button";
import "./Game.css";
import { GameOver } from "./GameOver";

export const Game = ({ category, word , random}) => {
  // Array letters

  const startGame = () => {
    clearStates();
    random();
  }

  let letterWord = word.split("");

  const letters = letterWord.map((l) => l.toUpperCase());
  const [letterComp] = useState(letters);

  // Options
  const [option, setOption] = useState(true);
  const reference = useRef(null);

  // Manipulation word
  const [utils, setUtils] = useState([]);
  const [errorLetters, setErrorLetters] = useState([]);
  const [tent, setTent] = useState(3);
  const [point, setPoint] = useState(0);

  // Set letter
  const [value, setValue] = useState("");

  // Functions

  function handleGame() {
    value.toUpperCase();


    if (value === "" || typeof value !== "string")
      return alert(" Informe um valor válido ");

    if (utils.includes(value) || errorLetters.includes(value)) {
      return;
    }

    if (letterComp.includes(value)) {
      setUtils((prevUtils) => [...prevUtils, value]);
      setPoint((prevPoint) => prevPoint + 100);
    } else {
      setErrorLetters((prevError) => [...prevError, value]);
      setTent((prevTent) => prevTent - 1);
    }

    setValue("");
    reference.current.focus();
  }

  function handleForm(e) {
    e.preventDefault();
  }

  function clearStates() {
    setValue("");
    setUtils([]);
  }

  useEffect(() => {
    if (tent <= 0) {
      clearStates();
    }
  }, [tent]);

  useEffect(() => {

    const unickLetters = [...new Set(letterComp)]
    console.log(unickLetters)

    if(utils.length === unickLetters.length){
      setTimeout(() => {
        startGame()
      }, 600);
    }

  }, [utils, letterComp , startGame]);

  return (
    <div>
      <form onSubmit={handleForm}>
        {tent > 0 && (
          <div className="game">
            <div className="info">
              <p> Pontuação: {point}</p>
              <h2> Advinhe a palavra </h2>

              {option && (
                <h3>
                  {" "}
                  Dica sobre a palavra:{" "}
                  <span style={{ color: "yellow" }}> {category} </span>
                </h3>
              )}

              <Button setOption={setOption} option={option} />
              <p> Você ainda tem {tent} tentativa(s)</p>
            </div>
            <div className="content-game">
              {letterComp.map((l, id) =>
                utils.includes(l) ? (
                  <p key={id} className="item-content black">
                    {l}{" "}
                  </p>
                ) : (
                  <p key={id} className="item-content">
                    {" "}
                  </p>
                )
              )}
            </div>
            <div className="game-on">
              <p> Tente adivinhar uma letra da palavra </p>
              <div className="addLetter">
                <input
                  type="text"
                  maxLength={1}
                  pattern="/[A-ZÁÀÂÃÉÈÍÏÓÔÕÖÚÇÑ]{3}/"
                  value={value}
                  onChange={(e) => setValue(e.target.value.toUpperCase())}
                  ref={reference}
                />
                <button onClick={handleGame}> Jogar! </button>
              </div>
              <p> Letras utilizadas : </p>
            </div>
            <div className="letters-users">
              {utils &&
                errorLetters.map((util, id) => (
                  <p key={id}> {util.split("").join(" - ")} </p>
                ))}
            </div>
          </div>
        )}
        {tent <= 0 && <GameOver point={point} text="Game over" />}
      </form>
    </div>
  );
};
