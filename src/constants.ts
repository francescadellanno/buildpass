import { SiteDiaryEntry } from "./types";

export const colors = {
  white: "#FFFFFF",
  lightest: "#EEE2DF",
  lighter: "#EED7C5",
  primary: "#C89F9C",
  secondary: "#C97C5D",
  dark: "#B36A5E",
};

export const siteDiary: SiteDiaryEntry[] = [
  {
    id: "5",
    date: "2024-09-01",
    title: "Foundation Excavation",
    workProgress:
      "Foundation excavation completed; structural steel erection at 50%.",
    weatherConditions: "Sunny with temperatures between 22°C and 28°C.",
    resources: {
      laborers: 20,
      cranes: 2,
      materials: ["Concrete", "Steel beams"],
      machinery: ["Excavator", "Crane"],
    },
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
    resources: {
      laborers: 18,
      cranes: 3,
      materials: ["Concrete", "Steel reinforcement"],
      machinery: ["Concrete mixer", "Crane"],
    },
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
    resources: {
      laborers: 25,
      cranes: 1,
      materials: ["Electrical wiring", "Plumbing pipes"],
      machinery: ["Drill", "Pipe bender"],
    },
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
    resources: {
      laborers: 30,
      cranes: 1,
      materials: ["Drywall", "Insulation"],
      machinery: ["Framing nailer", "Screwdriver"],
    },
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
    resources: {
      laborers: 28,
      cranes: 1,
      materials: ["Drywall", "Joint compound"],
      machinery: ["Drywall lift", "Utility knife"],
    },
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
