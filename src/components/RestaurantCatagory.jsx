import React, { useState } from 'react'
import ItemList from './ItemList'

const RestaurantCatagory = ({data,showItems,setShowIndex}) => {
    
    const handleClick=()=>{
     setShowIndex();
    }
  return (
    <div>
    <div className='mx-auto my-4 w-1/2 bg-gray-50 p-4 shadow-lg'>
        <div className=' flex justify-between cursor-pointer' onClick={handleClick}>
        <span className='font-bold text-lg'>{data.title} ({data.itemCards.length})</span>
        <span>🔽</span>
        </div>
        {showItems && <ItemList items={data.itemCards}/>}
    </div>
    
    </div>
  )
};

export default RestaurantCatagory