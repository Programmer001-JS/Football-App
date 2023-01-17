import Match from "./LiveMatch";


const App = () => {
  const matches = [
    { teams: ['Serbia', 'Brazil'] },
    { teams: ['Argentina', 'France'] },
    { teams: ['USA', 'Mexico'] },
  ];

  return (
    <div>
      {matches.map((match, index) => (
          <Match key={index} teams={match.teams} />
      ))}
    </div>
  );
};
export default App