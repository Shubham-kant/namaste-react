import React from "react";
import ReactDOM from "react-dom/client";
//BASICS PRACTICE START
/*
//why 2 files - why not different file.
//because react also works on mobile.have u heard of react native.There are different places where react is used.
const parent = React.createElement(
  "div",
  {
    id: "parent",
  },
  React.createElement("div", { id: "child" }, [
    React.createElement("h1", { id: "heading" }, "hello from nested divs 1"),
    React.createElement("h1", {}, "hello from nested divs 2"),
  ])
);
const heading = React.createElement(
  "h1",
  {
    id: "head",
    className: "fef",
    tabIndex: "fef",
  },
  "hello hi namastey"
);

console.log("react heading::", heading);
console.log(React, ReactDOM);
//JSX => Babel converts to  React.createElement() => React element (JS object )=> HTML Element (rendered)
const jsx = (
  <h1 className="dwsd" tabIndex="fef">
    hello hi namastey
  </h1>
);
console.log("jsx elememnt", jsx);
const number = 1000;
//react element i.e. JS object . can be used in {} as JS piece of code in JSX
const footer = <span>footer</span>;
//react element
console.log(footer);
//functional component
const Title = () => <h1>hello title is here..</h1>;
const ReactElem1 = <span>react element element 1 </span>;
// console.log(jsx === heading);
//REACT functional component - JS function returning JSX/React element is functional component.
//component component - using 1 component in another component.
const HeadingComponent = () => (
  <div>
    <Title />
    // we can use piece of JS in JSX inside {}.
    {footer}
    <h1>hello functional component</h1>
  </div>
);
console.log("func::", HeadingComponent());

const HeadingComponent2 = () => {
  console.log(<HeadingComponent />);
  console.log(<h1>frg</h1>);
  return <HeadingComponent />;
  // React.createElement('h1',{
  //     id:'head',
  //     className:'fef',
  //     tabIndex:"fef"
  // },'hello hi namastey');
};
//react element (tags) are objects
console.log(parent);
const ReactElem2 = (
  <div>
    {ReactElem1}
    //also print functional component inside {} bcoz func comp are JS function only
    {Title()}
    <Title />
    <Title></Title>
    <p>react elememnt 2</p>
    <HeadingComponent />
  </div>
);
const ReactElem3 = (
    // react fragment - act as empty tag .return multiple elements without adding extra node
  <>
    <div></div>
    <div></div>
  </>
);
// Assignment EP-03 starts
const Logo = () => {
  return (
    <img
      src="https://s3.amazonaws.com/cdn-test.logojoy.com/assets/inspiration/new/38.png"
      height={"50px"}
      width={"50px"}
    />
  );
};
const SearchBar = () => {
  return <input type="text" />;
};
const UserProfile = () => {
  return (
    <img
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWHxR3IZcDutYvMXCKkWH6XJdDd3fDiD_ZGz1gRlBw5cXLgMyseBZVU6eySuKiZKRQF2A&usqp=CAU"
      height={"50px"}
      width={"50px"}
    />
  );
};
const Header = () => (
  <div className="header-container">
    <Logo />
    <SearchBar />
    <UserProfile />
  </div>
);
// Assignment EP-03 ends
//render method converts react object (here parent) into html element that browser understands.
// React create element creates JS object
*/
// BASICS PRACTICE END

/**
 * APPLAYOUT
 * HEADER
 *      LOGO
 *      LINKS
 * BODY
 *      SEARCH
 *      CARDS CONTAINER
 *          card
 *              -img
 *              -name
 *              -cousine
 *              -ratings
 *              -delivery time
 *          
 * FOOTER
 *      COPYRIGHT
 *      LINKS
 *      CONTACT
 */


//header
const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuiamOYp0MeQQqbhgDOz-Ujl7dawyziFoMpqkKyER6cu2tvwRNTXsAkFCu25dBxW4Jy4o&usqp=CAU" />
            </div>
            <div className="nav-items">
                <ul>
                    <li className="list-item">Home</li>
                    <li className="list-item">About</li>
                    <li className="list-item">Cart</li>
                    <li className="list-item">Contact us</li>
                </ul>

            </div>
        </div>


    )
}
//js object for inline style - use js for adding css too in jsx lol
const styleCard = {
    backgroundColor : "yellow",
};
//Restaurant card component
const RestaurantCard = (props) => {
    // console.log('props:::',props); //object
    // console.log(resData);
    const {resData} = props;
    const {name, avgRating,cuisines, areaName, costForTwo,cloudinaryImageId} = resData.info;
    // console.log('resdata::',resData.info);
    return (
        <div className="restaurant-card" style={styleCard} >
            <img className="res-logo" src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} />
            <h3>{name}</h3>
            <h5>{avgRating}</h5>
            {/* <>{sla.deliveryTime}</> */}
            <h5>{cuisines.join(',')}</h5>
            <h5>{areaName}</h5>
            <h5>{costForTwo}</h5>
        </div>
    )
}
const resList = [
    {
        "info": {
            "id": "27121",
            "name": "KFC",
            "cloudinaryImageId": "56c9ab92bd79745fd152a30fa2525426",
            "locality": "District Centre",
            "areaName": "Janakpuri",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Burgers",
                "Biryani",
                "American",
                "Snacks",
                "Fast Food"
            ],
            "avgRating": 4,
            "feeDetails": {
                "restaurantId": "27121",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3100
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 3100
            },
            "parentId": "547",
            "avgRatingString": "4.0",
            "totalRatingsString": "5K+",
            "sla": {
                "deliveryTime": 25,
                "lastMileTravel": 2.1,
                "serviceability": "SERVICEABLE",
                "slaString": "25 mins",
                "lastMileTravelString": "2.1 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-07-23 23:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "40% OFF",
                "subHeader": "UPTO ₹80"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/kfc-district-centre-janakpuri-delhi-27121",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "254117",
            "name": "McDonald's",
            "cloudinaryImageId": "08eee882fda81b68e5c36e3a5d89d8c0",
            "locality": "Ashok Nagar",
            "areaName": "Tilak Nagar",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "American"
            ],
            "avgRating": 4.2,
            "feeDetails": {
                "restaurantId": "254117",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3100
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 3100
            },
            "parentId": "630",
            "avgRatingString": "4.2",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 34,
                "lastMileTravel": 1.5,
                "serviceability": "SERVICEABLE",
                "slaString": "34 mins",
                "lastMileTravelString": "1.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-07-24 01:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/mcdonalds-ashok-nagar-tilak-nagar-delhi-254117",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "138434",
            "name": "Burger King",
            "cloudinaryImageId": "e33e1d3ba7d6b2bb0d45e1001b731fcf",
            "locality": "Ashok Nagar",
            "areaName": "Ashok Nagar",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "Burgers",
                "American"
            ],
            "avgRating": 4.2,
            "feeDetails": {
                "restaurantId": "138434",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3100
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 3100
            },
            "parentId": "166",
            "avgRatingString": "4.2",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 31,
                "lastMileTravel": 1.5,
                "serviceability": "SERVICEABLE",
                "slaString": "31 mins",
                "lastMileTravelString": "1.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-07-24 03:30:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "60% OFF",
                "subHeader": "UPTO ₹120"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/burger-king-ashok-nagar-delhi-138434",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "11436",
            "name": "Subway",
            "cloudinaryImageId": "1ace5fa65eff3e1223feb696c956b38b",
            "locality": "Pvr Road",
            "areaName": "Vikas puri",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "Salads",
                "Snacks",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 3.7,
            "feeDetails": {
                "restaurantId": "11436",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3100
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 3100
            },
            "parentId": "2",
            "avgRatingString": "3.7",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 26,
                "lastMileTravel": 1.6,
                "serviceability": "SERVICEABLE",
                "slaString": "26 mins",
                "lastMileTravelString": "1.6 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-07-23 23:59:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/subway-pvr-road-vikas-puri-delhi-11436",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "326377",
            "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
            "cloudinaryImageId": "hns20c5qfq3dnjgfngsq",
            "locality": "Tihar Village",
            "areaName": "Subhash Nagar",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Desserts",
                "Ice Cream",
                "Ice Cream Cakes"
            ],
            "avgRating": 4.6,
            "veg": true,
            "feeDetails": {
                "restaurantId": "326377",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3700
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 3700
            },
            "parentId": "582",
            "avgRatingString": "4.6",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 24,
                "lastMileTravel": 3,
                "serviceability": "SERVICEABLE",
                "slaString": "24 mins",
                "lastMileTravelString": "3.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-07-24 00:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/kwality-walls-frozen-dessert-and-ice-cream-shop-tihar-village-subhash-nagar-delhi-326377",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "58215",
            "name": "Theobroma",
            "cloudinaryImageId": "d0oafa1ugdspfqm5xuh9",
            "locality": "Main Club Road",
            "areaName": "Punjabi Bagh",
            "costForTwo": "₹800 for two",
            "cuisines": [
                "Bakery",
                "Desserts"
            ],
            "avgRating": 4.5,
            "feeDetails": {
                "restaurantId": "58215",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 4900
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 4900
            },
            "parentId": "1040",
            "avgRatingString": "4.5",
            "totalRatingsString": "5K+",
            "sla": {
                "deliveryTime": 35,
                "lastMileTravel": 5,
                "serviceability": "SERVICEABLE",
                "slaString": "35 mins",
                "lastMileTravelString": "5.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-07-24 00:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "newg.png",
                        "description": "Gourmet"
                    }
                ]
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "Gourmet",
                                    "imageId": "newg.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/theobroma-main-club-road-punjabi-bagh-delhi-58215",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "20779",
            "name": "Chaayos Chai+Snacks=Relax",
            "cloudinaryImageId": "2beebd3688e63e027ee8a11c1c8a72c8",
            "locality": "Chaayos Pacific Mall",
            "areaName": "Pacific Mall",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Bakery",
                "Beverages",
                "Chaat",
                "Desserts",
                "Home Food",
                "Italian",
                "Maharashtrian",
                "Snacks",
                "Street Food",
                "Sweets"
            ],
            "avgRating": 4.2,
            "feeDetails": {
                "restaurantId": "20779",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3100
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    },
                    {
                        "name": "BASE_TIME"
                    }
                ],
                "totalFee": 3100
            },
            "parentId": "281782",
            "avgRatingString": "4.2",
            "totalRatingsString": "5K+",
            "sla": {
                "deliveryTime": 34,
                "lastMileTravel": 2.3,
                "serviceability": "SERVICEABLE",
                "slaString": "34 mins",
                "lastMileTravelString": "2.3 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-07-23 23:00:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "20% OFF",
                "subHeader": "UPTO ₹50"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/chaayos-chai-snacks-relax-chaayos-pacific-mall-delhi-20779",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "55272",
            "name": "La Pino'z Pizza",
            "cloudinaryImageId": "zk3cneuiyjqbxoaunpuh",
            "locality": "Major Sudesh Kumar Marg",
            "areaName": "Rajouri Garden",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Pizzas",
                "Pastas",
                "Italian",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4,
            "feeDetails": {
                "restaurantId": "55272",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 4300
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    },
                    {
                        "name": "BASE_TIME"
                    }
                ],
                "totalFee": 4300
            },
            "parentId": "4961",
            "avgRatingString": "4.0",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 31,
                "lastMileTravel": 4,
                "serviceability": "SERVICEABLE",
                "slaString": "31 mins",
                "lastMileTravelString": "4.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-07-24 05:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹699",
                "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/la-pinoz-pizza-major-sudesh-kumar-marg-rajouri-garden-delhi-55272",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "185225",
            "name": "Wow! Momo",
            "cloudinaryImageId": "0984acc0ed7b914206dbbcb90297becc",
            "locality": "Fateh Nagar",
            "areaName": "Jail Road",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Tibetan",
                "Healthy Food",
                "Asian",
                "Chinese",
                "Snacks",
                "Continental",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 3.9,
            "feeDetails": {
                "restaurantId": "185225",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3100
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 3100
            },
            "parentId": "1776",
            "avgRatingString": "3.9",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 34,
                "lastMileTravel": 1.9,
                "serviceability": "SERVICEABLE",
                "slaString": "34 mins",
                "lastMileTravelString": "1.9 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-07-24 04:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹249",
                "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/wow-momo-fateh-nagar-jail-road-delhi-185225",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "11106",
            "name": "Pizza Hut",
            "cloudinaryImageId": "2b4f62d606d1b2bfba9ba9e5386fabb7",
            "locality": "Prem Nagar",
            "areaName": "Tilak Nagar",
            "costForTwo": "₹350 for two",
            "cuisines": [
                "Pizzas"
            ],
            "avgRating": 3.9,
            "feeDetails": {
                "restaurantId": "11106",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3100
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 3100
            },
            "parentId": "721",
            "avgRatingString": "3.9",
            "totalRatingsString": "5K+",
            "sla": {
                "deliveryTime": 33,
                "lastMileTravel": 1.5,
                "serviceability": "SERVICEABLE",
                "slaString": "33 mins",
                "lastMileTravelString": "1.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-07-24 01:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/pizza-hut-prem-nagar-tilak-nagar-delhi-11106",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "93905",
            "name": "NIC Ice Creams",
            "cloudinaryImageId": "c8b98c4064dc2fd6bdf350212e5f0bd5",
            "locality": "Uttam Nagar",
            "areaName": "Janakpuri",
            "costForTwo": "₹120 for two",
            "cuisines": [
                "Ice Cream",
                "Desserts"
            ],
            "avgRating": 4.6,
            "veg": true,
            "feeDetails": {
                "restaurantId": "93905",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3100
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 3100
            },
            "parentId": "6249",
            "avgRatingString": "4.6",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 25,
                "lastMileTravel": 2.1,
                "serviceability": "SERVICEABLE",
                "slaString": "25 mins",
                "lastMileTravelString": "2.1 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-07-24 00:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "EVERY ITEM",
                "subHeader": "@ ₹159"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/nic-ice-creams-uttam-nagar-janakpuri-delhi-93905",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "104565",
            "name": "Starbucks Coffee",
            "cloudinaryImageId": "4df3497f1460dfd1ecd8125222f6d362",
            "locality": "Subhash Nagar",
            "areaName": "Pacific Mall",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Beverages",
                "Cafe",
                "Snacks",
                "Desserts",
                "Bakery",
                "Ice Cream"
            ],
            "avgRating": 4.1,
            "feeDetails": {
                "restaurantId": "104565",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3100
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    },
                    {
                        "name": "BASE_TIME"
                    }
                ],
                "totalFee": 3100
            },
            "parentId": "195515",
            "avgRatingString": "4.1",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 34,
                "lastMileTravel": 2.3,
                "serviceability": "SERVICEABLE",
                "slaString": "34 mins",
                "lastMileTravelString": "2.3 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-07-23 23:59:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "30% OFF",
                "subHeader": "UPTO ₹75"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/starbucks-coffee-subhash-nagar-pacific-mall-delhi-104565",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "219496",
            "name": "Bikanervala",
            "cloudinaryImageId": "hf7ufcmehh6cbtktysl5",
            "locality": "C 2 Block",
            "areaName": "Janakpuri",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "Chinese",
                "North Indian",
                "South Indian",
                "Desserts",
                "Snacks"
            ],
            "avgRating": 3.9,
            "veg": true,
            "feeDetails": {
                "restaurantId": "219496",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3700
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 3700
            },
            "parentId": "45936",
            "avgRatingString": "3.9",
            "totalRatingsString": "5K+",
            "sla": {
                "deliveryTime": 29,
                "lastMileTravel": 3.5,
                "serviceability": "SERVICEABLE",
                "slaString": "29 mins",
                "lastMileTravelString": "3.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-07-24 00:45:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/bikanervala-c-2-block-janakpuri-delhi-219496",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "123197",
            "name": "Rollsking",
            "cloudinaryImageId": "qhgtix4iyy7sd59jb9ek",
            "locality": "B Block",
            "areaName": "Jail Road",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "North Indian",
                "Fast Food",
                "Beverages"
            ],
            "avgRating": 4,
            "feeDetails": {
                "restaurantId": "123197",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3100
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 3100
            },
            "parentId": "4697",
            "avgRatingString": "4.0",
            "totalRatingsString": "5K+",
            "sla": {
                "deliveryTime": 30,
                "lastMileTravel": 2.2,
                "serviceability": "SERVICEABLE",
                "slaString": "30 mins",
                "lastMileTravelString": "2.2 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-07-24 04:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/rollsking-b-block-jail-road-delhi-123197",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "443501",
            "name": "EatFit",
            "cloudinaryImageId": "ee4f041cd8611dccc19f4267783ab5ea",
            "locality": "Patel Nagar",
            "areaName": "Tilak Nagar",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Healthy Food",
                "Pizzas",
                "North Indian",
                "Thalis",
                "Biryani",
                "Chinese"
            ],
            "avgRating": 4.1,
            "feeDetails": {
                "restaurantId": "443501",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3100
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 3100
            },
            "parentId": "76139",
            "avgRatingString": "4.1",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 27,
                "lastMileTravel": 1.2,
                "serviceability": "SERVICEABLE",
                "slaString": "27 mins",
                "lastMileTravelString": "1.2 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-07-23 23:45:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "brand",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "brand"
                                }
                            }
                        ]
                    }
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹249",
                "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/eatfit-patel-nagar-tilak-nagar-delhi-443501",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "26414",
            "name": "Baskin Robbins - Ice Cream Desserts",
            "cloudinaryImageId": "85ccae4e3576f9330af102c46ca85395",
            "locality": "Block GG 2",
            "areaName": "Vikas puri",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Ice Cream"
            ],
            "avgRating": 4.3,
            "veg": true,
            "feeDetails": {
                "restaurantId": "26414",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3100
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 3100
            },
            "parentId": "5588",
            "avgRatingString": "4.3",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 18,
                "lastMileTravel": 1.4,
                "serviceability": "SERVICEABLE",
                "slaString": "18 mins",
                "lastMileTravelString": "1.4 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-07-24 04:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "30% OFF",
                "subHeader": "UPTO ₹75"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/baskin-robbins-ice-cream-desserts-block-gg-2-vikas-puri-delhi-26414",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "20539",
            "name": "Singla's Sweets, Bakery & Restaurant",
            "cloudinaryImageId": "f15e906ec1f1f2e8d4b83cc7b530c4c5",
            "locality": "Tilak Nagar",
            "areaName": "Tilak Nagar",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Sweets",
                "North Indian",
                "Chinese",
                "South Indian",
                "Italian",
                "Bakery"
            ],
            "avgRating": 4.1,
            "feeDetails": {
                "restaurantId": "20539",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3100
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 3100
            },
            "parentId": "2314",
            "avgRatingString": "4.1",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 33,
                "lastMileTravel": 1.2,
                "serviceability": "SERVICEABLE",
                "slaString": "33 mins",
                "lastMileTravelString": "1.2 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-07-23 23:30:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹125 OFF",
                "subHeader": "ABOVE ₹199",
                "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/singlas-sweets-bakery-and-restaurant-tilak-nagar-delhi-20539",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "6020",
            "name": "Gianis - Ice Cream, Shakes & Sundaes",
            "cloudinaryImageId": "ljh5ydiehnol71ujwvei",
            "locality": "1St Block",
            "areaName": "Vikaspuri",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Ice Cream",
                "Desserts",
                "Beverages",
                "Bakery"
            ],
            "avgRating": 4,
            "feeDetails": {
                "restaurantId": "6020",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3100
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 3100
            },
            "parentId": "380244",
            "avgRatingString": "4.0",
            "totalRatingsString": "5K+",
            "sla": {
                "deliveryTime": 19,
                "lastMileTravel": 1.3,
                "serviceability": "SERVICEABLE",
                "slaString": "19 mins",
                "lastMileTravelString": "1.3 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-07-24 02:00:00",
                "opened": true
            },
            "badges": {
                "textExtendedBadges": [
                    {
                        "iconId": "guiltfree/GF_Logo_android_3x",
                        "shortDescription": "options available",
                        "fontColor": "#7E808C"
                    }
                ]
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "",
                                    "fontColor": "#7E808C",
                                    "iconId": "guiltfree/GF_Logo_android_3x",
                                    "shortDescription": "options available"
                                }
                            }
                        ]
                    }
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/gianis-ice-cream-shakes-and-sundaes-1st-block-vikaspuri-delhi-6020",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "54413",
            "name": "Hira Sweets",
            "cloudinaryImageId": "ocrewrzptujvncpiyvmi",
            "locality": "Mayapuri",
            "areaName": "Janakpuri",
            "costForTwo": "₹600 for two",
            "cuisines": [
                "North Indian",
                "South Indian",
                "Chinese",
                "Continental",
                "Bakery",
                "Street Food",
                "Sweets",
                "Desserts",
                "Beverages"
            ],
            "avgRating": 4.1,
            "veg": true,
            "feeDetails": {
                "restaurantId": "54413",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3100
                    },
                    {
                        "name": "BASE_TIME"
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    }
                ],
                "totalFee": 3100
            },
            "parentId": "5155",
            "avgRatingString": "4.1",
            "totalRatingsString": "10K+",
            "sla": {
                "deliveryTime": 34,
                "lastMileTravel": 2.2,
                "serviceability": "SERVICEABLE",
                "slaString": "34 mins",
                "lastMileTravelString": "2.2 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-07-23 23:55:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/hira-sweets-mayapuri-janakpuri-delhi-54413",
            "type": "WEBLINK"
        }
    },
    {
        "info": {
            "id": "6481",
            "name": "Mad Over Donuts",
            "cloudinaryImageId": "4e093cbd10bcd8ceff3faefb8fbdf258",
            "locality": "PACIFIC MALL",
            "areaName": "Tagore Garden",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Desserts",
                "Sweets",
                "Bakery"
            ],
            "avgRating": 4.3,
            "feeDetails": {
                "restaurantId": "6481",
                "fees": [
                    {
                        "name": "BASE_DISTANCE",
                        "fee": 3100
                    },
                    {
                        "name": "ANCILLARY_SURGE_FEE"
                    },
                    {
                        "name": "BASE_TIME"
                    }
                ],
                "totalFee": 3100
            },
            "parentId": "611",
            "avgRatingString": "4.3",
            "totalRatingsString": "5K+",
            "sla": {
                "deliveryTime": 35,
                "lastMileTravel": 2.3,
                "serviceability": "SERVICEABLE",
                "slaString": "35 mins",
                "lastMileTravelString": "2.3 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2023-07-24 01:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "50% OFF",
                "subHeader": "UPTO ₹100"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT"
        },
        "analytics": {},
        "cta": {
            "link": "https://www.swiggy.com/restaurants/mad-over-donuts-pacific-mall-tagore-garden-delhi-6481",
            "type": "WEBLINK"
        }
    }
]
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
//applayout
const AppLayout = () => {
    return <div className="app">
        <Header />
        <Body />
    </div>
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);