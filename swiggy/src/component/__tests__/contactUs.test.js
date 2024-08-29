import ContactUs from "../ContactUs"
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

describe('grouping all the contactUs test', () => {
    

       test( "Testing ContactUs component from the swiggy project" , () =>
        {
          render(<ContactUs/>);
        
          const heading = screen.getAllByRole("heading");
        
          //Assertion
          expect(heading.length).toBe(2);
        
        });
        
        //can use "it" inplace of "test" 
        it( "testing for input in ContactUs" , () =>
        {
             render(<ContactUs/>);
        
             const input = screen.getByText("Search");
        
             // Assertion
             expect(input).toBeInTheDocument();
        
        })
        
        it( " testing for input placeholder ", () => 
        {
        
            render(<ContactUs/>);
            const input = screen.getByPlaceholderText("Search");
        
            //Assertion
            expect(input).toBeInTheDocument();
        
        })

});
