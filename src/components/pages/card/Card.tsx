import {Button} from "../../Button.styled";
import React from "react";
import {Card, CardContent, CardTitle} from "./Card.styled";
import rectangleImg from "../../../assets/images/Rectangle.png";
import {ImageCard} from "../../imageCard/Image.styled";

export function CardWrap() {
    return (

        <Card>
            <ImageCard src={rectangleImg} alt={"Rectangle"}/>
            <CardTitle>Headline</CardTitle>
            <CardContent>Faucibus. Faucibus. Sit sit sapien sit tempusrisu ut. Sit molestie ornare in
                venen.</CardContent>
            <Button primary>See more</Button>
            <Button outlined>Save</Button>
        </Card>
    )
}