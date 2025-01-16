import { render, screen } from "@testing-library/react";
import ListContainer from "./ListContainer";
import useLocationContext from "../../contexts/useLocationContext";

// Mock del contexto
jest.mock("../../contexts/useLocationContext");

const mockUseLocationContext = useLocationContext as jest.Mock;

describe("ListContainer Component", () => {
  it("renders loading state", () => {
    mockUseLocationContext.mockReturnValue({
      locations: [],
      error: null,
      loading: true,
    });

    render(<ListContainer />);

    // Verifica que el estado de carga se renderiza
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
  });

  it("renders error state", () => {
    mockUseLocationContext.mockReturnValue({
      locations: [],
      error: "Failed to fetch data",
      loading: false,
    });

    render(<ListContainer />);

    // Verifica que el mensaje de error se muestra
    expect(screen.getByText(/Error: Failed to fetch data/i)).toBeInTheDocument();
  });

  it("renders the list of locations", () => {
    const mockLocations = [
      {
        code: "001",
        name: "Estadio Nacional",
        image: "https://images.pexels.com/photos/2291073/pexels-photo-2291073.jpeg",
        creationDate: "2022-01-15",
      },
      {
        code: "002",
        name: "Edificio Central",
        image: "https://images.pexels.com/photos/1650904/pexels-photo-1650904.jpeg",
        creationDate: "2021-05-20",
      },
    ];

    mockUseLocationContext.mockReturnValue({
      locations: mockLocations,
      error: null,
      loading: false,
    });

    render(<ListContainer />);

    // Verifica que se renderizan los nombres de las ubicaciones
    expect(screen.getByText("Estadio Nacional")).toBeInTheDocument();
    expect(screen.getByText("Edificio Central")).toBeInTheDocument();

    // Verifica que el número correcto de tarjetas se renderiza
    expect(screen.getAllByRole("img")).toHaveLength(mockLocations.length);
  });
});
