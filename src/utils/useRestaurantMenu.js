import { useState, useEffect } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    if (resId) fetchMenu();
  }, [resId]);

  const fetchMenu = async () => {
    try {
      console.log("Fetching menu for:", resId);

      const res = await fetch(`${MENU_API}${resId}`);
      const json = await res.json();

      const data = json?.data;
      if (!data) return;

      setResInfo(data);

      let regularSection = null;

      for (const card of data.cards || []) {
        if (card?.groupedCard?.cardGroupMap?.REGULAR) {
          regularSection = card.groupedCard.cardGroupMap.REGULAR;
          break;
        }
        if (card?.card?.card?.cardGroupMap?.REGULAR) {
          regularSection = card.card.card.cardGroupMap.REGULAR;
          break;
        }
      }

      if (!regularSection) {
        console.warn("REGULAR menu section missing");
        setCategories([]);
        return;
      }

      const allCards = regularSection.cards || [];
      const carts = allCards.filter(
        (c) =>
          c?.card?.card?.["@type"] ===
          "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      );

      setCategories(carts);
    } catch (err) {
      console.error("Menu API Error:", err);
    }
  };

  return { resInfo, categories };
};

export default useRestaurantMenu;
