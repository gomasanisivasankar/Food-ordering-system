import { render, screen } from "@testing-library/react";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "../../components/mocks/resCardMock.json";
import "@testing-library/jest-dom";

test("should render restaurant card component with props data", () => {
    
    const restaurantInfo =
        MOCK_DATA.data.cards[2].card.card; 

    render(<RestaurantCard resData={restaurantInfo} />);

    const name = screen.getByText("Hong Kong Express");
    expect(name).toBeInTheDocument();
});
