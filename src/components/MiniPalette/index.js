import React from "react";
import styled from "styled-components/macro";

const Title = styled.h5`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: white;
    margin: 0;
    color: black;
    padding-top: 0.5rem;
    font-size: 1rem;
    position: relative;
`;

const Container = styled.div`
    background: white;
    border: 1px solid black;
    border-radius: 5px;
    padding: 0.5rem;
    position: relative;
    overflow: hidden;
    :hover {
        cursor: pointer;
    }
`;

const MiniColor = styled.div`
    width: 25%;
    height: 20%;
    display: inline-block;
    margin: 0 auto;
    position: relative;
    background: ${props => props.color.color};
    margin-bottom: -3.5px;
`;

const ColorsContainer = styled.div`
    background-color: grey;
    height: 150px;
    width: 100%;
`;

const Emoji = styled.span`
    margin-left: 0.5rem;
    font-size: 1.5rem;
`;

export default function MiniPalette(props) {
    const { paletteName, emoji, colors } = props;
    const colorList = colors.map(color => <MiniColor color={color} />);
    return (
        <Container>
            <ColorsContainer>{colorList}</ColorsContainer>
            <Title>
                {paletteName}
                <Emoji>{emoji}</Emoji>
            </Title>
        </Container>
    );
}
