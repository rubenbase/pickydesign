import React, { Component } from "react";
import ColorBox from "../ColorBox";
import "./style.css";
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
                <h2 style={{ marginLeft: 20, color: "#ffffff" }}>
                    Palette Component
                </h2>
                <div className="Palette-colors">{this.renderList()}</div>
            </div>
        );
    }
}
