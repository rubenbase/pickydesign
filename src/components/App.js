import React from "react";
import "./App.css";
import Palette from "components/Palette";
import seedColors from "seeds/colors";
import { generatePalette } from "../utils/color";

class App extends React.Component {
    render() {
        return (
            <div>
                <h1
                    style={{
                        fontWeight: 400,
                        marginLeft: 20,
                        color: "#ffffff"
                    }}
                >
                    Picky <span style={{ fontWeight: 700 }}>Design</span>
                </h1>
                <Palette palette={generatePalette(seedColors[0])} />
            </div>
        );
    }
}

export default App;
