import { useContext } from "react";
import { LocationContextType } from "../interfaces/LocationInterfaces";
import LocationContext from "./LocationContext";

// Custom hook for context
const useLocationContext = (): LocationContextType => {
  const context = useContext(LocationContext);
  if (!context)
    throw new Error(
      "useLocationContext must be used within a LocationProvider",
    );
  return context;
};

export default useLocationContext;
