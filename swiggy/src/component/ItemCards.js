import { useDispatch } from "react-redux";

import { addItem } from "./utility/cartSlice";
import { imgApi } from "./utility/const";

const ItemCards = ({item}) =>
    {
       
        const dispatch = useDispatch();

        const clickHandler = (obj) =>
        {
               dispatch(addItem(obj));
               console.log(obj);    
        } 

        return( 
                <div>
                    {
                     item.map( (obj) =>
                        {
                       return(
                            <div className="w-[80%] mx-auto pb-10 px-4 py-4  flex justify-between font-sora    border-b hover:bg-gray-100" key={obj?.card?.info?.id}
                            >

                             <div className=" w-[70%]">
                                <p className="font-bold">{obj?.card?.info?.name} </p>
                                <p className="font-bold" >&#x20B9;{(obj?.card?.info?.price/100)}</p>
                                <p>{obj?.card?.info?.ratings?.aggregatedRating?.rating}  </p>
                                <p>{obj?.card?.info?.description}</p>
                              
                             </div>

                             <div className="relative cursor-pointer">
                                <img className="w-[150px] h-[150px] object-cover rounded-md" src={ imgApi+  obj?.card?.info?.imageId} alt="Image Unavailable" loading="lazy" />
                                <span className="absolute  cursor-pointer left-1/2 font-semibold bottom-0 transform -translate-x-1/2 translate-y-1/2 px-6 py-1 transition-all duration-100 bg-white border text-green-500 rounded-sm hover:bg-gray-100" onClick={()=>
                                    clickHandler(obj)
                                }  >ADD</span>
                            </div>  

                            </div>)
                        })
                    }
                </div>

               
        );
    }



    export default ItemCards;