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

const ResponsiveImage: React.FC<{ imageUrl: string }> = ({ imageUrl }) => {
  console.log("imageUrl", imageUrl);
  return (
    <ImageWrapper>
      <Image src={imageUrl} alt="image-from-construction-site" />
    </ImageWrapper>
  );
};

export default ResponsiveImage;
