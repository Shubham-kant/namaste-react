
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
//body 
const Body = () => {
    console.log('body component rendered again...');
    //local state variable
    const [ListOfRestaurants,setListOfRestaurants] = useState([]);
    const [FilteredRes,setFilteredRes] = useState([]);
    const [SearchedValue,setSearchedValue] = useState('');
    //called AFTER component rendered
    //what ever you passed inside call back funcn,it will get executed after component gets rendered.
    useEffect(()=>{
        console.log('called AFTER component rendered');
        fetchResData();
    },[]);
    async function fetchResData() {
        //fetch returns a promise
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6436082&lng=77.08698369999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        console.log(data);
        const json = await data.json();
        console.log(json);
        //API response changes sometimes data is coming in cards[1] sometimes in cards[2]
        setListOfRestaurants(json?.data?.cards[2]?.card?.card['gridElements']?.infoWithStyle['restaurants'] || json?.data?.cards[1]?.card?.card['gridElements']?.infoWithStyle['restaurants']);
        setFilteredRes(json?.data?.cards[2]?.card?.card['gridElements']?.infoWithStyle['restaurants'] || json?.data?.cards[1]?.card?.card['gridElements']?.infoWithStyle['restaurants']);
    }
    const onlineStatus = useOnlineStatus();
    console.log(onlineStatus);
    if(!onlineStatus) {
        //you can also add a game for user to play if he is online or some good UI . TODO
        return <h1>oops!!! You are offline.. Please check your internet..</h1>
    }


    //loader - you can add a spinner here as well.
    //a better approach is showing a shimmer UI
    //api has not responded with the res list,so show shimmer UI instead of loader
    //conditional rendering
    // if(ListOfRestaurants?.length === 0) {
    //     return <Shimmer/>
    // }
    //if resList.length ===0 return shimmer UI,when we get the api data render main UI #conditional rendering
    return ListOfRestaurants?.length === 0 ?  <Shimmer/> :  (
        <div className="body-container">
            <div className="search-bar">
                <input className="search" id="search-txt" value={SearchedValue} type="text" placeholder="search resturant" onChange={(e)=>{setSearchedValue(e.target.value)}}/>
                <button className="search-btn" onClick={()=>{
                    // let searchedText = document.getElementById('search-txt').value;
                    // setSearchedValue(document.getElementById('search-txt').value);
                    // fetchResData();
                    let filteresList = ListOfRestaurants?.filter((res)=> {
                        //exact match
                        // return res.info.name.toLowerCase() === searchedText.toLowerCase();
                        //partial match and exact match too 
                        //'sub' will return subway and `bu` will return burger king and starbucks.
                        //empty string will return all the data. 
                        return res.info.name.toLowerCase().includes(SearchedValue.toLowerCase());
                    }
                    );
                    // setListOfRestaurants(filteresList);
                    setFilteredRes(filteresList);
                   
                }}>search</button>
            </div>
            <div className="filter">
                <button className="filter-btn" onClick={()=> {
                    //setA(['bye']); // state variable value changed
                    // console.log(A);
                    let filteresList = ListOfRestaurants.filter(
                        (res) => {
                            return res.info.avgRating > 4.3
                        }
                        );
                            //state variable value changed
                   // console.log(resList1);
                   setFilteredRes(filteresList);
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
                    {console.log(FilteredRes)}
                {
                    FilteredRes?.map((restaurant)=> (
                        //returning a piece of JSX
                        // Returned restro card from here (in the end map returns the whole array and foreach won't)
                        //link will prevent page refresh
                        <Link to={"/restaurant-page/"+restaurant.info.id} key={restaurant.info.id}>
                            <RestaurantCard resData={restaurant} />
                        </Link>
                    ))
                }
                
            </div>
        </div>
    )
}
export default Body;