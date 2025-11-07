import { useState } from "react";
import { resList } from "../utils/mockData";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [listOfRestaurants, setlistOfRestaurants] = useState(resList);

  return (
    <div className="body">
      <div className="filter">
        <button
          className="filter-btn"
          onClick={() => {
            const filteredList = listOfRestaurants.filter(
              (res) => res.info.avgRating > 4.2
            );
            setlistOfRestaurants(filteredList);
          }}
        >
          Top Rated Restaurants
        </button>
        <span
          className="filter-remove"
          onClick={() => {
            setlistOfRestaurants(resList);
          }}
        >
          {" "}
          x{" "}
        </span>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard resData={restaurant} key={restaurant.info.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
