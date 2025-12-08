import { useState, useEffect } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    if (resId) {          
      fetchData();
    }
  }, [resId]);            

  const fetchData = async () => {
    try {
      console.log("resId:", resId);  

      const data = await fetch(MENU_API + resId);
      if (!data.ok) {
        console.error("API Error:", data.status);
        return;
      }

      const json = await data.json();
      

      setResInfo(json?.data || null);
    } catch (error) {
      console.error("Error in fetchData:", error);
    }
  };

  return resInfo;
};

export default useRestaurantMenu;
