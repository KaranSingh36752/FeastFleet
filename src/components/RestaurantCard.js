import { useContext } from "react"
import { IMG_CON_URL } from "../config"
import UserContext from "../utils/UserContext"

export const RestaurantCard = ({
    name, cuisines, cloudinaryImageId, avgRating,costForTwo,sla}) =>{

     const {user} = useContext(UserContext)   
    // const{name, cuisines, cloudinaryImageId, avgRating} = restaurant.data
    return (
        
    <>
    <div className="w-56 p-2 m-2 shadow-lg  grid transition-all duration-200 ease-in cursor-pointer gap-3 grid-flow-row justify-stretch items-center hover:scale-95 ">
         <img  className="w-full h-52 overflow-hidden rounded-xl" alt="img1" src={ IMG_CON_URL
              + cloudinaryImageId} />
         <h2 className="font-bold text-xl">{name}</h2>
         <h3 className="font-semibold text-md">{cuisines ? cuisines.join(", ") : "No cuisines available"}</h3>
         {/* <h3>{cuisines.join(", ")}</h3> */}
         <div className="flex justify-between mr-1 font-medium">
         <h4 className=" font-bold w-12 px-1 rounded-md">{avgRating}⭐</h4>
        <h4>{costForTwo}</h4>
        </div>
        <h4>{sla.slaString}</h4>
        {/* <h4>{user.name} - {user.email}</h4> */}
    </div>
         </>
    )
}