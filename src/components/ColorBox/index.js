import React, { Component } from "react";
import "./style.css";
export default class ColorBox extends Component {
    render() {
        const { color, name } = this.props.background;

        return (
            <div style={{ background: color }} className="ColorBox">
                <div className="ColorBox__container">
                    <div className="ColorBox__content">
                        <h3>{name}</h3>
                    </div>
                    <button className="ColorBox__btn--copy">Copy</button>
                </div>
                <span className="ColorBox__more">MORE</span>
            </div>
        );
    }
}
