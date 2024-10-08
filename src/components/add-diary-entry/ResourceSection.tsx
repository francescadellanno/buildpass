import React from "react";
import styled from "styled-components";
import { breakpoints, colors } from "../../constants";

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

const InputGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
    justify-content: space-between;
  }
`;

const Container = styled.div`
  margin: 16px 0;
`;

const Title = styled.h3`
  font-weight: bold;
  color: ${colors.dark};
  font-size: 1.25rem;
  margin-bottom: 12px;
`;

const ResourceGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 16px;
  padding: 12px;
  border: 1px solid ${colors.dark};
  border-radius: 8px;
  background-color: ${colors.lighter};
`;

const InputBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
`;

const Label = styled.label`
  color: ${colors.dark};
  font-size: 1rem;
`;

const Input = styled.input`
  padding: 8px;
  border: 1px solid ${colors.dark};
  border-radius: 4px;
  font-size: 16px;
`;

const Button = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  background-color: ${colors.dark};
  color: white;
  font-size: 16px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${colors.primary};
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
        <InputGroupWrapper>
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
        </InputGroupWrapper>
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
