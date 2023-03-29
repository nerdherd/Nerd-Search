/* TODO: 
  - Restructure code so that state modification is done in ScoreButton.js 
  - Rename to Score.js 
  - Change to class component
  - ChargeStation.js and Gamepiece.js be seperate class components that both extend from Score.js
*/

import './styles/scoreButton.css'

function ScoreButton({scoreType, getScore, incrementScore}) {
  return (
    <div id='scoreButtonDiv'>
      <p id='scoreTypeLabel'><b>{scoreType}: {getScore(scoreType)}</b></p>
      <button className='scoreButton' id='subtractScore' onClick={() => incrementScore(scoreType, -1)}>-</button>
      <button className='scoreButton' id='addScore' onClick={() => incrementScore(scoreType, 1)}>+</button>
    </div>
  );
}

export default ScoreButton;
