import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("Contact Us Page Test Cases",() => {
    it("Should load Contact us Component", () => {
      render(<Contact />);
      const heading = screen.getByRole("heading");
      //Assertion
      expect(heading).toBeInTheDocument();
    });

    it("Should load button inside Contact Component", () => {
      render(<Contact />);
      const button = screen.getByText("Submit");
      //Assertion
      expect(button).toBeInTheDocument();
    });

    test("Should load input with placeholder inside Contact Component", () => {
      render(<Contact />);
      const inputName = screen.getByPlaceholderText("name");
      //Assertion
      expect(inputName).toBeInTheDocument();
    });

    test("Should load 2 input boxes on the Contact Component", () => {
      render(<Contact />);
      // Query ing
      const inputBoxes = screen.getAllByRole("textbox");
      console.log(inputBoxes.length);
      //Assertion
      expect(inputBoxes.length).not.toBe(1);
    });
  });
