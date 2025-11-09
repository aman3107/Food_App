import { CDN_URL } from "../utils/constants";
const RestaurantCard = (props) => {
  const { resData } = props;
  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    resData.info;
  return (
    <div className="res-card">
      <img className="res-img" src={CDN_URL + cloudinaryImageId} />
      <h1 className="res-title">{name}</h1>
      <h4 className="res-cuisine">{cuisines.join(", ")}</h4>
      <h4 className="res-rating">
        {avgRating}
        {[...Array(Math.floor(avgRating))].map((e, i) => {
          return <span key={i}>⭐</span>;
        })}
        {avgRating >= 4.5 && <span>✨</span>}
      </h4>
      <h4 className="res-amount">{costForTwo}</h4>
      <h4 className="res-time">{sla.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
