import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import RestaurantCard,{withPromotedLabel} from "./RestaurantCard";
import { Link } from "react-router-dom";
import { RESTAURANT_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [restaurantList, setRestaurantList] = useState([]);
  const {loggedInUser,setUserName}=useContext(UserContext);
  const [searchText, setSearchText] = useState("");
  const [filteredRestaurant, setFilteredRestaurant] = useState([]);
  const RestaurantCardPromoted=withPromotedLabel(RestaurantCard)
  const fetchData = async () => {
    const data = await fetch(RESTAURANT_API, { cache: "no-store" });
    const json = await data.json();

    const restaurants =
      json?.data?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants || [];

    setRestaurantList(restaurants);
    setFilteredRestaurant(restaurants);
  };

  useEffect(() => {
    fetchData();
  }, []);

  
  const OnlineStatus = useOnlineStatus();
  if (OnlineStatus === false)
    return <h1>You are OFFLINE. Please check your internet connection.</h1>;

  return filteredRestaurant.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex">
        <div className="m-4 p-4">
          <input 
            type="text"
            data-testid="SearchInput"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button className="px-4 m-4 py-2 bg-green-300 rounded-lg"
            onClick={() => {
              const filtered = restaurantList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurant(filtered);
            }}
          >
            Search
          </button>
        </div>
          <div className="m-4 p-4 flex items-center">
            
        <button
          className="px-4 py-2 bg-gray-100"
          onClick={() => {
            const topRated = restaurantList.filter(
              (res) => res.info.avgRating > 4.5
            );
            setFilteredRestaurant(topRated);
          }}
        >
          Top Rated Restaurants
        </button>
          </div>
          <div className="m-4 p-4 flex items-center">
            <label>UserName:  </label>
            <input
             className="border border-black p-2"
             value={loggedInUser}
             onChange={(e)=>setUserName(e.target.value)} 
            />
          </div>
      </div>

      <div className="flex flex-wrap">
        {filteredRestaurant.map((restaurant) => (
          <Link
            key={restaurant?.info?.id}
            to={"/restaurants/" + restaurant?.info?.id}
          >
            {
              restaurant.info.avgRating>4.5?(<RestaurantCardPromoted resData={restaurant}/>):<RestaurantCard resData={restaurant} />
            }
            
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
