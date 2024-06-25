import React from 'react';
import { StyledImage } from './ImageContainer.styled';
import RectangleImage from '../../Rectangle.png';  // Импорт изображения

const ImageContainer: React.FC = () => {
    return <StyledImage src={RectangleImage} alt="Rectangle" />;
};

export default ImageContainer;
