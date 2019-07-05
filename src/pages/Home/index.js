import React, { Component } from "react";
import Navbar from "components/Navbar";
import Products from "components/Products";
import Footer from "components/Footer";

export default class Home extends Component {
    render() {
        return (
            <>
                <Navbar />
                <div
                    style={{
                        display: "flex",
                        flexDirection: "column",
                        color: "white"
                    }}
                    className="Home"
                >
                    <Products />
                    <Footer />
                </div>
            </>
        );
    }
}
