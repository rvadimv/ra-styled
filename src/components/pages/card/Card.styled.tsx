import styled from "styled-components";




export const Card = styled.div`
    width: 300px;
    background-color: #fff;
    box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    padding: 10px;

    button{
        margin: 20px 0px 10px 20px;
    }
    button + button{
        margin-left: 10px;
    }
`;

export const CardTitle = styled.h3`
    margin: 20px 0 0 20px;
    font-size: 16px;
`
export const CardContent = styled.div`
    margin: 20px 20px 0 20px;
    font-size: 12px;
    color: #ABB3BA;
`