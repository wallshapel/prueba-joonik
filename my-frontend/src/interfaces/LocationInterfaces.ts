// Defines the structure of a location
export interface Location {
  code: string;
  name: string;
  image: string;
  creationDate: string;
}

// Defines the type of data that the context will provide
export interface LocationContextType {
  locations: Location[];
  error: string | null;
  loading: boolean;
}

// Props for the ListCard component
export interface ListCardProps {
  location: Location;
}
