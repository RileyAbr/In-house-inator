import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

beforeAll(() => render(<Credits />));

test("Displays Credits links", async () => {
    const creditsLinks = screen.getAllByRole("link");

    expect(creditsLinks[0]).toHaveTextContent("GitHub");
    expect(creditsLinks[0]).toHaveAttribute(
        "href",
        "https://github.com/RileyAbr/In-house-inator"
    );
    expect(creditsLinks[1]).toHaveTextContent("Riley Abrahamson");
    expect(creditsLinks[1]).toHaveAttribute(
        "href",
        "https://www.rileyabrahamson.com/"
    );
});
