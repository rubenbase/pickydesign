import React, { Component } from "react";
import ColorBox from "../ColorBox";

export default class Palette extends Component {
    renderList() {
        return this.props.colorsPalette.colors.map(color => {
            return <ColorBox background={color} />;
        });
    }

    render() {
        return (
            <div className="Palette">
                {/*Navbar will go here*/}
                <div className="Palette-colors">{this.renderList()}</div>
                <h1>Palette Component</h1>
            </div>
        );
    }
}
