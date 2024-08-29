import React,{StrictMode} from "react";
import ReactDom from "react-dom/client";
import {createBrowserRouter, RouterProvider,Outlet} from 'react-router-dom';
import {Provider} from "react-redux";
import appStore from "./component/utility/appStore";

import Header from "./component/Header";
import Body from "./component/Body";
import About from "./component/Home";
import ContactUs from "./component/ContactUs";
import Cart from "./component/Cart";
import SignIn from "./component/SignIn";
import ResInfo from "./component/ResInfo";


//REACT IS CASE SENSITIVE REMEBER THATT



console.log("its working");

const root = ReactDom.createRoot(document.querySelector(".root"));





const AppComponent = () =>
    (
                 //providring redux store to react
      <Provider store={appStore}> 
       <div className="w-full m-auto p-0 font-anek ">
           {/* <h1 className="bg-black text-white">heading components...</h1> */}
           <Header/>
          <Outlet/>
       </div>
      </Provider>  

     )





    //DEFINING ALL THE PATHS
    const routerApp = createBrowserRouter([
      
                {

                  path:'/',
                  element: <AppComponent/>,
                  children: [
                     {
                         path:'/',
                         element:<Body/>
                     },

                     {
                         path:'/home',
                         element: <Body/>
                     }
                     ,
                     {
                         path:'/signIn',
                         element:<SignIn/>
                     },
                     {
                         path:'/cart',
                         element:<Cart/>
 
                     },
                     {
                         path:'/contactUs',
                         element:<ContactUs/>
 
                     },
                     {
                        path:'/resaurantId/:resId',
                        element:<ResInfo/>

                     }
                  ]

                }
                 
          ])







root.render(<RouterProvider router={routerApp} />);

