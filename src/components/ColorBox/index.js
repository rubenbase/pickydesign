import React, { Component } from "react";
import "./style.css";
export default class ColorBox extends Component {
    constructor(props) {
        super(props);

        this.state = {};

        this.buttonRef = React.createRef();

        this.copyToClipboard = this.copyToClipboard.bind(this);
    }

    copyToClipboard() {
        if (!navigator) return alert("Action not supported on this browser");
        const { color } = this.props.background;
        navigator.clipboard.writeText(color);
        return alert("Copied!");
    }

    render() {
        const { color, name } = this.props.background;

        return (
            <div style={{ background: color }} className="ColorBox">
                <div className="ColorBox__container">
                    <div className="ColorBox__content">
                        <h3>{name}</h3>
                    </div>
                    <button
                        ref={this.buttonRef}
                        className="ColorBox__btn--copy"
                        onClick={this.copyToClipboard}
                    >
                        Copy
                    </button>
                </div>
                <span className="ColorBox__more">More</span>
            </div>
        );
    }
}
