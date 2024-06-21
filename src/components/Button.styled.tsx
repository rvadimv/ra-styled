import styled from "styled-components";

type StyledBtnPropsType = {
    color?: string
    fontSize?: string
}

export const StyleBtn = styled.button<StyledBtnPropsType>`
    border: none;
    /*background-color: blueviolet;*/
    padding: 10px 20px;
    border-radius: 5px;
    color: aliceblue;
    /*font-size: 2rem;*/
    font-size: ${props => props.fontSize};
    font-weight: bold;
    background-color: ${props => props.color || "blueviolet"};

    &:hover {
        background-color: brown;
    }

    /*&:last-child {
        background-color: darkslateblue;
    }*/
`

/*export const SuperBtn = styled(StyleBtn)`
    background: aqua;
    color: #363434;

    &:hover{
        animation: ${MyAnimation} 2s infinite ease-in-out;
    }

`*/
