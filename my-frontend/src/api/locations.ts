import axiosClient from "./axiosClient";
import { AxiosError } from "axios";

// Function to get the locations
export const getLocations = async () => {
  try {
    const response = await axiosClient.get("/locations");
    return response.data; // Returns the data from the backend
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      console.error(
        "Error fetching locations:",
        error.response?.data || error.message,
      );
      throw new Error(
        error.response?.data?.message || "Failed to fetch locations",
      );
    } else {
      console.error("An unknown error occurred:", error);
      throw new Error("An unknown error occurred");
    }
  }
};
