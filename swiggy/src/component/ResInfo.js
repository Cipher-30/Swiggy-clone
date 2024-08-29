import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { swiggyApiPerCard } from "./utility/const";
import rawApiData from "./utility/rawApiData";
import Skimmer from "./Skimmer";
import useRestaurant from "./utility/useRestaurantMenu";
import RestMenu from "./RestMenu";
import { ApiCall } from "./utility/useRestaurantMenu";

const ResInfo = () =>
{

   
    const[restInfo, setRestInfo] = useState(null);
    const{resId} = useParams();  //RETURNS OBJECT
    const resMenuData = useRestaurant({resId}); //CUSTOM HOOK , CALLING API


         console.log("PRINTING RES-MENU-DATA");
        //  console.log(resMenuData);
         
         
 
   
    console.log("printing resId  IN RES-INFO",resId);


    const rawResData = rawApiData?.data?.success?.cards[2]?.gridWidget?.gridElements?.infoWithStyle?.restaurants;    // RAW DATA FROM UTILITY

    // console.log(rawResData);
    



    useEffect( (  () => 
      {
        console.log("useEffect for filtering rawData in Res-Info ");
     

        
       if(rawResData)
       {
        const filterData = rawResData.filter( (obj) => {
          return( obj?.info.id == resId)
           });
               
           //  console.log(filterData);
           setRestInfo(filterData );
       }
         

         // BECAUSE OF RESID DEP.. IT WILL RUN ONLY WHEN RESID CHANGES
         // AND AFTER THE FIRST RENDERING 
      }  ),[resId])




      
      console.log("Checking Condition for skimmer");
      
      if(!restInfo || resMenuData == null )
      {
        return <Skimmer/>
      }


    

    return( 
         
        

          <div>



          <div>
      
            <div className="w-[80%] mt-12 flex m-auto shadow-md border rounded-sm border-black" >
      
                <div className=" flex-1 px-6 py-4 leading-[1.8]  ">
                   <h1 className="text-2xl font-semibold">{restInfo[0]?.info?.name}</h1>
                   <h2>{restInfo[0]?.info?.areaName}</h2>
                   <p>{restInfo[0]?.info?.cuisines.join(" ,")}</p>
                   <h4>Time: {restInfo[0]?.info?.sla.slaString}</h4>
                   <h4>Distance: {restInfo[0]?.info?.sla.lastMileTravelString}</h4>
                </div>
          
                <div className=" px-8 py-6 leading-[1.8] ">
                  <h3 className="text-xl font-semibold">{restInfo[0]?.info?.costForTwo}</h3>
                  <div> <span className="mr-2">{restInfo[0]?.info?.avgRating}</span> <span>{restInfo[0]?.info?.veg === true? 'Veg' : 'Non-veg'}</span> </div>
                </div>
          
            </div>


            <div>
              <RestMenu   resMenuData={resMenuData} />
            </div>
         
          </div>

        </div>
          
          );
}


export default ResInfo; 