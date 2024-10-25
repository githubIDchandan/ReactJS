import { useEffect, useState } from "react";


export const useRestaurantMenu=(resId)=>{
       const [resMenu,setResMenu]=useState(null);

       useEffect(()=>{
          fetchData();
       },[])

       const fetchData=async()=>{
        const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.747514&lng=76.640464&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER")
        const json=await data.json();
        setResMenu(json.data);
       }



    return resMenu;
}


