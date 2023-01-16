import React, { useState, useEffect } from "react";

const Test = () => {
  const [matches, setMatches] = useState({Danilo: 0});
  const [scores, setScores] = useState({});
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    if (isStarted) {
      setTimeout(() => {
        setScores({ ...scores, Danilo: matches.Danilo + 1 });
        setMatches({ ...matches, Danilo: "" });
      }, 5000);
    }
  }, [isStarted, matches]);

  const handleStart = () => {
    setIsStarted(true);
  };

  return (
    <div>
      <h1>Matches</h1>
      <p>Danilo: {matches.Danilo}</p>
      <h1>Scores</h1>
      <p>Danilo: {scores.Danilo}</p>
      {!isStarted && <button onClick={handleStart}>Start</button>}
    </div>
  );
};

export default Test;