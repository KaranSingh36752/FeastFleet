import { useEffect, useState } from "react";
import { json, useParams } from "react-router-dom";
import { IMG_CON_URL } from "../config";
import Shimmer from "./shimmer";
import useRestaurant from "../utils/useRestaurant";
import RestaurantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const resParams = useParams();
  const { resId } = resParams;

  const Menu = useRestaurant(resId);
 console.log(Menu);
  if (!Menu) return <Shimmer />;
  const { name, cuisines, avgRating, areaName, city, cloudinaryImageId, logo } =
    Menu?.cards[2]?.card?.card?.info;
  //const {itemCards} = Menu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;
  const categories =
    Menu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  //console.log(categories);
  return (
    <>
      <div className="m-5 p-3 bg-white rounded shadow-lg flex flex-wrap  mb-6">
        <img
          className="size-[250px] rounded-md shadow-md"
          alt="img1"
          src={IMG_CON_URL + cloudinaryImageId}
        />
        <div>
          {/* <img src={IMG_CON_URL + logo}/> */}
          <h1 className="text-3xl mx-3 font-bold  ">{name}</h1>
          <h2 className="text-xl mx-3">
            {cuisines ? cuisines.join(", ") : "No cuisines available"}
          </h2>
          <h3 className="text-l mx-3">{avgRating}⭐</h3>
          <h3 className="text-l mx-3">{areaName}</h3>
          <h3 className="text-l mx-3">{city}</h3>
        </div>
      </div>
      {categories.map((category) => (
        <RestaurantCategory
          key={category?.card?.card.title}
          data={category?.card?.card}
        />
      ))}

      <div>
        {/* <ul>
    {itemCards.map(item => 
    <li key= {item?.card?.info?.id}>
      {item?.card?.info?.name} - {"Rs."}{item?.card?.info?.price/100 || item?.card?.info?.defaultPrice/100}
      </li>)}
    
  </ul> */}
      </div>
    </>
  );
};

export default RestaurantMenu;
