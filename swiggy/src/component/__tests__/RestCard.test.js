import { render, screen} from "@testing-library/react";
import Card from "../Card";
import{data} from "./../utility/mockData/cardMockData"
import "@testing-library/jest-dom";


test( "testing for restCard " , () =>
{
   render(<Card detail={data}/>); 

   const name = screen.getByText("Hotel Sai Nath & Sai Restaurant");

   expect(name).toBeInTheDocument();

});