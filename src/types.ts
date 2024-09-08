interface Visitor {
  type: string;
  organization?: string;
  person?: string;
  date: string;
}

interface Resources {
  type: string;
  description: string;
}

export interface SiteDiaryEntry {
  id: string;
  date: string | null;
  title: string | null;
  description: string | null;
  weather: string | null;
  resources: Resources[] | null;
  incidents: string | null;
  visitors: Visitor[] | null;
  instructions: string | null;
  imagePath: string | null;
}
