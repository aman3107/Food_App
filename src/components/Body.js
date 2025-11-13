import { useState, useEffect } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router";

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
    const data = await fetch("https://namastedev.com/api/v1/listRestaurants");
    const json = await data.json();
    const restaurantList =
      json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
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
              searchFilter.length === 0
                ? setfilteredListRes(filteredListRes)
                : setlistOfRestaurants(searchFilter);
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
          <Link
            to={"/restaurants/" + restaurant.info.id}
            key={restaurant.info.id}
            className="res-link"
          >
            {" "}
            <RestaurantCard resData={restaurant} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
