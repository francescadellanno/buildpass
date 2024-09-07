import { SiteDiaryEntry } from "./types";

// TODO: Might not need all of these breakpoints
export const breakpoints = {
  desktop: "1200px",
  tablet: "768px",
  mobile: "480px",
};

export const colors = {
  white: "#FFFFFF",
  lightest: "#EEE2DF",
  lighter: "#EED7C5",
  primary: "#C89F9C",
  secondary: "#C97C5D",
  dark: "#B36A5E",
};

// TODO: Go through all unused fields

export const siteDiary: SiteDiaryEntry[] = [
  {
    id: "5",
    date: "2024-09-01",
    title: "Foundation Excavation",
    workProgress:
      "Foundation excavation completed; structural steel erection at 50%.",
    weatherConditions: "Sunny with temperatures between 22°C and 28°C.",
    resources: [
      {
        type: "Laborers",
        description: "20",
      },
      {
        type: "Cranes",
        description: "2",
      },
      {
        type: "Materials",
        description: "Concrete, Steel beams",
      },
      {
        type: "Machinery",
        description: "Excavator, Crane",
      },
    ],
    incidents:
      "Minor delay due to equipment malfunction; resolved within 1 hour.",
    visitors: [
      {
        type: "Inspection",
        organization: "City Building Authority",
        date: "2024-09-01",
      },
      {
        type: "Delivery",
        organization: "Concrete Supplies Co.",
        date: "2024-09-01",
      },
    ],
    instructions:
      "Ensure additional safety barriers are installed around excavation areas.",
  },
  {
    id: "4",
    date: "2024-09-02",
    title: "Concrete Pouring and Rain Delays",
    workProgress:
      "Structural steel installation completed; concrete pouring for floors in progress.",
    weatherConditions: "Overcast with light rain; temperatures around 18°C.",
    resources: [
      {
        type: "Laborers",
        description: "18",
      },
      {
        type: "Cranes",
        description: "3",
      },
      {
        type: "Materials",
        description: "Concrete, Steel reinforcement",
      },
      {
        type: "Machinery",
        description: "Concrete mixer, Crane",
      },
    ],
    incidents: "Heavy rain caused delays; work halted for 2 hours.",
    visitors: [
      { type: "Site Visit", person: "Project Manager", date: "2024-09-02" },
      {
        type: "Inspection",
        organization: "Safety Inspection Team",
        date: "2024-09-02",
      },
    ],
    instructions:
      "Adjust concrete pouring schedule to accommodate weather conditions.",
  },
  {
    id: "3",
    date: "2024-09-03",
    title: "Electrical and Plumbing Installations",
    workProgress:
      "Concrete floors cured; electrical and plumbing rough-ins started.",
    weatherConditions:
      "Partly cloudy with temperatures ranging from 20°C to 25°C.",
    resources: [
      {
        type: "Laborers",
        description: "25",
      },
      {
        type: "Cranes",
        description: "1",
      },
      {
        type: "Materials",
        description: "Electrical wiring, Plumbing pipes",
      },
      {
        type: "Machinery",
        description: "Drill, Pipe bender",
      },
    ],
    incidents: "No incidents reported.",
    visitors: [
      {
        type: "Delivery",
        organization: "Electrical Supplies Ltd.",
        date: "2024-09-03",
      },
      { type: "Site Visit", person: "Electrical Engineer", date: "2024-09-03" },
    ],
    instructions:
      "Coordinate with electrical and plumbing teams to ensure installation compatibility.",
  },
  {
    id: "2",
    date: "2024-09-04",
    title: "Interior Framing and Drywall",
    workProgress:
      "Interior wall framing completed; drywall installation underway.",
    weatherConditions: "Clear skies with temperatures between 23°C and 30°C.",
    resources: [
      {
        type: "Laborers",
        description: "30",
      },
      {
        type: "Cranes",
        description: "1",
      },
      {
        type: "Materials",
        description: "Drywall, Insulation",
      },
      {
        type: "Machinery",
        description: "Framing nailer, Screwdriver",
      },
    ],
    incidents:
      "Minor issue with drywall delivery; resolved by rerouting another shipment.",
    visitors: [
      {
        type: "Inspection",
        organization: "Quality Assurance",
        date: "2024-09-04",
      },
      { type: "Site Visit", person: "Interior Designer", date: "2024-09-04" },
    ],
    instructions:
      "Review interior design changes with the team and adjust framing plans as needed.",
  },
  {
    id: "1",
    date: "2024-09-05",
    title: "Drywall Installation and Inspection",
    workProgress:
      "Interior wall framing completed; drywall installation underway.",
    weatherConditions: "Sunny with temperatures around 25°C.",
    resources: [
      {
        type: "Laborers",
        description: "28",
      },
      {
        type: "Cranes",
        description: "1",
      },
      {
        type: "Materials",
        description: "Drywall, Joint compound",
      },
      {
        type: "Machinery",
        description: "Drywall lift, Utility knife",
      },
    ],
    incidents: "No incidents reported.",
    visitors: [
      {
        type: "Delivery",
        organization: "Drywall Supplies",
        date: "2024-09-05",
      },
      { type: "Site Visit", person: "Building Inspector", date: "2024-09-05" },
    ],
    instructions:
      "Prepare for upcoming inspections by ensuring all framing and drywall work is up to code.",
  },
];
