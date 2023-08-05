
import RestaurantCard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";
//body 
const Body = () => {
    //local state variable
    const [ListOfRestaurants,setListOfRestaurants] = useState(resList);
    const [SearchedValue,setSearchedValue] = useState('');
    return (
        <div className="body-container">
            <div className="search-bar">
                <input className="search" id="search-txt" type="text" placeholder="search resturant" onChange={(e)=>{setSearchedValue(e.target.value)}}/>
                <button className="search-btn" onClick={()=>{
                    // let searchedText = document.getElementById('search-txt').value;
                    // setSearchedValue(document.getElementById('search-txt').value);
                    let filteresList = resList.filter((res)=> {
                        //exact match
                        // return res.info.name.toLowerCase() === searchedText.toLowerCase();
                        //partial match and exact match too 
                        //'sub' will return subway and `bu` will return burger king and starbucks.
                        //empty string will return all the data. 
                        return res.info.name.toLowerCase().includes(SearchedValue.toLowerCase());
                    }
                    );
                    setListOfRestaurants(filteresList);
                }}>search</button>
            </div>
            <div className="filter">
                <button className="filter-btn" onClick={()=> {
                    //setA(['bye']); // state variable value changed
                    // console.log(A);
                    let filteresList = resList.filter(
                        (res) => {
                            return res.info.avgRating > 4.3
                        }
                        );
                            //state variable value changed
                    setListOfRestaurants(filteresList);
                   // console.log(resList1);
                }}>
                    Top rated restaurants
                </button>
            </div>
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
                    {/* {console.log(ListOfRestaurants)} */}
                {
                    ListOfRestaurants.map((restaurant)=> (
                        //returning a piece of JSX
                        // Returned restro card from here (in the end map returns the whole array and foreach won't)
                        <RestaurantCard  key={restaurant.info.id} resData={restaurant} />
                    ))
                }
                
            </div>
        </div>
    )
}
export default Body;