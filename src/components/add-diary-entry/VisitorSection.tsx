import React from "react";
import styled from "styled-components";
import { breakpoints, colors } from "../../constants";

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
  font-weight: bold;
  color: ${colors.dark};
  font-size: 1.25rem;
  margin-bottom: 12px;
`;

const VisitorGroup = styled.div`
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
  box-sizing: border-box; /* Ensure consistent sizing */
`;

const Label = styled.label`
  color: ${colors.dark};
  font-size: 1rem;
`;

const Input = styled.input`
  color: ${colors.dark};
  padding: 8px;
  border: 1px solid ${colors.dark};
  border-radius: 4px;
  font-size: 1rem;
`;

const DateInput = styled.input`
  color: ${colors.dark};
  padding: 7px;
  border: 1px solid ${colors.dark};
  border-radius: 4px;
  font-size: 1rem;
`;

const Select = styled.select`
  color: ${colors.dark};
  padding: 7px 12px;
  border: 1px solid ${colors.dark};
  border-radius: 4px;
  font-size: 1rem;
  transition: border-color 0.3s;
  outline: none;

  &:focus {
    border-color: blue;
  }
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

const InputGroupWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;

  @media (min-width: ${breakpoints.tablet}) {
    flex-direction: row;
    justify-content: space-between;
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
        <InputGroupWrapper>
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
            <Label htmlFor={`visitor-date-${index}`}>Date</Label>
            <DateInput
              type="date"
              id={`visitor-date-${index}`}
              name="date"
              value={visitor.date}
              onChange={(e) => handleVisitorChange(index, e)}
              required
            />
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
        </InputGroupWrapper>
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
