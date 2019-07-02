import React from "react";
import "./App.css";
import Palette from "components/Palette";
import seedColors from "seeds/colors";

function App() {
    return (
        <div>
            <h1 style={{ fontWeight: 400, marginLeft: 20 }}>
                Picky <span style={{ fontWeight: 700 }}>Design</span>
            </h1>
            <Palette colorsPalette={seedColors[0]} />
        </div>
    );
}

export default App;
