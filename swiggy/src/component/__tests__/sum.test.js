import {sum} from "./../sum";


test( "This test is to test js sum function"  , () => 
{
  
     const result = sum(10,0);


     //Assertion (EXPECTATION)
     expect(result).toBe(10);
})