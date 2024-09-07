import React from "react";
import styled from "styled-components";

interface Resource {
  type: string;
  description: string;
}

interface ResourceSectionProps {
  resources: Resource[];
  handleResourceChange: (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => void;
  handleAddResource: () => void;
  handleRemoveResource: (index: number) => void;
}

const Container = styled.div`
  margin: 16px 0;
`;

const Title = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #333;
  margin-bottom: 12px;
`;

const ResourceGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 16px;
  padding: 12px;
  border: 1px solid #ddd;
  border-radius: 8px;
  background-color: #f9f9f9;
`;

const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

const Label = styled.label`
  font-size: 14px;
  font-weight: 500;
  color: #555;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
  transition: border-color 0.3s;

  &:focus {
    border-color: #007bff;
  }
`;

const Button = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: #007bff;
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }

  & + & {
    margin-left: 8px;
  }
`;

const ResourceSection: React.FC<ResourceSectionProps> = ({
  resources,
  handleResourceChange,
  handleAddResource,
  handleRemoveResource,
}) => (
  <Container>
    <Title>Resources</Title>
    {resources.map((resource, index) => (
      <ResourceGroup key={index}>
        <InputBlock>
          <Label htmlFor={`type-${index}`}>Type</Label>
          <Input
            type="text"
            id={`type-${index}`}
            name="type"
            value={resource.type}
            onChange={(e) => handleResourceChange(index, e)}
            required
          />
        </InputBlock>
        <InputBlock>
          <Label htmlFor={`description-${index}`}>Description</Label>
          <Input
            type="text"
            id={`description-${index}`}
            name="description"
            value={resource.description}
            onChange={(e) => handleResourceChange(index, e)}
            required
          />
        </InputBlock>
        <Button type="button" onClick={() => handleRemoveResource(index)}>
          Remove Resource
        </Button>
      </ResourceGroup>
    ))}
    <Button type="button" onClick={handleAddResource}>
      Add Resource
    </Button>
  </Container>
);

export default ResourceSection;
