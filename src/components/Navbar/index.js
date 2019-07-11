import React, { Component } from "react";
import "./style.css";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
            <header className="Navbar">
                <div className="Navbar__logo">
                    <Link to="/">
                        <span className="Navbar__logo__text--picky">Picky</span>
                        <span
                            className="Navbar__logo__text--design"
                            style={{ fontWeight: 700 }}
                        >
                            Design
                        </span>
                    </Link>
                </div>
                <div className="Navbar__container">
                    {/* Menu Links Will go here */}
                </div>
            </header>
        );
    }
}
