import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";

const RestaurantPage = () => {
    const [resInfo, setResInfo] = useState(null);
    const {resId} = useParams();
    //above is short for below basically above is destructuring on the fly
    // const params = useParams();
    // const resId = params.resId; 


    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
        console.log(resId);
        // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6436082&lng=77.08698369999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        // const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=341033&catalog_qa=undefined&submitAction=ENTER");
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=" + resId + "&catalog_qa=undefined&submitAction=ENTER");
        console.log(data);
        const json = await data.json();
        console.log(json);
        // resInfo = json.
        // (json?.data?.cards[2]?.card?.card['gridElements']?.infoWithStyle['restaurants']);
        // setResInfo(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || json?.data?.cards[1]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
        setResInfo(json?.data);
        // console.log(cuisines);
        //({name} = resInfo[0]?.info);
        // console.log(name);
        // setResInfo([])
        console.log(resInfo);
    };
    if (resInfo === null) {
        return <Shimmer />;
    }
    else {
        console.log(resInfo);
        //sometimes data is coming card[2] sometimes it is coming in card[1]
        const itemCards = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || resInfo?.cards[1]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories[0]?.itemCards;
        console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.categories[0]);
        console.log('itemCards',itemCards);
        const {name, costForTwoMessage, locality, cuisines} = resInfo?.cards[0]?.card?.card?.info
        //const {name, avgRating,cuisines, areaName, costForTwo,cloudinaryImageId} = resInfo[0]?.info;
        return (
        //     <div>
        //         <h1>{name }</h1>
        //         {/* <img className="res-logo" src={CDN_URL + cloudinaryImageId} /> */}
        //         <h5>{costForTwo }</h5>
        //         <h5>{avgRating }</h5>
        //         <h2>menu</h2>
        //         <ul>
        //             <li>{cuisines[0] }</li>
        //             <li>{cuisines[1] }</li>
        //             <li>{cuisines[2] }</li>
        //         </ul>
        //         {/* <h1>{name}</h1> */}
        //         {/* <h1>hello resturant page</h1> */}
        //     </div>
        <div>
            <h1>{name}</h1>
            {cuisines.join(',')}
            <p>{costForTwoMessage}</p>
            <p>{locality}</p>
            <h2>Menu</h2>
            {/* {typeof resInfo} */}
            {itemCards.map((item)=> (
                <li key={item.card.info.id}>{item.card.info.name} - Rs. {item.card.info.price/100 || item.card.info.defaultPrice/100}</li>
            ))}
        </div>
        );
    }
}

export default RestaurantPage;