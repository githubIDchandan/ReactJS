import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Shimmer from "./Shimmer"
import { useRestaurantMenu } from "../utils/useRestaurantMenu";


const Restaurantmenu=()=>{

//    const [resMenu,setResMenu]=useState(null);
//    let resMenu=null;
   const {resId}=useParams();

   const resMenu=useRestaurantMenu(resId);
    // useEffect(()=>{
    //     getMenuData();
    // },[]);
    console.log("res-menu Called")
   
    // const getMenuData=async()=>{
    //     const data=await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=30.747514&lng=76.640464&restaurantId="+resId+"&catalog_qa=undefined&submitAction=ENTER");
    //     const json=await data?.json();
    //     // console.log(json)
    //     setResMenu(json?.data)
    //     // resMenu=json?.data;
    //     // console.log(resMenu)
        
    // }
    // if(resMenu===null){
    //     return<Shimmer/>
    // }

    return(
        <div>
            {/* <h1>{resMenu.data.cards[]}</h1> */}
            <h3>{resMenu?.cards[2]?.card?.card?.info?.name}</h3>
            <p>{resMenu?.cards[2].card?.card?.info?.cuisines.join(" , ")}</p>

            {resMenu?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map((item)=>{
                     return<li key={item.card.info.id}>{item.card.info.name}{"- ₹"}{item.card.info.price/100||item.card.info.defaultPrice/100}</li>
            })}
            
        </div>
    )
}

export default Restaurantmenu;