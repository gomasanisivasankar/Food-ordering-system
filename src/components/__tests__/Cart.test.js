import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react";
import RestaurantMenu from "../RestaurantMenu";
import MOCK_DATA_NAME from "../mocks/mockResMenu.json";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Header from "../Header";

global.fetch = jest.fn((...args) => {
    console.log("FETCH CALLED WITH:", args);   // Debug
    return Promise.resolve({
      json: () => Promise.resolve(MOCK_DATA_NAME),
    });
  });
  
test("should load Restaurant Menu Component", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
            <RestaurantMenu />
          </Provider>
        </BrowserRouter>
      )
    );
        const AccodionHeader=screen.getByText("Rice (8)")

  });
  
  
