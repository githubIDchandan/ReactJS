import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer"
import { useRestaurantMenu } from "../utils/useRestaurantMenu";
import RestaurantCategory from "./RestaurantCategory";


const Restaurantmenu=()=>{

   const {resId}=useParams();
   const resMenu=useRestaurantMenu(resId);
   const [showIndex,setShowIndex]=useState(0)
  

   
   
   
    const categories=resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((item)=>{
        return item?.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    })
  
    return(
        <div className="text-center m-5">
            <h3 className="font-bold text-2xl">{resMenu?.cards[2]?.card?.card?.info?.name}</h3>
            <p className="font-bold text-lg">{resMenu?.cards[2].card?.card?.info?.cuisines.join(" , ")}</p>
            {
                categories?.map((item,index)=>{
                    return <RestaurantCategory item={item} showItem={index===showIndex?true:false} handleIndex={()=>{
                        return setShowIndex(index);
                    }} />
                })
            }
        </div>
    )
}

export default Restaurantmenu;