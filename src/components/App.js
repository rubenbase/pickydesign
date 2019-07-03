import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import Palette from "components/Palette";
import seedColors from "seeds/colors";
import { generatePalette } from "../utils/color";

class App extends React.Component {
    getPalette(id) {
        return seedColors.find(function(palette) {
            return palette.id === id;
        });
    }

    render() {
        return (
            <Switch>
                <Route exact path="/" />
                <Route
                    exact
                    path="/palette/:id"
                    render={routeProps => (
                        <Palette
                            palette={generatePalette(
                                this.getPalette(routeProps.match.params.id)
                            )}
                        />
                    )}
                />
                <div />
            </Switch>
        );
    }
}

export default App;
