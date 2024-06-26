import styled from "styled-components";

type ImageCardPropsType = {
    src: string;
    alt: string;
}

export const ImageCard = styled.img<ImageCardPropsType>`
    width: 280px;
`