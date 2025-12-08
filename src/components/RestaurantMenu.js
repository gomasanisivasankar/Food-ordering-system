import React, { useEffect,useState } from 'react'
import Shimmer from './Shimmer';
import { useParams } from 'react-router-dom';

import useRestaurantMenu from "../utils/useRestaurantMenu"
import RestaurantCatagory from './RestaurantCatagory';
const RestaurantMenu = () => {

    const { resId } = useParams();
    console.log(resId)
   const [showIndex,setShowIndex]=useState(null)
   const resInfo=useRestaurantMenu(resId);
    if(resInfo===null)return <Shimmer/>

    const {name,cuisines,costForTwoMessage}=resInfo?.cards?.[2]?.card?.card?.info;
    const {itemCards}=resInfo.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[2]?.card?.card;
    const catagories=resInfo.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
  
  return (
    <div className='text-center'>
        <h1 className='font-bold my-6 text-2xl'>{name}</h1>
        <p className='font-bold text-lg'>{cuisines.join(", ")}:{costForTwoMessage}</p>
        {catagories.map((catagory,index)=><RestaurantCatagory 
        key={index} 
        data={catagory.card?.card}
        showItems={index===showIndex?true:false}
        setShowIndex={()=>setShowIndex(index)}
        />)}
    </div>
  )
} 

export default RestaurantMenu;