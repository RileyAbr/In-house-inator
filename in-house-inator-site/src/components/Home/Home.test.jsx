import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Home from "./Home";

test("Displays site banner text", async () => {
    render(<Home />);

    const homeBanner = screen.getByRole("heading");

    expect(homeBanner).toHaveTextContent("In-house-inator");
});
test("Display add to server button", async () => {
    render(<Home />);

    const serverButton = screen.getByRole("link");

    expect(serverButton).toHaveTextContent("Invite to Your Server");
});
