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
        const { background } = this.props;
        navigator.clipboard.writeText(background);
        this.props.onChangeCopied(true);
        this.setState({ copied: true }, () => {
            setTimeout(() => {
                //********* experimental
                this.props.onChangeCopied(false);
                // ******** end experimental

                this.setState({ copied: false });
            }, 1000);
        });
    }

    onChangeCopied() {}

    render() {
        const { background, name } = this.props;
        return (
            <div
                style={{ background }}
                className="ColorBox"
                onClick={this.copyToClipboard}
            >
                <div
                    style={{ background }}
                    className={`ColorBox__overlay ${this.state.copied &&
                        "show"}`}
                />
                <div
                    className={`ColorBox__overlay__msg ${this.state.copied &&
                        "show"}`}
                >
                    <h1>copied!</h1>
                    <p>{background}</p>
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
