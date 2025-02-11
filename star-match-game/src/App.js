import React, { useState } from "react";
import Game from "./components/Game"; // Import the Game component
import "./index.css"; // Import global styles

const App = () => {
  const [gameId, setGameId] = useState(1);
  return <Game key={gameId} startNewGame={() => setGameId(gameId + 1)} />;
};

export default App;
