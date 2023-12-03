import { CDN_URL } from "../utils/constant";
//js object for inline style - use js for adding css too in jsx lol
const styleCard = {
    backgroundColor : "yellow",
};

//Restaurant card component
const RestaurantCard = (props) => {
    // console.log('props:::',props); //object
    // console.log(resData);
    const {resData} = props;
    const {name, avgRating,cuisines, areaName, costForTwo,cloudinaryImageId, id} = resData.info;
    // console.log('resdata::',resData.info);
    return (
        <div className="restaurant-card" style={styleCard} >
                <img className="res-logo" src={CDN_URL + cloudinaryImageId} />
                <h3>{name}</h3>
                <h5>{avgRating}</h5>
                {/* <>{sla.deliveryTime}</> */}
                <h5>{cuisines.join(',')}</h5>
                <h5>{areaName}</h5>
                <h5>{costForTwo}</h5>
        </div>
    )
}

export default RestaurantCard;