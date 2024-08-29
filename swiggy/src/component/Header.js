import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import appStore from "./utility/appStore";



const Header = () =>
{
  
      const cartItem = useSelector( (store) => store.cart.items);

return(
       <div className="  w-full m-0 p-0 bg-black  font-sora"> 

       <div className="w-[80%] mx-auto">

       <nav className="flex  border border-black"> 
                       
                       <Link className="  mx-auto sm:m-0 "   to={'/'}>
                             <img   className="w-40  mx-auto sm:m-0 "   
                             src="https://t3.ftcdn.net/jpg/04/42/36/28/360_F_442362816_CvYvYS6gEJB6PSuwsTJP6PwoXxfvQW8M.jpg"  alt="logo"/>
                       </Link>
             
                       <ul className="hidden flex-1  gap-6  items-center justify-end sm:flex border border-black" >


                       <Link className=" text-sm font-bold px-4 py-2 rounded-sm border border-white bg-black text-white transition transform duration-200 ease-in-out  hover:text-black hover:bg-white" to={'/home'}><li>Home</li></Link>
                          
                           <Link className=" text-sm font-bold px-4 py-2 rounded-sm border border-white bg-black text-white transition transform duration-200 ease-in-out  hover:text-black hover:bg-white" to={'/cart'}><li>Cart ({cartItem.length})</li></Link>
             
                         
             
                           <Link className="text-sm font-bold px-4 py-2 rounded-sm border border-white bg-black text-white transition transform duration-200 ease-in-out  hover:text-black hover:bg-white" to={'/contactUs'}><li>Contact Us</li></Link>
             
                           <Link className="text-sm font-bold px-4 py-2 rounded-sm border border-white bg-black text-white transition transform duration-200 ease-in-out  hover:text-black hover:bg-white" to={'/signIn'}><li>Sign in</li></Link>
                           
                       </ul>
             
                     </nav>




       </div>

       

       </div> 
      );
}



export default Header ;