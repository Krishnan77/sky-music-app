import React from "react";
import { render, screen } from "@testing-library/react";
import Favorite from "./Favorite";

describe("Favorite Component", () => {
  it("rendered Favorite Section", () => {
    const { getByTestId } = render(<Favorite  />);
    const input = getByTestId("favorite-section");
    expect(input).toBeTruthy();
  });
});