import React from "react";
import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import AddDiaryEntry from "./AddDiaryEntry"; // Adjust the import path as necessary
import useSiteDiaryForm from "../hooks/useSiteDiaryForm"; // Adjust the import path as necessary
import { MemoryRouter } from "react-router-dom";

// Mock the useSiteDiaryForm hook
jest.mock("../hooks/useSiteDiaryForm", () => ({
  __esModule: true,
  default: jest.fn(() => ({
    title: "",
    setTitle: jest.fn(),
    date: "2024-01-01",
    setDate: jest.fn(),
    description: "",
    setDescription: jest.fn(),
    weather: "",
    setWeatherConditions: jest.fn(),
    handleImageUpload: jest.fn(),
    instructions: "",
    setInstructions: jest.fn(),
    incidents: "",
    setIncidents: jest.fn(),
    resources: [],
    handleResourceChange: jest.fn(),
    handleAddResource: jest.fn(),
    handleRemoveResource: jest.fn(),
    visitors: [],
    handleVisitorChange: jest.fn(),
    handleAddVisitor: jest.fn(),
    handleRemoveVisitor: jest.fn(),
    loading: false,
    successMessage: "",
    errorMessage: "",
    handleSubmit: jest.fn(),
    showForm: true,
    uniqueId: null,
  })),
}));

test("should update date when a new date is selected", async () => {
  // Render the AddDiaryEntry component
  render(
    <MemoryRouter>
      <AddDiaryEntry />
    </MemoryRouter>
  );

  // Find the date input element
  const dateInput = screen.getByLabelText(/Date/i) as HTMLInputElement;
  // Simulate user input
  //   userEvent.clear(dateInput); // Clear the existing value
  //   userEvent.clear(dateInput);
  fireEvent.change(dateInput, { target: { value: "2024-12-31" } });
  userEvent.type(dateInput, "2009-12-31");
  // Wait for the value to be updated
  await waitFor(() => {
    expect(dateInput.value).toBe("2024-12-31");
  });
});
