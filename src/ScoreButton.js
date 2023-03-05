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
