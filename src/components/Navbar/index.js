import React, { Component } from "react";
import "./style.css";

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
                <div className="Navbar__container">
                    {/* Menu Links Will go here */}
                </div>
            </header>
        );
    }
}
