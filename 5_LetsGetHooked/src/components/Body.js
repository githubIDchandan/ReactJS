import Restaurantcard from "./RestaurantCard";
import resList from "../utils/mockData";
import { useState } from "react";

const Body=()=>{

  const [listOfRes,setListOfRes]=useState(resList)

// it is normal js variable.
    // let listOfRes=[];
//    console.log(resList)
    return(
        <div className="res">
            <div>
               <button className="filter-btn" onClick={()=>{
                const filterRes=resList.filter((item)=>{
                    return item.info.avgRating>4.5;
                })
                // console.log(listOfRes)
                setListOfRes(filterRes)
               }}>Top Rated Restaurant</button>
            </div>
            <div className="res-container">
                {listOfRes.map((resCard)=>{
                    return <Restaurantcard key={resCard.info.id} resData={resCard}/>
                })}
                 {/* <Restaurantcard resData={resList[0]}/>
                 <Restaurantcard resData={resList[1]}/> */}
                 
            </div>
        </div>
    )
}

export default Body;