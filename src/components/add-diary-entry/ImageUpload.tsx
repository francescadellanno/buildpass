import React from "react";
import styled from "styled-components";

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
  font-weight: 600;
  color: #333;
  font-size: 14px;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  transition: border-color 0.3s;
  cursor: pointer;

  &:focus {
    border-color: #007bff;
  }
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
