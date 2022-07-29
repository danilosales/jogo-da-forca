import React, { useEffect } from 'react'
import { checkWin } from '../../helpers/helpers';

function Popup({
  correctLetters,
  wrongLetters,
  selectedWord,
  setPlayable,
  playAgain
}) {
  let finalMessage = '';
  let finalMessageRevealWord = '';
  let playable = true;

  if(checkWin(correctLetters, wrongLetters, selectedWord) === 'win') {
    finalMessage = 'Parabéns, Você ganhou!';
    playable = false;
  } else if(checkWin(correctLetters, wrongLetters, selectedWord) === 'lose') {
    finalMessage = 'Você perdeu!';
    finalMessageRevealWord = `...a palavra era ${selectedWord}`
    playable = false;
  }

  useEffect(() => {
    setPlayable(playable);
  })

  return (
    <div className='popup-container' style={finalMessage !== '' ? {display: 'flex'} : {}}>
      <div className='popup'>
        <h2>{finalMessage}</h2>
        <h3>{finalMessageRevealWord}</h3>
        <button onClick={playAgain}>Jogar novamente</button>
      </div>
          
    </div>
  )
}

export default Popup
