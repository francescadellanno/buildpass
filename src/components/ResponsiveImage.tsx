import React from "react";
import styled from "styled-components";

// Styled component for responsive image container
const ImageWrapper = styled.div`
  width: 100%;
  max-width: 600px;
`;

// Styled component for the image itself
const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;
// TODO: Remove all console logs
const ResponsiveImage: React.FC<{ imagePath: string }> = ({ imagePath }) => {
  console.log("imageUrl", imagePath);
  return (
    <ImageWrapper>
      <Image src={imagePath} alt="image-from-construction-site" />
    </ImageWrapper>
  );
};

export default ResponsiveImage;
