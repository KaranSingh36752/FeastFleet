import { FETCH_MENU_URL } from "../config";
import { useState , useEffect } from "react";

const useRestaurant = (resId) => {
    const [Menu ,setMenu] = useState(null);
    
    //APIcall
    useEffect(()=>{
        getRestaurantInfo();
    },[]);
    
    const getRestaurantInfo = async () => {
        const data = await fetch(
           FETCH_MENU_URL + resId
            );
        // Get restaurant info using the id passed in through the url parameters.
        const json = await data.json();
        console.log(json);
        //FOR RESTAURANT INFO 
        setMenu(json.data);
        //for menu
      };

       return Menu;
};

export default useRestaurant;
