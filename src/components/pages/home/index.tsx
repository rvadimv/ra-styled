import { StyleBtn } from "../../Button.styled";
import React from "react";
import styled from "styled-components";
import rectangleImg from "../../../Rectangle.png";

const HomePage: React.FC = () => (
    <Box>
        <WrapCard>
            <ImgContainer>
                <img src={rectangleImg} alt="Rectangle"/>
            </ImgContainer>
            <h1>Headline</h1>
            <p>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</p>
            <StyleBtn primary>See more</StyleBtn>
            <StyleBtn outlined>Save</StyleBtn>
        </WrapCard>
    </Box>
);

export default HomePage;

const Box = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
    align-items: center;

    button {
        cursor: pointer;
    }
`;

const WrapCard = styled.div`
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

const ImgContainer = styled.div`
    width: 280px;
    height: 170px;
    border-radius: 10px;
    background: moccasin;
    margin: 10px 10px 0 10px;

    img {
        width: 100%;
        height: 100%;
        border-radius: 10px;
        object-fit: cover;
    }
`;
