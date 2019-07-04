import React, { Component } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import "./style.css";
import Select from "react-select";

const options = [
    { value: "hex", label: "HEX" },
    { value: "rgb", label: "RGB" },
    { value: "rgba", label: "RGBA" }
];

const style = {
    singleValue: base => ({
        ...base,
        color: "#fff"
    }),
    input: base => ({
        ...base,
        color: "#fff"
    }),
    control: (base, state) => ({
        ...base, // 021b35
        background: "#021b35",
        borderRadius: "20px",
        color: "#fff",
        border: state.isFocused ? 0 : 0,
        // This line disable the blue border
        boxShadow: state.isFocused ? 0 : 0,
        "&:hover": {
            border: state.isFocused ? 0 : 0
        }
    })
};

export default class ColorNavbar extends Component {
    constructor(props) {
        super(props);

        this.state = {
            format: "HEX"
        };

        this.onSelectChange = this.onSelectChange.bind(this);
    }

    onSelectChange(selected) {
        this.setState({ format: selected.value }, () => {
            this.props.changeCopyFormat(selected.value);
        });
    }

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
                    <div className="Navbar__slider__container">
                        <span className="Navbar__slider__detail">
                            Contrast: {this.props.level}{" "}
                        </span>
                        <div className="Navbar__slider">
                            <Slider
                                defaultValue={this.props.level}
                                min={100}
                                max={900}
                                step={100}
                                onAfterChange={this.props.changeLevel}
                            />
                        </div>
                    </div>
                    <div className="Navbar__select">
                        <Select
                            onChange={this.onSelectChange}
                            defaultValue={{
                                value: this.state.format,
                                label: this.state.format
                            }}
                            options={options}
                            styles={style}
                            theme={theme => ({
                                ...theme,
                                borderRadius: 0,
                                colors: {
                                    ...theme.colors,
                                    primary25: "#eeeeee",
                                    primary: "#021b35",
                                    color: "white"
                                }
                            })}
                        />
                    </div>
                </div>
            </header>
        );
    }
}
