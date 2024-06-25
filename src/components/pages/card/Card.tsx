import {ImgContainer} from "../../ImageContainer/ImageContainer.styled";
import rectangleImg from "../../../Rectangle.png";
import {StyleBtn} from "../../Button.styled";
import React from "react";
import {WrapCard} from "./Card.styled";

export function WrapCards (){
    return(

        <WrapCard>
            <ImgContainer>
                <img src={rectangleImg} alt="Rectangle"/>
            </ImgContainer>
            <h1>Headline</h1>
            <p>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in venen.</p>
            <StyleBtn primary>See more</StyleBtn>
            <StyleBtn outlined>Save</StyleBtn>
        </WrapCard>
    )
}
