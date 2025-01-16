import { render, screen } from "@testing-library/react";
import ListCard from "./ListCard";
import { ListCardProps } from "../../interfaces/LocationInterfaces";

describe("ListCard Component", () => {
  const mockLocation: ListCardProps["location"] = {
    code: "001",
    name: "Estadio Nacional",
    image: "https://images.pexels.com/photos/2291073/pexels-photo-2291073.jpeg",
    creationDate: "2022-01-15",
  };

  it("renders the component with the correct data", () => {
    render(<ListCard location={mockLocation} />);

    // Verificar que el nombre se muestra
    expect(screen.getByText("Estadio Nacional")).toBeInTheDocument();

    // Verificar que el código se muestra
    expect(screen.getByText("Code: 001")).toBeInTheDocument();

    // Verificar que la fecha formateada se muestra
    expect(screen.getByText("Created on: Jan 15, 2022")).toBeInTheDocument();



    // Verificar que la imagen se muestra con el atributo correcto
    const image = screen.getByRole("img");
    expect(image).toHaveAttribute(
      "src",
      "https://images.pexels.com/photos/2291073/pexels-photo-2291073.jpeg"
    );
    expect(image).toHaveAttribute("alt", "Estadio Nacional");
  });
});
