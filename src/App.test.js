import { render, screen } from "@testing-library/react";
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { routes } from "./App";

const renderAt = (path) =>
  render(
    <RouterProvider
      router={createMemoryRouter(routes, { initialEntries: [path] })}
    />
  );

beforeAll(() => {
  window.scrollTo = jest.fn();
});

test("renders the home page hero", () => {
  renderAt("/");
  expect(
    screen.getByRole("heading", { level: 1, name: /bhavesh wagh/i })
  ).toBeInTheDocument();
});

test("renders all projects", () => {
  renderAt("/project");
  expect(screen.getByText("Movie Recommendation App")).toBeInTheDocument();
  expect(screen.getAllByText(/view source/i)).toHaveLength(4);
});

test("renders the about page", () => {
  renderAt("/about");
  expect(screen.getByText(/what i bring/i)).toBeInTheDocument();
});

test("renders contact details", () => {
  renderAt("/contact");
  expect(screen.getByText("bhaveshbm2711@gmail.com")).toBeInTheDocument();
});
