import { fireEvent, render,screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"
test("should render the header component with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const loginButton=screen.getByRole("button",{name:"Login"})
  expect(loginButton).toBeInTheDocument();

});
test("should render the header component with cart items 0", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
    const cartItem=screen.getByText("Cart(0 items)")
    expect(cartItem).toBeInTheDocument();
  
  });
  test("should render the header component with cart items ", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
    const cartItem=screen.getByText(/Cart/)
    expect(cartItem).toBeInTheDocument();
  
  });
  test("should change the Login button  to logout onclick", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
  
    const loginButton=screen.getByRole("button",{name:"Login"})
    fireEvent.click(loginButton)
    const logout=screen.getByRole("button",{name:"Logout"})
    expect(logout).toBeInTheDocument();
  });


