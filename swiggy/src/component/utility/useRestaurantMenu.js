import { useEffect, useState } from "react";
import { swiggyApiPerCard } from "./const";



const useRestaurant = (props) =>
 {

     const{resId} = props;
     const[restInfo , setRestInfo] = useState(null); 
    // let restInfo = null;


     console.log("STARTING FROM USE-RES-HOOK");
             
             const fetchData = async () =>
             { 
                try
                   {
                      const data = await fetch(swiggyApiPerCard + resId) ;
                       if(!data.ok)
                         {
                             throw new Error("SOMETHING WENT WRONG DURING FETCHING OF RES-MENU");
                         }  
             
                          const dataJson = await data.json();
             
                        //  console.log('INSIDE useRestaurant fetched data');
                        //  console.log(dataJson);



                         if(dataJson)
                         {
                            const menuInfo = dataJson?.data.cards[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards; 

                            console.log("menuInfo", menuInfo);
                            
                             setRestInfo(menuInfo);
                            //   restInfo = menuInfo; 
                           
                         }
                         
                    }  
                catch(error)
                        {

                           console.log("I am in catch ", error.message);

                        }
             }


             
             useEffect( ( () =>
             {
                    fetchData();

            // BECAUSE OF RESID DEP.. IT WILL CALL API ONLY WHEN RESID CHANGES
             } ), [resId]); 
             
              
             console.log("RETURNING FROM USE-RES-HOOK");
      
      //BECAUSE OF USE-STATE IT RERENDERS AND ABLE TO RETURN THE VALUE       
    return restInfo ;
                
    }







export default useRestaurant;