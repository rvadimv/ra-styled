import styled, {css} from "styled-components";

type StyledBtnPropsType = {
    color?: string
    fontSize?: string
    primary?: boolean
    outlined?: boolean
}

export const StyleBtn = styled.button<StyledBtnPropsType>`
    border: none;
    padding: 10px 20px;
    border-radius: 10px;
    font-size: ${props => props.fontSize || "2rem"};
    font-weight: bold;
    background-color: transparent;


    

    ${props => props.outlined && css<StyledBtnPropsType>`
        //outlined

        border: 2px solid ${props => props.color || "blueviolet"};
        color: ${props => props.color || "blueviolet"};
        background-color: transparent;

        &:hover {
            border-color: #c37fe4;
            color: #c37fe4;
            background-color: transparent;
        }
    `
    }

    ${props => props.primary && css<StyledBtnPropsType>`
        //primary
        background-color: ${props => props.color || "blueviolet"};
        color: moccasin;

        &:hover {
            background-color: #c37fe4;
        }
    `}


`



