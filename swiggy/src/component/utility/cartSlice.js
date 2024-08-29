import { createSlice } from "@reduxjs/toolkit";


const cartSlice = createSlice(
    {
        name: 'cart',
        
        initialState:{
            items: [],
        } ,

        reducers: {     
               
            //action referse to argument(needed)/ARGUMENT WILL BE PASSED 
            addItem : ( state , action) =>
            {
                //adding a value in item
               state.items.push(action.payload);  //ACTION.PAYLOAD -> REFERS TO THAT ARGUM..
            },
            //here we don't need argument(action) 
            removeItem : (state, action) =>
            {
                   state.items.pop();
            },
             //here we don't need argument(action) 
            clearCart : (state) =>
            {
                //DIRECTLY MUTATING
               state.items.length = 0;
            }


        }
    }
);


//syntaxx thing.....
export const{addItem, removeItem, clearCart } = cartSlice.actions;


export default cartSlice.reducer;