import React, { Component } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./style.css";
import { white } from "ansi-colors";

export default class Navbar extends Component {
    render() {
        return (
            <header className="Navbar">
                <div className="Navbar__logo">
                    <a href="/">
                        <span className="Navbar__logo__text--picky">Picky</span>
                        <span
                            className="Navbar__logo__text--design"
                            style={{ fontWeight: 700 }}
                        >
                            Design
                        </span>
                    </a>
                </div>
                <div className="Navbar__slider__container">
                    <span className="Navbar__slider__detail">
                        Level: {this.props.level}
                    </span>
                    <div className="Navbar__slider">
                        <Slider
                            defaultValue={this.props.level}
                            min={100}
                            max={900}
                            step={100}
                            onAfterChange={this.props.changeLevel}
                        />
                    </div>
                </div>
            </header>
        );
    }
}
