import { CDN_URL } from "../utils/constant";
//js object for inline style - use js for adding css too in jsx lol
const styleCard = {
    backgroundColor : "lightgrey",
};

//Restaurant card component
const RestaurantCard = (props) => {
    // console.log('props:::',props); //object
    // console.log(resData);
    const {resData} = props;
    const {name, avgRating,cuisines, areaName, costForTwo,cloudinaryImageId, id} = resData.info;
    // console.log('resdata::',resData.info);
    return (
        <div className="restaurant-card rounded-md break-words w-60 w-min-60 border border-black border-solid p-2 m-2" style={styleCard} >
                <img className="res-logo h-48 w-60 rounded-md" src={CDN_URL + cloudinaryImageId} />
                <h3 className="font-bold py-1 text-lg" >{name}</h3>
                <h5>{avgRating}</h5>
                {/* <>{sla.deliveryTime}</> */}
                <h5>{cuisines.join(',')}</h5>
                <h5>{areaName}</h5>
                <h5>{costForTwo}</h5>
        </div>
    )
}

export default RestaurantCard;