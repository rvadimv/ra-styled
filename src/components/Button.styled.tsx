import styled from "styled-components";

export const StyleBtn = styled.button`
    border: none;
    background-color: blueviolet;
    padding: 10px 20px;
    border-radius: 5px;
    color: aliceblue;
    font-size: 2rem;
    font-weight: bold;

    &:hover {
        background-color: brown;
    }

    &:last-child {
        background-color: darkslateblue;
    }
`

export const SuperBtn = styled(StyleBtn)`
    background: aqua;
    color: #363434;
`