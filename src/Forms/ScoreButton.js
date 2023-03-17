/* TODO: 
  - Restructure code so that state modification is done in ScoreButton.js 
  - Rename to Score.js 
  - Change to class component
  - ChargeStation.js and Gamepiece.js be seperate class components that both extend from Score.js
*/

function ScoreButton({scoreType, getScore, incrementScore}) {
  return (
    <>
    <p>{scoreType}: {getScore(scoreType)}</p>
    <button onClick={() => incrementScore(scoreType, -1)}>-</button>
    <button onClick={() => incrementScore(scoreType, 1)}>+</button>
    </>
  );
}

export default ScoreButton;
