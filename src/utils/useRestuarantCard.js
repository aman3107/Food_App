import { useEffect, useState } from "react";
import { RES_API } from "./constants";

const useRestaurantCard = () => {
  const [resList, setResList] = useState([]);

  // Re rendering the list
  useEffect(() => {
    fetchData();
  }, []);

  // fetching the list
  const fetchData = async () => {
    const data = await fetch(RES_API);
    const json = await data.json();
    const restaurants =
      json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];
    setResList(restaurants);
  };
  return resList;
};

export default useRestaurantCard;
