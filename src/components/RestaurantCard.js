import { CDN_URL } from "../utils/constants";

const RestaurantCard = ({ resData }) => {
  if (!resData?.info) return null;

  const { name,cuisines = [],avgRating,costForTwo,cloudinaryImageId,sla,} = resData.info;
  if (cloudinaryImageId === "rng/md/carousel/production/indian101") {
    return null;
  }
  const deliveryTime = sla?.deliveryTime;
  const imageUrl = cloudinaryImageId? CDN_URL + cloudinaryImageId: "/placeholder-restaurant.png";

  return (
    <div
      data-testid="resCard"
      className="relative p-4 m-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200"
    >
      <img
        className="rounded-lg w-full h-40 object-cover"
        src={imageUrl}
        alt={name}
        onError={(e) => {
          e.target.src = "/placeholder-restaurant.png"; 
        }}
      />

      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4 className="truncate">{cuisines.join(", ")}</h4>
      <h4>⭐ {avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime} mins</h4>
    </div>
  );
};


export const withPromotedLabel = (CardComponent) => {
  return (props) => (
    <div className="relative overflow-visible">
      <span className="absolute top-0 left-0 z-10 bg-black text-white m-2 px-2 py-1 rounded-lg text-sm">
        PROMOTED
      </span>
      <CardComponent {...props} />
    </div>
  );
};


export default RestaurantCard;