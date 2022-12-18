import React from "react";
import { render, screen } from "@testing-library/react";
import Categoryfilter from "./Categoryfilter";

describe("Category filter Component", () => {
  it("rendered Category filter Section", () => {
    const { getByTestId } = render(<Categoryfilter />);
    const input = getByTestId("category-section");
    expect(input).toBeTruthy();
  });
});
