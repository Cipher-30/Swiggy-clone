
const Skimmer = () =>
{

    //creating a array of length 25 with(0-24 in it)
    const loop = Array.from( {length:25 }, (_,x) => x);
 

    return(
        
           <div className="w-full mt-16 ">

            <div className="w-[80%] flex flex-wrap m-auto  justify-center  gap-16 border ">
             {
             loop.map( (obj) => {
                      return( 
                              <div key={obj} className="h-[400px] w-[300px] px-4 py-4 border  bg-gray-200">
                                 
                                 <div className="w-full h-[200px] bg-gray-300"> </div>
                                 <div className="w-[80%] h-8  my-4 bg-gray-300" > </div>
                                 <div className="w-[80%] h-4  my-4 bg-gray-300" > </div>
                                 <div className="w-1/2 h-8  my-4 bg-gray-300" > </div>
                                
                                 </div>
                            );
                          }
                     )}
             


            </div>

           </div>

          );
}

export default Skimmer;