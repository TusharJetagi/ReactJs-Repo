import React from "react";
import ReactDOM, { createRoot } from "react-dom/client";

const restaurants = [
  {
    id: "103267",
    name: "Chowpati Chinese",
    cloudinaryImageId: "rrtiga1mzb6fhiacz8jr",
    locality: "Mahavir Chowk Solapur",
    areaName: "Ratandeep Housing Society",
    costForTwo: "₹250 for two",
    cuisines: ["Chinese", "Fast Food", "Rolls & Wraps", "Beverages"],
    avgRating: 3.9,
    parentId: "62984",
    avgRatingString: "3.9",
    totalRatingsString: "3.1K+",
    sla: {
      deliveryTime: 32,
      lastMileTravel: 2.7,
      serviceability: "SERVICEABLE",
      slaString: "30-35 mins",
      lastMileTravelString: "2.7 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-09-06 22:30:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "Rxawards/_CATEGORY-Chinese.pngImage preview",
          description: "Delivery!",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "Delivery!",
                imageId: "Rxawards/_CATEGORY-Chinese.pngImage preview",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "10% OFF",
      subHeader: "UPTO ₹40",
      discountTag: "POCKET HERO",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "103639",
    name: "Rolls Mania - Rolls, Wraps & More",
    cloudinaryImageId: "xqsphzei2zupxqpwarv6",
    locality: "laxmi park",
    areaName: "Central Solapur",
    costForTwo: "₹200 for two",
    cuisines: ["Rolls & Wraps", "Fast Food", "Snacks", "Beverages"],
    avgRating: 4,
    parentId: "514939",
    avgRatingString: "4.0",
    totalRatingsString: "4.8K+",
    sla: {
      deliveryTime: 32,
      lastMileTravel: 3,
      serviceability: "SERVICEABLE",
      slaString: "30-35 mins",
      lastMileTravelString: "3.0 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-09-07 00:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹99",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "111020",
    name: "Hotel Mantralaya",
    cloudinaryImageId: "klhzokpsrrsgatqvo1qd",
    locality: "Employment Chowk",
    areaName: "Sidheshwar Peth",
    costForTwo: "₹350 for two",
    cuisines: [
      "North Indian",
      "South Indian",
      "Beverages",
      "Desserts",
      "Biryani",
    ],
    avgRating: 4.3,
    veg: true,
    parentId: "100181",
    avgRatingString: "4.3",
    totalRatingsString: "5.1K+",
    sla: {
      deliveryTime: 30,
      lastMileTravel: 4.5,
      serviceability: "SERVICEABLE",
      slaString: "30-40 mins",
      lastMileTravelString: "4.5 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-09-06 23:00:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "Rxawards/_CATEGORY-Thali.pngImage preview",
          description: "Delivery!",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "Delivery!",
                imageId: "Rxawards/_CATEGORY-Thali.pngImage preview",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "₹200 OFF",
      subHeader: "ABOVE ₹549",
      discountTag: "FLAT DEAL",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "103156",
    name: "Cafe Local Katta - Pizza Junction",
    cloudinaryImageId: "holfkkrlhcbhlpb2eozs",
    locality: "Hotgi Road",
    areaName: "Sainath Nagar",
    costForTwo: "₹250 for two",
    cuisines: ["Pizzas", "Fast Food", "Pastas", "Beverages", "Desserts"],
    avgRating: 4,
    parentId: "53540",
    avgRatingString: "4.0",
    totalRatingsString: "1.7K+",
    sla: {
      deliveryTime: 32,
      lastMileTravel: 1.8,
      serviceability: "SERVICEABLE",
      slaString: "30-40 mins",
      lastMileTravelString: "1.8 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-09-06 22:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "₹75 OFF",
      subHeader: "ABOVE ₹249",
      discountTag: "FLAT DEAL",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "403848",
    name: "Waffle Hut",
    cloudinaryImageId: "r0fskdguj4ivs8levxxv",
    locality: "Sushil Nager",
    areaName: "Jule",
    costForTwo: "₹250 for two",
    cuisines: ["Fast Food", "Desserts", "Beverages"],
    avgRating: 3.9,
    veg: true,
    parentId: "224866",
    avgRatingString: "3.9",
    totalRatingsString: "417",
    sla: {
      deliveryTime: 44,
      lastMileTravel: 2.9,
      serviceability: "SERVICEABLE",
      slaString: "40-45 mins",
      lastMileTravelString: "2.9 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-09-06 23:59:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "v1695133679/badges/Pure_Veg111.pngImage preview",
          description: "pureveg",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "pureveg",
                imageId: "v1695133679/badges/Pure_Veg111.pngImage preview",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹65",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "103153",
    name: "Hotel Jay Palace",
    cloudinaryImageId: "uhkfi0sqrrnellwponii",
    locality: "Hotigi Road",
    areaName: "Sainath Nagar",
    costForTwo: "₹350 for two",
    cuisines: [
      "Maharashtrian",
      "Chinese",
      "Biryani",
      "Mughlai",
      "Hyderabadi",
      "Desserts",
      "Beverages",
    ],
    avgRating: 4.1,
    veg: true,
    parentId: "99525",
    avgRatingString: "4.1",
    totalRatingsString: "3.3K+",
    sla: {
      deliveryTime: 25,
      lastMileTravel: 2,
      serviceability: "SERVICEABLE",
      slaString: "25-30 mins",
      lastMileTravelString: "2.0 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-09-06 23:00:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "v1695133679/badges/Pure_Veg111.pngImage preview",
          description: "pureveg",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "pureveg",
                imageId: "v1695133679/badges/Pure_Veg111.pngImage preview",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "₹100 OFF",
      subHeader: "ABOVE ₹299",
      discountTag: "FLAT DEAL",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "362861",
    name: "Little Cake Shop",
    cloudinaryImageId: "pivffy24qkbzmzz43bxm",
    locality: "Hotgi Road",
    areaName: "Solapur Locality",
    costForTwo: "₹300 for two",
    cuisines: ["Bakery", "Sweets"],
    avgRating: 4.3,
    parentId: "125432",
    avgRatingString: "4.3",
    totalRatingsString: "302",
    sla: {
      deliveryTime: 33,
      lastMileTravel: 3,
      serviceability: "SERVICEABLE",
      slaString: "30-35 mins",
      lastMileTravelString: "3.0 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-09-06 22:30:00",
      opened: true,
    },
    badges: {
      imageBadges: [
        {
          imageId: "v1695133679/badges/Pure_Veg111.pngImage preview",
          description: "pureveg",
        },
      ],
    },
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {
          badgeObject: [
            {
              attributes: {
                description: "pureveg",
                imageId: "v1695133679/badges/Pure_Veg111.pngImage preview",
              },
            },
          ],
        },
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "20% OFF",
      subHeader: "UPTO ₹50",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "174547",
    name: "Cheezy Bites",
    cloudinaryImageId: "8f3fb0b1e03ed7f40a06b9c884736557",
    locality: "Kamtam Nagar",
    areaName: "Paccha Peth",
    costForTwo: "₹250 for two",
    cuisines: [
      "Pizzas",
      "Burgers",
      "Rolls & Wraps",
      "Biryani",
      "Beverages",
      "Desserts",
    ],
    avgRating: 4.1,
    parentId: "59277",
    avgRatingString: "4.1",
    totalRatingsString: "660",
    sla: {
      deliveryTime: 37,
      lastMileTravel: 3.9,
      serviceability: "SERVICEABLE",
      slaString: "35-45 mins",
      lastMileTravelString: "3.9 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-09-06 23:59:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹99",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "378493",
    name: "Hotel Priyanka",
    cloudinaryImageId: "vmociml9el8k7hundhl1",
    locality: "Siddheshwar Peth",
    areaName: "Civil Chowk",
    costForTwo: "₹350 for two",
    cuisines: [
      "Biryani",
      "Kebabs",
      "Mughlai",
      "Chinese",
      "Barbecue",
      "Hyderabadi",
      "Afghani",
    ],
    avgRating: 4,
    parentId: "101180",
    avgRatingString: "4.0",
    totalRatingsString: "1.2K+",
    sla: {
      deliveryTime: 41,
      lastMileTravel: 4.4,
      serviceability: "SERVICEABLE",
      slaString: "40-50 mins",
      lastMileTravelString: "4.4 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-09-06 23:59:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "ITEMS",
      subHeader: "AT ₹45",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "103958",
    name: "Ameya Savji",
    cloudinaryImageId: "rv0xo8lqwkai4kwjtgev",
    locality: "Kalyan Nagar",
    areaName: "Jule Solapur",
    costForTwo: "₹250 for two",
    cuisines: [
      "North Indian",
      "Biryani",
      "Maharashtrian",
      "Hyderabadi",
      "Indian",
    ],
    avgRating: 3.9,
    parentId: "31519",
    avgRatingString: "3.9",
    totalRatingsString: "2.5K+",
    sla: {
      deliveryTime: 32,
      lastMileTravel: 1.5,
      serviceability: "SERVICEABLE",
      slaString: "30-35 mins",
      lastMileTravelString: "1.5 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-09-06 23:59:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "40% OFF",
      subHeader: "UPTO ₹80",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
  {
    id: "103962",
    name: "Hotel Supraja Savji",
    cloudinaryImageId: "efa9eb6088e4d33a26168fd6c0b8d09c",
    locality: "Hotgi Road",
    areaName: "Ratandeep Housing Society",
    costForTwo: "₹200 for two",
    cuisines: ["North Indian", "Biryani", "Salads"],
    avgRating: 3.7,
    parentId: "102826",
    avgRatingString: "3.7",
    totalRatingsString: "669",
    sla: {
      deliveryTime: 36,
      lastMileTravel: 3,
      serviceability: "SERVICEABLE",
      slaString: "35-40 mins",
      lastMileTravelString: "3.0 km",
      iconType: "ICON_TYPE_EMPTY",
    },
    availability: {
      nextCloseTime: "2025-09-06 23:00:00",
      opened: true,
    },
    badges: {},
    isOpen: true,
    type: "F",
    badgesV2: {
      entityBadges: {
        imageBased: {},
        textBased: {},
        textExtendedBadges: {},
      },
    },
    aggregatedDiscountInfoV3: {
      header: "₹300 OFF",
      subHeader: "ABOVE ₹1499",
      discountTag: "FLAT DEAL",
    },
    differentiatedUi: {
      displayType: "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
      differentiatedUiMediaDetails: {
        lottie: {},
        video: {},
      },
    },
    reviewsSummary: {},
    displayType: "RESTAURANT_DISPLAY_TYPE_DEFAULT",
    restaurantOfferPresentationInfo: {},
    externalRatings: {
      aggregatedRating: {
        rating: "--",
      },
    },
    ratingsDisplayPreference: "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY",
  },
];

// Main Component
const App = () => {
  return (
    <div className="app">
      <Header />
      <Body />
    </div>
  );
};

//Header Component
const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://png.pngtree.com/template/20210519/ourmid/pngtree-food-delivery-logo-fitness-template-image_525748.png"
        ></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};

//Cards Component
const ResCards = (props) => {
  const { resName, rating, dTime, cuisines, imageId } = props;
  return (
    <div className="res-card">
      <img
        src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${imageId}`}
      />
      <h3>{resName}</h3>
      <p className="rating">
        ⭐ {rating} ({dTime} mins)
      </p>
      <p className="cuisins">{cuisines.join(", ")}</p>
    </div>
  );
};

//Body Component
const Body = () => {
  return (
    <div className="body">
      <div className="search-container">
        <input type="text"></input>
        <button>Search</button>
      </div>
      <div className="res-container">
        {restaurants.map((restaurant) => (
          <ResCards
            key={restaurant.id}
            resName={restaurant.name}
            rating={restaurant.avgRating}
            dTime={restaurant.sla.deliveryTime}
            cuisines={restaurant.cuisines}
            imageId={restaurant.cloudinaryImageId}
          />
        ))}
      </div>
    </div>
  );
};

const root = createRoot(document.querySelector(".root"));
root.render(<App />);
