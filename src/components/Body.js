import { API_URL, resturantlist, swiggy_api_URL } from "../config";
import { RestaurantCard } from "./RestaurantCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import ShimmerRes from "./ShimmerRes";

//props - properties
const Body = () => {
  const [allRestaurant, setallRestaurant] = useState([]);
  const [filteredRestaurant, setfilteredRestaurant] = useState([]);
  const [searchText, setSearchText] = useState("");
  const { user, setUser } = useContext(UserContext);

  // const [onClicked, setOnClicked] = useState("False")
  //empty dependedncy array => once after render
  // dep arrary [searchText] => once after inital render + then the everytime after the render (change in serach text)
  const handleSearch = () => {
    const Data = filterData(searchText, allRestaurant);
    setfilteredRestaurant(Data);
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSearch();
    }
  };

  useEffect(() => {
    //API CALL
    getResturants();
  }, []);

  console.log(searchText);
  const getResturants = async () => {
    const data = await fetch(
      API_URL
      //"https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.4765796&lng=76.5905317&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log(json);
    setallRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    setfilteredRestaurant(
      json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
    //console.log(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
  };

  const isOnline = useOnline();
  if (!isOnline) {
    return <h1>You are offline</h1>;
  }

  // not render component (early return)
  if (!allRestaurant) return null;

  return allRestaurant.length === 0 ? (
    <div className="w-4/5 mx-auto">
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 items-start">
      {Array(8)
        .fill()
        .map((_, i) => (
          <ShimmerRes key={i} />
        ))}
    </div>
  </div>
  ) : (
    <>
      <div className="bg-[] my-2 py-3 mx-10 flex justify-start  text-md">
        <input
          data-testid="search-input"
          type="text"
          className="pl-1 rounded-md hover:bg-[#89CFF0] hover:text-[#333333]"
          placeholder="Your fav restaurant..."
          value={searchText}
          onChange={(e) => {
            setSearchText(e.target.value);
          }}
          onKeyDown={handleKeyDown} // Handle Enter key press
        ></input>
        <button
          data-testid="search-btn"
          className="m-1 p-2 font-semibold bg-[#002244] text-[#FFFFFF] rounded-md transition ease-in duration-300 hover:-translate-y-1"
          onClick={handleSearch}
        >
          Search
        </button>
        {/* <input value={user.name} onChange={
            e => setUser({
                name : e.target.value,
                // email : e.target.email,
            })
        }
        ></input> */}
      </div>
      {/* <h1>{searchText}</h1> */}
      <div className=" flex flex-wrap justify-center" data-testid="res-list">
        {filteredRestaurant.map((restaurant) => {
          //resturantlist is array mapped to restaurant is object which will return
          return (
            <Link
              to={"/restaurant/" + restaurant?.info?.id}
              key={restaurant?.info?.id}
            >
              <RestaurantCard {...restaurant?.info} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
