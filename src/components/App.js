import React from 'react';
import './App.css';
import Palette from "components/Palette";
import seedColors from "seeds/colors"

function App() {
  return (
    <div >
      <h1>Test</h1>
      <Palette colorsPalette={seedColors[0]}/>

    </div>
  );
}

export default App;
