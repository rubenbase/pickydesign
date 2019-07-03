import React, { Component } from "react";

import ColorBox from "../ColorBox";
import "./style.css";
import Navbar from "../Navbar";
export default class Palette extends Component {
    constructor(props) {
        super(props);

        this.state = {
            level: 500,
            format: "hex"
        };

        this.changeLevel = this.changeLevel.bind(this);
        this.changeCopyFormat = this.changeCopyFormat.bind(this);
    }

    renderList() {
        return this.props.palette.colors[this.state.level].map(color => {
            return (
                <ColorBox
                    background={color[this.state.format]}
                    name={color.name}
                />
            );
        });
    }

    changeLevel(level) {
        this.setState({ level });
    }

    changeCopyFormat(format) {
        this.setState({ format });
    }

    render() {
        const { paletteName, emoji } = this.props.palette;

        const { level } = this.state;
        return (
            <div className="Palette">
                {/*Navbar will go here*/}
                <Navbar
                    level={level}
                    changeCopyFormat={this.changeCopyFormat}
                    changeLevel={this.changeLevel}
                />

                <div className="Palette__menu">
                    <div className="Palette__menu--right">
                        <span className="Palette__menu__emoji">{emoji}</span>
                        <h2 className="Palette__menu__title">{paletteName}</h2>
                    </div>
                </div>
                <div className="Palette__colors">{this.renderList()}</div>
                <div className="Palette__footer">
                    <i className="fas fa-arrow-left animated bounce" />
                    <h2>Palette Collection</h2>
                </div>
            </div>
        );
    }
}
