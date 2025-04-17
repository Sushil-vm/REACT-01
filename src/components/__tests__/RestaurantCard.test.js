import { render, screen } from "@testing-library/react";
import RestaurantCard, { withPromotedLabel } from "../RestaurantCard";
import MOCK_DATA from "../mocks/resCardMock.json";
import "@testing-library/jest-dom";

it("should render RestuarantCard Component with props Data", () => {
  render(<RestaurantCard resData={MOCK_DATA} />);

  const resName = screen.getByText("KFC");
  expect(resName).toBeInTheDocument();
});

it("should render RestaurantCard Component With Promoted Label", () => {
  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  render(<RestaurantCardPromoted resData={MOCK_DATA} />);
  const resName = screen.getByText("Promoted");
  expect(resName).toBeInTheDocument();
});
