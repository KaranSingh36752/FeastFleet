import React, { useState } from 'react';
import dropDown from "../utils/images/dropdown.png";
import dropUp from "../utils/images/dropup.png";
import ItemList from "./Itemlist";

const RestaurantCategory =({data})=> {
   const { title, itemCards } = data;
   const [show ,setShow] = useState(false);
   const handleClick =() =>{
      setShow(!show)
   }
   //console.log(data)
  return (
    <>
    <div className='mx-auto my-2  p-2 w-6/12 bg-slate-100 rounded-lg '>
    <div className='mx-auto my-2  p-3 w-full bg-slate-200 font-semibold text-l shadow-md cursor-pointer flex justify-between rounded-md'
    onClick={handleClick}>
        <span>
            {title} ({itemCards.length})
        </span>
        { !show ? ( <img className='size-7' src={dropDown} alt="dropDown"/>
        ) : (
            <img className='size-8' src={dropUp} alt="dropUP"/>
        )}
    </div>
    {show && <ItemList items={itemCards}/>}
    </div>
    </>
  )
}

export default RestaurantCategory;