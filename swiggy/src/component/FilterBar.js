

const FilterBar = ( props) =>
{
 // PASSING/LIFTING THE STATE UP 
  const{meal,setFilterMeal} = props;

    const clickHandler = (e) =>
    { 
        // console.log(e.target.value);
        const value = e.target.value;
     
      //All button
        if( value == "All")
        {
            const filterData = meal.filter(  (obj) =>
            {
                return( obj)
            } )

            setFilterMeal(filterData);
        }

      //Top Rated button
        if( value == "Top Rated")
        {
            const filterData = meal.filter(  (obj) =>
            {
                return( obj?.info?.avgRating  > 4.1)
            } )

            setFilterMeal(filterData);
        }

        //Fast Delivery button
        if( value == "Fast Delivery")
        {

            const filterData = meal.filter( (obj) => 
             {
                return( obj?.info?.sla?.deliveryTime < 50 );

              } );

              setFilterMeal(filterData)
           
        }


        
        
    }

    return(

        <div className="w-full  mt-8 font-sora "  >

            <div className="w-[60%]   mx-auto  ">

              <button value='All' className="  text-md  px-4 py-2 mr-4  bg-gray-200  rounded-sm  transition-all duration-100 border border-black hover:bg-gray-300 my-2 sm:my-0 " onClick={clickHandler} >All</button>

              <button value='Top Rated'  className="  text-md  px-4 py-2 mr-4  bg-gray-200  rounded-sm transition-all duration-100 border border-black hover:bg-gray-300 my-2 sm:my-0 "  onClick={clickHandler} >Top Rated</button>

              <button value='Fast Delivery'  className="  text-md  px-4 py-2 mr-4  bg-gray-200  rounded-sm transition-all duration-100 border border-black hover:bg-gray-300 my-2 sm:my-0 "  onClick={clickHandler} >Fast Delivery</button>
            </div>


        </div>


           );
}

export default FilterBar;