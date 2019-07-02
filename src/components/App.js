import React from "react";
import "./App.css";
import Palette from "components/Palette";
import seedColors from "seeds/colors";
import { generatePalette } from "../utils/color";

class App extends React.Component {
    render() {
        return (
            <div>
                <Palette palette={generatePalette(seedColors[0])} />
            </div>
        );
    }
}

export default App;
