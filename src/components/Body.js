
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
//body 
const Body = () => {
    return (
        <div className="body-container">
            <div className="search-bar">Search</div>
            <div className="restraunt-card-container">
                {/* restraunt card will be a component bcoz there will be so many of them and we can reuse them */}
                {/* Passing dynamic data into components, use props. Props are simply arguments to function*/}
                {/* NOT WORKING WHY */}
                {/*
                This is why for each is not working  
                
                The map method receives a function as a parameter. Then it applies it on each element 
                and returns an entirely new array populated with the results of calling the provided function.
                This means that it returns a new array that contains an image of each 
                element of the array. It will always return the same number of items. 
                However, instead of returning a new array like map, it returns undefined.
                stack overflow reasoning - https://stackoverflow.com/questions/35590621/foreach-over-es6-map-in-jsx
                 */}
                    {/* {
                        resList.forEach((restaurant) => {
                            <RestaurantCard key={restaurant.info.id} resData={restaurant} />;
                          })
                    } */}
                {
                    resList.map((restaurant)=> (
                        //returning a piece of JSX
                        // Returned restro card from here (in the end map returns the whole array and foreach won't)
                        <RestaurantCard key={restaurant.info.id} resData={restaurant} />
                    ))
                }
                
            </div>
        </div>
    )
}
export default Body;