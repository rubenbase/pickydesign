import React, { Component } from "react";
import Slider, { Range } from "rc-slider";
import "rc-slider/assets/index.css";
import ColorBox from "../ColorBox";
import "./style.css";

export default class Palette extends Component {
    constructor(props) {
        super(props);

        this.state = {
            level: 500
        };

        this.changeLevel = this.changeLevel.bind(this);
    }

    renderList() {
        return this.props.palette.colors[this.state.level].map(color => {
            return <ColorBox background={color} />;
        });
    }

    changeLevel(level) {
        this.setState({ level });
    }

    render() {
        return (
            <div className="Palette">
                {/*Navbar will go here*/}
                <Slider
                    defaultValue={this.state.level}
                    min={100}
                    max={900}
                    step={100}
                    onAfterChange={this.changeLevel}
                />
                <h2 style={{ marginLeft: 20, color: "#ffffff" }}>
                    Palette Component
                </h2>
                <div className="Palette-colors">{this.renderList()}</div>
            </div>
        );
    }
}
