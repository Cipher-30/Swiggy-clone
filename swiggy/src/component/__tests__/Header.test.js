import { render, screen } from "@testing-library/react"
import Header from "../Header"
import { Provider } from "react-redux";
import appStore from "../utility/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom"


test("testing header component", () =>
{
    render(
        <BrowserRouter>
       <Provider store={appStore}>
          <Header/>
       </Provider>
       </BrowserRouter>
    );

    const cart = screen.getByText('Cart (0)');

    //regex for approximation
    // const cart = screen.getByText(/Cart/);

    expect(cart).toBeInTheDocument();

})