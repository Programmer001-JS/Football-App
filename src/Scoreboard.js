import React from 'react'

const Scoreboard = ({ matches }) => {
    return (
      <div>
        <h2>Scoreboard</h2>
        {matches.map((match, index) => {
          if (match.isFinished) {
            return (
              <div key={index}>
                <p>
                  {match.teams[0]} {match.score[match.teams[0]]} - {match.score[match.teams[1]]} {match.teams[1]}
                </p>
              </div>
            );
          }
          return null;
        })}
      </div>
    );
  };
  
  
  
 export default Scoreboard;