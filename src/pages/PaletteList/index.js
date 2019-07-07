import React, { Component } from "react";
import Navbar from "components/Navbar";
import { Link } from "react-router-dom";
import MiniPalette from "components/MiniPalette";

export default class PaleteList extends Component {
    renderList() {
        return this.props.palettes.map(palette => {
            return (
                <div>
                    <div>
                        <MiniPalette {...palette} />
                        <Link to={`/palettes/${palette.id}`}>
                            {palette.paletteName}
                        </Link>
                    </div>
                </div>
            );
        });
    }

    render() {
        return (
            <>
                <Navbar />
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        color: "white"
                    }}
                    className="Home"
                >
                    <div style={{ color: "white" }} className="PaletteList">
                        <h1>PaleteList</h1>
                        {this.renderList()}
                    </div>
                </div>
            </>
        );
    }
}
