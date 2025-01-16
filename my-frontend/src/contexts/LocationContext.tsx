import React, { createContext, useState, useEffect } from "react";
import { getLocations } from "../api/locations";
import {
  Location,
  LocationContextType,
} from "../interfaces/LocationInterfaces";

// We create the context
const LocationContext = createContext<LocationContextType | undefined>(
  undefined,
);

// Context provider
export const LocationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [locations, setLocations] = useState<Location[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        await new Promise((resolve) => setTimeout(resolve, 1000));
        const data = await getLocations();
        setLocations(data);
      } catch (err: unknown) {
        if (err instanceof Error) setError(err.message);
        else setError("An unknown error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchLocations();
  }, []);

  return (
    <LocationContext.Provider value={{ locations, error, loading }}>
      {children}
    </LocationContext.Provider>
  );
};

export default LocationContext;
