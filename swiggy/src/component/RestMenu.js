import { useEffect, useState } from "react";
import Skimmer from "./Skimmer";
import ItemCards from "./ItemCards";




const RestMenu = ({ resMenuData }) => {


    // console.log("PRINTING RES-MENU-DATA INSIDE RES-MENU",resMenuData);





    const [resMenu, setResMenu] = useState([]);
    const [filterResMenu, setFilterResMenu] = useState(null);
    const [loading, setLoading] = useState(false);
    const [activeIndex, setActiveIndex] = useState(null);


    const loadingHandler = (index) => {
        console.log("Clicked item index:", index);
        // Toggle the item cards display
        if (activeIndex === index)  //FOR CLOSING ALREADY OPEN BAR
        {
            setLoading(false);
            setActiveIndex(null);
        } else {
            setActiveIndex(index);
            setLoading(true);
        }
    };





    useEffect(() => {
        if (resMenuData) {
            setResMenu(resMenuData);

            const filterData = resMenuData.filter((obj) => {
                return (
                    obj?.card?.card?.["@type"] ===
                    "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
                );
            });

            setFilterResMenu(filterData);
        }
    }, [resMenuData]);





    if (!resMenu.length && !filterResMenu) {
        return <Skimmer />;
    }



    return (

        <div className="w-full mt-8 border-2 ">






            <div className="w-[80%]  mx-auto flex flex-col gap-4 ">

                {filterResMenu.map((obj, index) => (

                    <div key={index}>

                        <div onClick={() => loadingHandler(index)} key={index} className="cursor-pointer px-6 py-4 font-sora border border-black">
                            {obj?.card?.card?.title}
                            <span> ({Object.keys(obj?.card?.card?.itemCards).length})</span>

                        </div>

                        {loading && activeIndex === index && (
                            <ItemCards item={obj?.card?.card?.itemCards} />
                        )}

                    </div>

                ))}

            </div>





        </div>

    );


};


export default RestMenu;