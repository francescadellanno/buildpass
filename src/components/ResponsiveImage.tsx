import React from "react";
import styled from "styled-components";

const ImageWrapper = styled.div`
  width: 100%;
  max-width: 600px;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
`;

const ResponsiveImage: React.FC<{ imagePath: string }> = ({ imagePath }) => {
  return (
    <ImageWrapper>
      <Image src={imagePath} alt="image-from-construction-site" />
    </ImageWrapper>
  );
};

export default ResponsiveImage;
