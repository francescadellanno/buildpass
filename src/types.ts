interface Visitor {
  type: string;
  organization?: string;
  person?: string;
  date: string;
}

interface Resources {
  laborers?: number;
  cranes?: number;
  materials?: string[];
  machinery?: string[];
}

export interface SiteDiaryEntry {
  id: string;
  date: string;
  title: string;
  workProgress: string;
  weatherConditions: string;
  resources: Resources;
  incidents: string;
  visitors: Visitor[];
  instructions: string;
}
