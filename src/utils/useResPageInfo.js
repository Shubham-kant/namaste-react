/*
    custom hook to fetch info for restraunt info. we are trying to follow single responsibility principle here, 
    this hook is solely responsible for fetching info and RestrauntPage is solely resposnsible for displaying the data.
*/
import { useEffect, useState } from "react";
useResPageInfo = (resId) => {
    const [resInfo, setResInfo] = useState(null); 
    console.log('useResinfo called', resId);
    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async () => {
        console.log(resId);
        // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.6436082&lng=77.08698369999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        // const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=341033&catalog_qa=undefined&submitAction=ENTER");
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.7040592&lng=77.10249019999999&restaurantId=" + resId + "&catalog_qa=undefined&submitAction=ENTER");
        // console.log('data::::::',data);
        const json = await data.json();
        // console.log(json);
        // resInfo = json.
        // (json?.data?.cards[2]?.card?.card['gridElements']?.infoWithStyle['restaurants']);
        // setResInfo(json?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards || json?.data?.cards[1]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards);
        setResInfo(json?.data);
        // console.log(cuisines);
        //({name} = resInfo[0]?.info);
        // console.log(name);
        console.log('resInfo::::::::::::',resInfo);
    };
    return resInfo;

}

export default useResPageInfo;