import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import {
  MemoryRouter,
  Route,
  BrowserRouter as Router,
  Routes,
} from "react-router-dom";
import Home from "./Home";
import "@testing-library/jest-dom";
import DiaryEntries from "./DiaryEntries";

describe("Home Component", () => {
  it("should display the heading text", () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    expect(
      screen.getByText(/Your Construction Site Diary/i)
    ).toBeInTheDocument();
  });

  it('should display the "GET STARTED" link', () => {
    render(
      <MemoryRouter>
        <Home />
      </MemoryRouter>
    );
    expect(screen.getByText(/GET STARTED/i)).toBeInTheDocument();
  });

  it('should navigate to /diary-entries when clicking on "GET STARTED"', () => {
    render(
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/diary-entries" element={<DiaryEntries />} />
        </Routes>
      </Router>
    );

    fireEvent.click(screen.getByText(/GET STARTED/i));
    expect(screen.getByText(/Your Diary Entries/i)).toBeInTheDocument();
  });
});
