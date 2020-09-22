import React from "react";
import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import Content from "./Content";

beforeEach(render(<Content />));

test("Renders no content", async () => {});
