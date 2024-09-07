import React from "react";
import styled from "styled-components";
import { colors } from "../../constants";

interface ImageUploadProps {
  handleImageUpload: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-bottom: 16px;
`;

const Label = styled.label`
  font-weight: bold;
  color: ${colors.dark};
  font-size: 1.25rem;
`;

const Input = styled.input`
  color: ${colors.dark};
  padding: 8px;
  border: 1px solid ${colors.dark};
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;
`;

const ImageUpload: React.FC<ImageUploadProps> = ({ handleImageUpload }) => (
  <Container>
    <Label htmlFor="imageUpload">Upload Image</Label>
    <Input
      type="file"
      id="imageUpload"
      accept="image/*"
      onChange={handleImageUpload}
    />
  </Container>
);

export default ImageUpload;
