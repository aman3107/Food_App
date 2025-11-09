import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  // Local State Variables for restaurant
  const [listOfRestaurants, setlistOfRestaurants] = useState([]);
  const [filteredListRes, setfilteredListRes] = useState([]);
  const [searchText, setSearchText] = useState("");

  // Re rendering the list
  useEffect(() => {
    fetchData();
  }, []);

  // fetching the list
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=28.7040592&lng=77.10249019999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const restaurantList =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];

    // setting the list data into restaurantlist
    setlistOfRestaurants(restaurantList);
    setfilteredListRes(restaurantList);
  };

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        {/* filtering the data based of rating */}
        <div className="search">
          <input
            type="text"
            className="search-box"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-btn"
            onClick={() => {
              const searchFilter = filteredListRes.filter((restaurant) =>
                restaurant.info.name
                  .toLowerCase()
                  .includes(searchText.toLowerCase())
              );
              setlistOfRestaurants(searchFilter);
            }}
          >
            Search
          </button>
        </div>
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = filteredListRes.filter(
              (res) => res.info.avgRating > 4.2
            );
            setlistOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        {/* removing the filter */}
        <span
          className="filter-remove"
          onClick={() => {
            setlistOfRestaurants(filteredListRes);
          }}
        >
          {" "}
          x{" "}
        </span>
      </div>
      {/*Updating the list data into res card */}
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard resData={restaurant} key={restaurant.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
