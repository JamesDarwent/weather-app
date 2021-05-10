import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../../components/App";

test("renders learn react link", () => {
  const validProps = {
    forecasts: [
      {
        date: 111111,
        description: "Windy",
        icon: "600",
        temperature: {
          min: 2,
          max: 17,
        },
      },

      {
        date: 222222,
        description: "Rainy",
        icon: "800",
        temperature: {
          min: 4,
          max: 22,
        },
      },
    ],
    location: {
      city: "Liverpool",
      country: "UK",
    },
  };
  render(
    <App forecasts={validProps.forecasts} location={validProps.location} />
  );
  const linkElement = screen.getByText(/Liverpool, UK/i);
  expect(linkElement).toBeInTheDocument();
});
