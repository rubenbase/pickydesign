import React, { Component } from "react";
import { Link } from "react-router-dom";
import img1 from "assets/img/palette.jpg";
import img2 from "assets/img/lock.jpg";
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
                                        marginLeft: 200,
                                        marginTop: -45,
                                        marginBottom: -5,
                                        fontSize: "80px",
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
                                    content will be added soon :) <br />
                                    <br />
                                    <i
                                        style={{}}
                                        className="fas fa-arrow-right animated bounce"
                                    />{" "}
                                    <a
                                        style={{
                                            textDecoration: "underline",
                                            color: "white"
                                        }}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        href="https://github.com/rubenbase/pickydesign"
                                    >
                                        You can colaborate here
                                    </a>
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
                                <h3 className="text">Check it!</h3>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="Product__section">
                    <div>
                        <Link class="Product__box__link" to="/palettes">
                            <div class="Product__box img-gradient-blue">
                                <img
                                    alt=""
                                    src={img1}
                                    width="400"
                                    height="200"
                                />
                                <h2 className="Product__box__title">Colors</h2>
                            </div>
                        </Link>
                        {/* <div class="Product__box img-gradient-pink">
                            <img alt="" src={img2} width="400" height="200" />
                            <h2 className="Product__box__title">Shadows</h2>
                        </div>
                        <div class="Product__box img-gradient-green">
                            <img alt="" src={img2} width="400" height="200" />
                            <h2 className="Product__box__title">Learn</h2>
                        </div> */}
                    </div>
                </div>
            </section>
        );
    }
}
