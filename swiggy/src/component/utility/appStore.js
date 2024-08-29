import {configureStore} from "@reduxjs/toolkit"
//confirgureStore responsible for making redux store
import cartReduser from "./cartSlice" ;  //syntaxxx thingg..... (cartReduser)

const appStore = configureStore({

    reducer: {
         cart: cartReduser,
    },
}
);


export default appStore; 