import React from 'react';
import { StyledImage } from './ImageContainer.styled';
import RectangleImage from '../../Rectangle.png';  // Импорт изображения

function ImageContainer() {
    return <StyledImage src={RectangleImage} alt="Rectangle" />;
}

export default ImageContainer;
