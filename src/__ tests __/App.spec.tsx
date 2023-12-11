// src/__ tests __/App.test.tsx
import { render } from "@testing-library/react";

import App from "../App";

test("Renders the main page", async () => {
  render(<App />)
  expect(true).toBe(true)
})

