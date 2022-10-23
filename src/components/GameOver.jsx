import React from 'react'
import './GameOver.css'

export const GameOver = ({ point , text }) => {

  const reload = () => {

    window.location.reload(false)

    setTimeout(() => {
        window.location.reload(true)
    }, 1500)
  }

  return (
    <div className="gameOver">
       <h1 className="title-fim"> {text} </h1>
       <h2 className="pontuate"> Sua pontuação: {point} </h2>
       <button className="button" onClick={reload}> Reiniciar Jogo </button>
    </div>
  )
}
