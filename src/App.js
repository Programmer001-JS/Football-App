import { useState } from "react";
import Match from "./LiveMatch";
import Scoreboard from "./Scoreboard";


const App = () => {
  const [matches, setMatches] = useState([
    { teams: ['Serbia', 'Brazil'], score: [0, 0], isFinished: false },
    { teams: ['Argentina', 'France'], score: [0, 0], isFinished: false },
    { teams: ['USA', 'Mexico'], score: [0, 0], isFinished: false },
  ]);

  const handleMatchFinish = (index, score) => {
    setMatches(prevState => {
      const newMatches = [...prevState];
      newMatches[index].isFinished = true;
      newMatches[index].score = score;
      return newMatches;
    });
  };

  return (
    <div>
      <div>
        {matches.map((match, index) => {
          if (!match.isFinished) {
            return (
              <Match
                key={index}
                teams={match.teams}
                onFinish={score => handleMatchFinish(index, score)}
              />
            );
          }
          return null;
        })}
      </div>
      <Scoreboard matches={matches} />
    </div>
  );
};


export default App