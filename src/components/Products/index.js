import React, { Component } from "react";
import "./style.css";
export default class Products extends Component {
    render() {
        return (
            <section className="Products">
                <div className="Products__hero__section">
                    <div className="Products__hero__container">
                        <div className="Products__hero__container__box">
                            <div className="Products__hero__container__left">
                                <h3 className="Products__hero__intro">
                                    Hello,
                                </h3>
                                <h2 className="Products__hero__strong">
                                    CREATIVES
                                </h2>
                                <h3 className="Products__hero__third">
                                    Use our Visual System Design <br /> Tools
                                </h3>
                                <h1
                                    style={{
                                        marginLeft: 150,
                                        marginTop: -20,
                                        fontSize: "40px",
                                        fontWeight: 900
                                    }}
                                >
                                    &
                                </h1>
                                <h3
                                    style={{
                                        marginTop: -5,
                                        fontSize: "22px",
                                        borderLeft: "4px solid yellow",
                                        paddingLeft: 15
                                    }}
                                    className="Products__hero__third"
                                >
                                    Create beautiful designs with a little{" "}
                                    <span
                                        style={{
                                            fontFamily: "Pacifico",
                                            letterSpacing: 3
                                        }}
                                    >
                                        touch
                                    </span>
                                </h3>
                                <p className="Products__hero__fourth">
                                    * This website is still in early mode, new
                                    content will be added soon. You can
                                    colaborate here ;)
                                </p>
                            </div>
                            <div
                                id="wrapper"
                                className="Products__hero__container__right overlay yellow"
                            >
                                <img
                                    src="https://media.giphy.com/media/l396NHumGX5UmEA2k/giphy.gif"
                                    alt="Hero"
                                    className="Products__hero__img  "
                                />
                                <h3 className="text">Check it out!</h3>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}
