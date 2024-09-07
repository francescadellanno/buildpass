import React from "react";
import styled from "styled-components";

interface Visitor {
  type: string;
  organization?: string;
  person?: string;
  date: string;
}

interface VisitorSectionProps {
  visitors: Visitor[];
  handleVisitorChange: (
    index: number,
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => void;
  handleAddVisitor: () => void;
  handleRemoveVisitor: (index: number) => void;
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

const VisitorGroup = styled.div`
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

const Select = styled.select`
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

const VisitorSection: React.FC<VisitorSectionProps> = ({
  visitors,
  handleVisitorChange,
  handleAddVisitor,
  handleRemoveVisitor,
}) => (
  <Container>
    <Title>Visitors</Title>
    {visitors.map((visitor, index) => (
      <VisitorGroup key={index}>
        <InputBlock>
          <Label htmlFor={`visitor-type-${index}`}>Type</Label>
          <Select
            id={`visitor-type-${index}`}
            name="type"
            value={visitor.type}
            onChange={(e) => handleVisitorChange(index, e)}
            required
          >
            <option value="">Select Type</option>
            <option value="Site Visit">Site Visit</option>
            <option value="Inspection">Inspection</option>
            <option value="Delivery">Delivery</option>
          </Select>
        </InputBlock>
        <InputBlock>
          <Label htmlFor={`organization-${index}`}>Organization</Label>
          <Input
            type="text"
            id={`organization-${index}`}
            name="organization"
            value={visitor.organization || ""}
            onChange={(e) => handleVisitorChange(index, e)}
          />
        </InputBlock>
        <InputBlock>
          <Label htmlFor={`person-${index}`}>Person</Label>
          <Input
            type="text"
            id={`person-${index}`}
            name="person"
            value={visitor.person || ""}
            onChange={(e) => handleVisitorChange(index, e)}
          />
        </InputBlock>
        <InputBlock>
          <Label htmlFor={`visitor-date-${index}`}>Date</Label>
          <Input
            type="date"
            id={`visitor-date-${index}`}
            name="date"
            value={visitor.date}
            onChange={(e) => handleVisitorChange(index, e)}
            required
          />
        </InputBlock>
        <Button type="button" onClick={() => handleRemoveVisitor(index)}>
          Remove Visitor
        </Button>
      </VisitorGroup>
    ))}
    <Button type="button" onClick={handleAddVisitor}>
      Add Visitor
    </Button>
  </Container>
);

export default VisitorSection;
