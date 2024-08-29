import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import { removeItem  , clearCart} from "./utility/cartSlice";
import ItemCards from "./ItemCards";



const Cart = () =>
{
   //ACESSING STATE FROM REDUX STORE / CART-ITEM SUBSCRIBING THE STATE FROM REDUX
 const cartItem = useSelector( (store) => (store.cart.items));

 const dispatch =  useDispatch();
 let price = 0;
 {cartItem.map( (obj) => {  price = price + obj.card.info.price } )}

 const clearhandler = () =>
 {
  dispatch(clearCart());
 }

 const removehandler = () =>
 {
  dispatch(removeItem());
 }
 
    return(
          <div >
            
            <div className="w-[80%] mx-auto mt-12 px-8 py-8 font-sora border border-black ">
              <h2 className="text-center text-xl font-bold">Cart</h2>

              <div>
          <ItemCards item={cartItem} />
          
          {cartItem.length > 0 ? (
            <div className="my-8 flex justify-center gap-8">
              <button 
                className="px-2 py-2 rounded-sm transition-all duration-100 border bg-gray-200 border-black hover:bg-gray-300 my-2 sm:my-0"
                onClick={clearhandler} >Clear Cart</button>
              <button 
                className="px-2 py-2 rounded-sm transition-all duration-100 border bg-gray-200 border-black hover:bg-gray-300 my-2 sm:my-0"
                onClick={removehandler}>Remove Order
              </button>
             
              <button 
                className="px-2 py-2 rounded-sm transition-all duration-100 border bg-gray-200 border-black hover:bg-gray-300 my-2 sm:my-0"
                >Total Price: &#x20B9; {price/100}
              </button>

               
            </div>) : (<h1 className="m-8 text-center font-semibold"> Cart is Empty!!</h1>)}
        </div>



              
              </div>
           

          </div>
          )
}


export default Cart;