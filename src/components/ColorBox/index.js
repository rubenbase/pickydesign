import React, { Component } from "react";
import "./style.css";
export default class ColorBox extends Component {
    constructor(props) {
        super(props);

        this.state = { copied: false };

        this.copyToClipboard = this.copyToClipboard.bind(this);
    }

    copyToClipboard() {
        if (!navigator) return alert("Action not supported on this browser");
        const { color } = this.props.background;
        navigator.clipboard.writeText(color);
        this.setState({ copied: true }, () => {
            setTimeout(() => {
                this.setState({ copied: false });
            }, 1500);
        });
    }

    render() {
        const { hex, name } = this.props.background;

        return (
            <div
                style={{ background: hex }}
                className="ColorBox"
                onClick={this.copyToClipboard}
            >
                <div
                    style={{ background: hex }}
                    className={`ColorBox__overlay ${this.state.copied &&
                        "show"}`}
                />
                <div
                    className={`ColorBox__overlay__msg ${this.state.copied &&
                        "show"}`}
                >
                    <h1>copied!</h1>
                    <p>{hex}</p>
                </div>
                <div className="ColorBox__container">
                    <div className="ColorBox__content">
                        <h3>{name}</h3>
                    </div>
                    <button className="ColorBox__btn--copy">Copy</button>
                </div>
                <span className="ColorBox__more">More</span>
            </div>
        );
    }
}
