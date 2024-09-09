import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { MemoryRouter, BrowserRouter as Router } from "react-router-dom";
import DiaryEntries from "./DiaryEntries";
import useGetAllDiaryEntries from "../hooks/useGetAllDiaryEntries";
import "@testing-library/jest-dom";

// Mock the custom hook
jest.mock("../hooks/useGetAllDiaryEntries", () => ({
  __esModule: true,
  default: jest.fn(),
}));

const mockUseGetAllDiaryEntries = useGetAllDiaryEntries as jest.MockedFunction<
  typeof useGetAllDiaryEntries
>;

describe("DiaryEntries", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should display loading animation while data is being fetched", () => {
    mockUseGetAllDiaryEntries.mockReturnValue({
      diaryEntries: [],
      loading: true,
      error: null,
    });

    render(
      <MemoryRouter>
        <DiaryEntries />
      </MemoryRouter>
    );

    expect(screen.getByText(/Loading diary entries.../i)).toBeInTheDocument();
  });

  it("should display diary entries when data is loaded", async () => {
    mockUseGetAllDiaryEntries.mockReturnValue({
      diaryEntries: [
        {
          id: "1",
          title: "Entry 1",
          date: "2023-04-20",
          description: "Test description",
          weather: "Sunny",
          resources: [],
          incidents: "",
          visitors: [],
          instructions: "",
          imagePath: "",
        },
        {
          id: "2",
          title: "Entry 2",
          date: "2023-04-21",
          description: "Another test",
          weather: "Cloudy",
          resources: [],
          incidents: "",
          visitors: [],
          instructions: "",
          imagePath: "",
        },
      ],
      loading: false,
      error: null,
    });

    render(
      <Router>
        <DiaryEntries />
      </Router>
    );

    expect(await screen.findByText("Your Diary Entries")).toBeInTheDocument();
    expect(screen.getByText("Entry 1")).toBeInTheDocument();
    expect(screen.getByText("Entry 2")).toBeInTheDocument();
  });

  it("should display a message when there are no diary entries and not loading", async () => {
    mockUseGetAllDiaryEntries.mockReturnValue({
      diaryEntries: [],
      loading: false,
      error: null,
    });

    render(
      <Router>
        <DiaryEntries />
      </Router>
    );

    expect(
      await screen.findByText("No diary entries yet, why not add one?")
    ).toBeInTheDocument();
  });

  it("should display an error message when there is an error", async () => {
    mockUseGetAllDiaryEntries.mockReturnValue({
      diaryEntries: [],
      loading: false,
      error: new Error("Test error"),
    });

    render(
      <Router>
        <DiaryEntries />
      </Router>
    );

    expect(
      await screen.findByText(
        "Oops! We couldn't load your diary entries at the moment."
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText("Please try refreshing the page or check back later.")
    ).toBeInTheDocument();
  });
});
