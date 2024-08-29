import { imgApi } from "./utility/const";
import { pureVeg } from "./utility/const";

const Card = (props) =>
{
    //  console.log("CONSOLING POROPS");
    //  console.log(props);
     
      
    const{detail} = props;
  const{name, avgRating, costForTwo, cloudinaryImageId, cuisines,sla , veg,badges} = detail?.info;

    return(
          <div className="" data-testid= "card" >
            <div className="hover:scale-[98%]"> <img className="w-[300px] h-[200px] p-2  rounded-[1.5rem]  object-cover transition transform duration-100 ease-in-out group-hover:scale-95  "  src={imgApi + cloudinaryImageId} loading="lazy" alt="Food Image" /></div>

            <div className="flex m-2 text-sm  p-1   "> 

                <div className=" w-[60%]   pr-2 leading-5">
                  <p className="text-lg font-bold">{name}</p>
                  <p className="mt-4">{cuisines?.join(", ")}</p>
                </div>  

                <div className=" w-[30%] flex flex-col items-end ml-auto ">

                   <p>{avgRating} </p>
                  { veg === true ? (<img className="w-[70px] my-1" src={pureVeg}/>) : (<span></span>) }           
                   <p className="text-sm font-semibold ml-auto">{costForTwo}</p>
                   <p>{sla?.slaString}</p>
                   
                </div>  

            </div>
 

          </div>
        );
}


//HIGHER ORDER FUNCTIONAL COMPONENT
 export const promotedCard = (Card) =>
{
  return(props) =>
  {
     return(
             <div>
              <label className="absolute rounded-tl-lg rounded-br-lg px-4 py-1 z-10 shadow-lg bg-black text-white border-white">Promoted</label>
              <Card {...props} />
             </div>
         )
  }
}





export default Card;