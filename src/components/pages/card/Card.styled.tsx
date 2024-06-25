import styled from "styled-components";

export const WrapCard = styled.div`
    width: 300px;
    height: 350px;
    background-color: #fff;
    box-shadow: 0 4px 20px 5px rgba(0, 0, 0, 0.1);
    border-radius: 15px;
    margin: 0 10px;
    
    h1{
        margin: 20px 0 0 20px;
        font-size: 16px;
    }
    p{
        margin: 20px 20px 0 20px;
        font-size: 12px;
        color: #ABB3BA;
    }
    button{
        margin: 20px 0 0 20px;
    }
    
    button:last-child{
        margin-left: 10px;
    }
`;