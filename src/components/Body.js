import ResCards from "./ResCard";
import { useState, useEffect } from "react";
import { Link } from "react-router";
import Shimmer from "./Shimmer";
import useStatusOnline from "../utils/useStatusOnline";

const Body = () => {
  // useState
  const [listofRes, setListofRest] = useState([]);
  const [filteredRes, setFilteredRes] = useState([]);
  const [typedText, setTypedText] = useState("");

  // useEffect
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://corsproxy.io/https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.63180058197356&lng=75.92417176812887&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setListofRest(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setFilteredRes(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onlineStatus = useStatusOnline();

  if (onlineStatus === false)
    return (
      <h1 className="mt-80 text-center text-red-300 text-3xl">
        You are offline!!
      </h1>
    );

  if (listofRes.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="body text-gray-100 min-h-screen px-20 pb-12 pt-70">
      <div className="filter-container flex items-center gap-8 mb-8">
        <div className="search-container">
          <input
            type="text"
            className="search-box px-2 py-1 border border-solid border-gray-400 rounded outline-0"
            value={typedText}
            onChange={(e) => {
              setTypedText(e.target.value);
            }}
          ></input>
          <button
            className="search-btn px-3 py-1 bg-blue-500 text-amber-50 ml-4 rounded cursor-pointer"
            onClick={(e) => {
              const filteredList = listofRes.filter((res) =>
                res.info.name.toLowerCase().includes(typedText.toLowerCase())
              );

              setFilteredRes(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn px-3 py-1 bg-blue-500 text-amber-50 ml-4 rounded cursor-pointer"
          onClick={() => {
            const filteredList = listofRes.filter(
              (res) => res.info.avgRating > 4
            );
            console.log(filteredList);
            setFilteredRes(filteredList);
          }}
        >
          Click to see top restaurants
        </button>
      </div>
      <div className="res-container grid gap-8 grid-cols-[repeat(auto-fill,minmax(300px,1fr))] items-stretch">
        {filteredRes.map((restaurant) => (
          <Link
            key={restaurant.info.id}
            to={"/restaurants/" + restaurant.info.id}
            className="h-full"
          >
            <ResCards
              resName={restaurant.info.name}
              rating={restaurant.info.avgRating}
              dTime={restaurant.info.sla.deliveryTime}
              cuisines={restaurant.info.cuisines}
              imageId={restaurant.info.cloudinaryImageId}
            />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
