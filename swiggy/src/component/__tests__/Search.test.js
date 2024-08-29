import { render, screen , fireEvent} from "@testing-library/react"
import Body from "./../Body"
import { BrowserRouter } from "react-router-dom"
import { act } from "react";
import "@testing-library/jest-dom";
import rawApiData from "../utility/rawApiData";



global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      console.log("inside global fetch");
      
      return Promise.resolve(rawApiData);
    }
  })
});


test("Rendering body AND searching...", async () => {

 await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    )
  });


  // const search = screen.getByRole("button", {name : "Search"});

  // expect(search).toBeInTheDocument()


  // ---------------------------------------------

 //COUNTING CARDS BEFORE GIVING INPUTS

  const noCardBefore = screen.getAllByTestId("card");
  expect(noCardBefore.length).toBe(25);


  const inputBar = screen.getByTestId("searchInput");
  console.log(inputBar);
  

  expect(inputBar).toBeInTheDocument();

  fireEvent.change(inputBar, {target :{ value : "cafe" }})

  const noCard = screen.getAllByTestId("card");
  expect(noCard.length).toBe(2);








})