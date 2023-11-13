import { render, screen } from "@testing-library/react"
import App from "./App"

test("todo app text", () => {
  render(<App />)
  const textElement = screen.getByText(/todo app/i)
  expect(textElement).toBeInTheDocument()
})
