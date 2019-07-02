import React, { Component } from "react";

import ColorBox from "../ColorBox";
import "./style.css";
import Navbar from "../Navbar";

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
        const { level } = this.state;
        return (
            <div className="Palette">
                {/*Navbar will go here*/}
                <Navbar level={level} changeLevel={this.changeLevel} />

                <div className="Palette__menu">
                    <i class="fas fa-arrow-left" />
                    <h2>Palette Collection</h2>
                </div>
                <div className="Palette__colors">{this.renderList()}</div>
            </div>
        );
    }
}
