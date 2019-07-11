import React from "react";
import "./style.css";
import { Route, Switch } from "react-router-dom";
import Palette from "components/Palette";
import seedColors from "seeds/colors";
import { generatePalette } from "utils/color";
import Home from "../../pages/Home";
import PaleteList from "../../pages/PaletteList";

class App extends React.Component {
    getPalette(id) {
        return seedColors.find(function(palette) {
            return palette.id === id;
        });
    }

    render() {
        return (
            <Switch>
                <Route exact path="/" component={Home} />
                <Route
                    exact
                    path="/palettes"
                    render={routeProps => (
                        <PaleteList palettes={seedColors} {...routeProps} />
                    )}
                />
                <Route
                    exact
                    path="/palettes/:id"
                    render={routeProps => (
                        <Palette
                            palette={generatePalette(
                                this.getPalette(routeProps.match.params.id)
                            )}
                        />
                    )}
                />
                <Route
                    exact
                    path="/palettes/:paletteId/:colorId"
                    render={() => <h1>Single Color Page</h1>}
                />
            </Switch>
        );
    }
}

export default App;
