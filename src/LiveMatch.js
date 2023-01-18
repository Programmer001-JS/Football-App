import React, { useState } from 'react';

const Match = ({ teams, onFinish }) => {
  const [score, setScore] = useState({ [teams[0]]: 0, [teams[1]]: 0 });
  const [isStarted, setIsStarted] = useState(false);
  const matchDuration = 10;

  const startMatch = () => {
    setIsStarted(true);
    const interval = setInterval(() => {
      const goals = Math.floor(Math.random() * 2);
      if (goals === 1) {
        const team = Math.floor(Math.random() * 2) === 0 ? teams[0] : teams[1];
        setScore(prevState => ({ ...prevState, [team]: prevState[team] + 1 }));
      }
    }, 1000);
    setTimeout(() => {
      onFinish(score);
      clearInterval(interval);
    }, matchDuration * 1000);
  };
  
  return (
    <div>
      <h2>{teams[0]} vs {teams[1]}</h2>
      <p>{score[teams[0]]} - {score[teams[1]]}</p>
      {!isStarted && <button onClick={startMatch}>Start Match</button>}
    </div>
  );
};

export default Match;
