import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import DiaryEntry from "../pages/DiaryEntry";
import useGetDiaryEntryById from "../hooks/useGetDiaryEntryById";
import { MemoryRouter, BrowserRouter as Router } from "react-router-dom";

jest.mock("../hooks/useGetDiaryEntryById");

describe("DiaryEntry Component", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should show loading animation while fetching data", () => {
    (useGetDiaryEntryById as jest.Mock).mockReturnValue({
      diaryEntry: null,
      loading: true,
      error: null,
    });

    render(
      <MemoryRouter>
        <DiaryEntry />
      </MemoryRouter>
    );

    expect(screen.getByText(/Loading diary entry.../i)).toBeInTheDocument();
  });

  it("should show no diary entry message when there is no entry and no error", () => {
    (useGetDiaryEntryById as jest.Mock).mockReturnValue({
      diaryEntry: null,
      loading: false,
      error: null,
    });

    render(
      <MemoryRouter>
        <DiaryEntry />
      </MemoryRouter>
    );

    expect(
      screen.getByText(
        /Uh oh! It looks like the diary entry you were looking for doesn't exist./i
      )
    ).toBeInTheDocument();
  });

  it("should display the diary entry card when a diary entry exists", () => {
    (useGetDiaryEntryById as jest.Mock).mockReturnValue({
      diaryEntry: { title: "Test Diary Entry Title" },
      loading: false,
      error: null,
    });

    render(
      <Router>
        <DiaryEntry />
      </Router>
    );

    expect(screen.getByText(/Test Diary Entry Title/i)).toBeInTheDocument();
  });

  it("should display an error message when there is an error", () => {
    (useGetDiaryEntryById as jest.Mock).mockReturnValue({
      diaryEntry: null,
      loading: false,
      error: new Error("Test error"),
    });

    render(
      <Router>
        <DiaryEntry />
      </Router>
    );

    expect(
      screen.getByText(
        /Oops! We couldn't load your diary entry at the moment./i
      )
    ).toBeInTheDocument();
    expect(
      screen.getByText(/Please try refreshing the page or check back later./i)
    ).toBeInTheDocument();
  });
});
