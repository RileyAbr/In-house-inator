import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

const sampleRoutes = [{ route: "/home" }];

test("Displays site logo", async () => {
    render(<Sidebar />);

    const inhouseLogo = screen.getByRole("img");

    expect(inhouseLogo).exists();
});

test("Displays no links when no routes are supplied", async () => {
    render(<Sidebar />);

    const sideBarLinks = screen.getAllByRole("link");

    expect(sideBarLinks.length).toBe(1);
});

test("Displays links from a sample routes object", async () => {
    render(<Sidebar routes={sampleRoutes} />);

    const sideBarLinks = screen.getAllByRole("link");

    expect(sideBarLinks.length).toBe(1 + sampleRoutes.length);
});
