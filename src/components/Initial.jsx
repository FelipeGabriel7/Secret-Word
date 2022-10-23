import React, { useState } from "react";
import { Game } from "./Game";
import "./Initial.css";
import { data } from "../data/data";

export function Initial({ off, setOff }) {

  const [list] = useState(data)
  const [category , setCategory] = useState('');
  const [word , setWord ] = useState('')

  function randomCategories(){
    const categories = Object.keys(list)
    const categoriesRandom = categories[Math.floor(Math.random() * Object.keys(categories).length)]
    
    setCategory(categoriesRandom)

    const words = list[categoriesRandom][Math.floor(Math.random() * list[categoriesRandom].length)]
    
    setWord(words)
  }

  function handleOff() {
    randomCategories()
    setOff((prevOff) => !prevOff);
  }

  return (
    <>
      <div className={off ? "off" : "on"}>
        <div className="init-Screen">
          <h1 className="title-initial"> Secret Word Game </h1>
          <p style={{ color: "yellow" }}>
            {" "}
            Clique no botao abaixo para começar a jogar{" "}
          </p>
          <button className="button-initial" onClick={handleOff}>
            {" "}
            Começar o Jogo{" "}
          </button>
        </div>
      </div>
      {off && <Game category={category} word={word} random={randomCategories}/>}
    </>
  );
}
