import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import { swiggyApi } from "./utility/const";
import rawApiData from './utility/rawApiData'
import Skimmer from "./Skimmer";
import Card, { promotedCard } from "./Card";
import FilterBar from "./FilterBar";
import SearchBar from "./SearchBar";



const Body = () => {

    const [meal, setMeal] = useState([]);
    const [filterMeal, setFilterMeal] = useState([]);

    //Using HIGHER ORDDER FUNCTIONAL COMPONENT
    const CardPromoted = promotedCard(Card);


    //will run after the mount
    useEffect(() => {
        console.log('calling fetchData')
        fetchData();
    }, []);


    const fetchData = async () => {
        try {

            const data = await fetch(swiggyApi);
            if (!data.ok) // check the HTTP status is in 200-299(found!!)
            {
                throw new Error('went something wrong during fetching')
            }


            const dataJson = await data.json();
            const useableData = dataJson?.data?.success?.cards[2]?.gridWidget?.gridElements?.infoWithStyle?.restaurants;
            if (useableData) {
                setMeal(useableData);
                setFilterMeal(useableData);
                console.log("data is feteched from api", useableData);
            }


        }
        catch (error) {

            console.log('catch the error during fetching', error.message);
            console.log('using rawApiData');

            const useableData2 = rawApiData?.data?.success?.cards[2]?.gridWidget?.gridElements?.infoWithStyle?.restaurants;

            setMeal(useableData2);
            setFilterMeal(useableData2);


        }
    }



    // if(meal != null)
    //   return <Skimmer/>


                   //THIS WILL RENDER ON FIRST RENDER.
    return meal.length == 0 ? (<div> <SearchBar /> <FilterBar />  <Skimmer /> </div>) :
             // THIS WILL RENDER AFTER API HIT (ON THE RE-RENDER).
        (  
            <div>
               <div className=" w-full border ">

                    <SearchBar meal={meal} setFilterMeal={setFilterMeal} />
                    <FilterBar meal={meal} setFilterMeal={setFilterMeal} />


                    <div className="bg-gray-100">
                       <div className="w-[80%] flex flex-wrap gap-8 mt-8 pt-8 justify-center mx-auto">

                            {filterMeal.map((obj) => {
                                return (

                                    <Link className="max-w-[300px]  cursor-pointer rounded-[1.5rem]  border border-gray-300 hover:border-gray-400  hover:shadow-xl  hover:bg-white" to={"/resaurantId/" + obj?.info?.id} key={obj?.info?.id}>
                                        {
                                            obj?.info?.promoted == true ?
                                                (<CardPromoted detail={obj} />) :
                                                (<Card detail={obj} />)
                                        }
                                    </Link>

                                )
                            })
                            }
                        </div>


                    </div>

                </div>

            </div>
        )
};

export default Body;