import React, { Component } from "react";
import "./style.css";
export default class Footer extends Component {
    render() {
        return (
            <footer className="Footer">
                <div className="Footer__container">
                    <p>
                        <b>Made with </b>
                        <span role="img" aria-label="heart">
                            ❤️
                        </span>{" "}
                        Rubén Costa
                        <a
                            style={{
                                textDecoration: "underline",
                                color: "black"
                            }}
                            target="_blank"
                            rel="noopener noreferrer"
                            href="https://github.com/rubenbase"
                        >
                            <i
                                style={{ marginLeft: 5 }}
                                class="fab fa-github"
                                aria-hidden="true"
                            />
                        </a>
                    </p>
                </div>
            </footer>
        );
    }
}
