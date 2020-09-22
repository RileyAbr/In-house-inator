import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import ChakraMarkdown from "./ChakraMarkdown";

import mockMarkdownFile from "../../__mocks__/mockMarkdownFile.js";

const sampleMarkdown = "# Command";

test("Displays sample markdown file", async () => {
    render(<ChakraMarkdown source={mockMarkdownFile} />);

    screen.debug();

    const markdownHeader = screen.getByRole("heading");
    const markdownCommandCode = screen.getByRole("figure");
    const markdownDescription = screen.getByText("Description:");

    expect(markdownHeader).toHaveTextContent("Command");
    expect(markdownCommandCode).toHaveTextContent("!in code block");
    expect(markdownDescription).toBeInDocument();
});

test("Displays no markdown file", () => {
    render(<ChakraMarkdown />);

    const markdownHeaderAbsent = screen.queryByRole("heading");

    expect(markdownHeaderAbsent).toBeNull();
});
