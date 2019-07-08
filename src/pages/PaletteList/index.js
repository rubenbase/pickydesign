import React, { Component } from "react";
import Navbar from "components/Navbar";
import { Link } from "react-router-dom";
import MiniPalette from "components/MiniPalette";
import styled from "styled-components/macro";

const StyledPaleteList = styled.div`
    height: 100%;
    display: flex;
    align-items: flex-start;
    justify-content: center;
`;

const Container = styled.div`
    width: 50%;
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    flex-wrap: wrap;
`;

const Nav = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    color: white;
`;

const Palettes = styled.div`
    box-sizing: border-box;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(3, 30%);
    grid-gap: 5%;
`;

export default class PaleteList extends Component {
    renderList() {
        return this.props.palettes.map(palette => {
            return (
                <Palettes>
                    <Link to={`/palettes/${palette.id}`}>
                        <MiniPalette {...palette} />
                    </Link>
                </Palettes>
            );
        });
    }

    render() {
        return (
            <>
                <Navbar />
                <StyledPaleteList>
                    <Container>
                        <Nav>
                            <h1>Color Section</h1>
                        </Nav>

                        {this.renderList()}
                    </Container>
                </StyledPaleteList>
            </>
        );
    }
}
