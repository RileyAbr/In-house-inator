import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import App from "./App";

const sampleCommands = ["commandA", "commandB"];

test("Root renders", async () => {
    render(
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );

    const appContainer = screen.getByTestId("app-container");

    expect(appContainer).toBeInTheDocument();
});
