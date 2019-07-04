import React, { Component } from "react";
import Navbar from "components/Navbar";
import Products from "components/Products";
import { Link } from "react-router-dom";

export default class Home extends Component {
    render() {
        return (
            <>
                <Navbar />
                <div style={{ color: "white" }} className="Home">
                    <h1>Home</h1>
                    <Products />
                    <Link to="/palettes">Palettes List</Link>
                </div>
            </>
        );
    }
}
