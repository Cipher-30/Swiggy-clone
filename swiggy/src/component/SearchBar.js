
const SearchBar = (props) =>
{
 
 const{meal , setFilterMeal} = props;

    const inputHandler = (e) =>
    {

        let value = e.target.value.toLowerCase();
        
        console.log(value);

        let filterData = meal.filter( (obj) => {
            return( obj?.info?.name?.toLowerCase().includes(value) );
        } )

        setFilterMeal(filterData);
        
    } 

    return(
         
        <div className="w-full mt-8  font-sora">

            <div className="w-[60%] mx-auto ">

                <input data-testid="searchInput" onChange={inputHandler} placeholder="Search Restaurtant.." className=" w-full px-2 py-2 mr-4 border border-black sm:w-1/2 "   />
                <button  className="px-2 py-2 rounded-sm  transition-all duration-100  border bg-gray-200 border-black hover:bg-gray-300 my-2  sm:my-0 ">Search</button>
                
            </div>
       
        </div>

          );
}

export default SearchBar;