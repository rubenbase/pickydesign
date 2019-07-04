import React, { Component } from "react";
import { Link } from "react-router-dom";
import ColorBox from "components/ColorBox";
import Navbar from "components/ColorNavbar";
import "./style.css";
export default class Palette extends Component {
    constructor(props) {
        super(props);

        this.state = {
            level: 500,
            format: "hex",
            copied: false,
            colorPicked: {
                colorValue: null,
                colorName: null
            }
        };

        this.changeLevel = this.changeLevel.bind(this);
        this.changeCopyFormat = this.changeCopyFormat.bind(this);
        this.changeCopied = this.changeCopied.bind(this);
    }

    changeCopied(copied) {
        this.setState({ copied });
        console.log("from parent ", this.state.copied);
    }

    renderList() {
        if (!this.props.palette) {
            return (
                // In the future, redirect this to Palette Collection or 404
                <div
                    style={{
                        width: "100%",
                        color: "white",
                        display: "flex",
                        justifyContent: "center"
                    }}
                >
                    <h2>Palette Not Found</h2>
                </div>
            );
        }

        return this.props.palette.colors[this.state.level].map(color => {
            return (
                <ColorBox
                    key={color.id}
                    background={color[this.state.format]}
                    name={color.name}
                    onChangeCopied={this.changeCopied}
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

                <div
                    className={`Palette__menu ${this.state.copied && "show "}`}
                >
                    <div className="Palette__menu--right">
                        <span className="Palette__menu__emoji">{emoji}</span>
                        <h2 className="Palette__menu__title">{paletteName}</h2>
                    </div>
                </div>
                <div className="Palette__colors">{this.renderList()}</div>
                <div className="Palette__footer">
                    <i className="fas fa-arrow-left animated bounce" />
                    <Link className="Palette__footer__back" to="/palettes">
                        Palette Collection
                    </Link>
                </div>
            </div>
        );
    }
}
