interface FilterDetails {
  isFiltered: boolean;
  show: string;
  hide: string;
  onFilter: () => void;
}

interface Material {
  id: string;
  name: string;
  source: string | null;
  activities: Activity[];
}

interface Activity {
  id: string;
  name: string;
  category: string | null;
}
