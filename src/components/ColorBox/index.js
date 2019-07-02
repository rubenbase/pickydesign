import React, { Component } from "react";
import "./style.css";
export default class ColorBox extends Component {
    render() {
        const { color, name } = this.props.background;

        return (
            <div style={{ background: color }} className="ColorBox">
                <span>MORE</span>
                <h3>{name}</h3>
            </div>
        );
    }
}
