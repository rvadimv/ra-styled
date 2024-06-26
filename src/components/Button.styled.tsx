import styled, {css} from "styled-components";

type ButtonPropsType = {
    color?: string
    fontSize?: string
    primary?: boolean
    outlined?: boolean
}

export const Button = styled.button<ButtonPropsType>`
    width: 86px;
    height: 30px;
    border: none;
    //padding: 10px 20px;
    border-radius: 5px;
    font-size: ${props => props.fontSize || "10px"};
    font-weight: bold;
    background-color: transparent;

    cursor: pointer;

    


    

    ${props => props.outlined && css<ButtonPropsType>`
        //outlined

        border: 2px solid ${props => props.color || "#4E71FE"};
        color: ${props => props.color || "#4E71FE"};
        background-color: transparent;

        /*&:hover {
            border-color: #c37fe4;
            color: #c37fe4;
            background-color: transparent;
        }*/
    `
    }

    ${props => props.primary && css<ButtonPropsType>`
        //primary
        background-color: ${props => props.color || "#4E71FE"};
        color: #fff;

        /*&:hover {
            background-color: #c37fe4;
        }*/
    `}


`



