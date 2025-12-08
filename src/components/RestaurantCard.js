import { CDN_URL } from "../utils/constants";
const RestaurantCard=(props)=>{

    const {resData}=props;
    const {name,cuisines,avgRating,costForTwo,cloudinaryImageId}=resData?.info;
    const {deliveryTime}=resData?.info?.sla;
    
    return(
        <div data-testid="resCard" className="p-4 m-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200" >
            <img 
            className="rounded-lg"
            src={CDN_URL+cloudinaryImageId}
            alt="res-logo"
            />
            <h3 className="font-bold py-4 texl-lg">{name}</h3>
            <h4>{cuisines.join(', ')}</h4>
            <h4>{avgRating} stars</h4>
            <h4>{costForTwo} </h4>
            <h4>{deliveryTime} minutes </h4>
        </div>
    );
}
export const withPromotedLabel=(RestaurantCard)=>{
    return (props)=>{
        return (
            <div>
                <label className="absolute bg-black m-2 p-2 text-white rounded-lg">Promoted</label>
                <RestaurantCard {...props}/>
            </div>
        )
    }
}
export default RestaurantCard;