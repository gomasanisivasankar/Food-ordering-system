import  { useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCatagory from "./RestaurantCatagory";

const RestaurantMenu = () => {
  const { resId } = useParams();

  const { resInfo, categories } = useRestaurantMenu(resId);
  const [showIndex, setShowIndex] = useState(null);

  if (!resInfo) return <Shimmer />;
  const info =resInfo?.cards?.[2]?.card?.card?.info || {};
  const { name, cuisines = [], costForTwoMessage } = info;
  return (
    <div className="text-center">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>

      <p className="font-bold text-lg">
        {cuisines.join(", ")} — {costForTwoMessage}
      </p>

      {categories.map((cart, index) => (
        <RestaurantCatagory
          key={cart.card.card.title}
          data={cart.card.card}
          showItems={index === showIndex}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
};

export default RestaurantMenu;
