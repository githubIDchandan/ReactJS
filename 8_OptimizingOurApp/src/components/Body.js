import Restaurantcard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import  useOnlineStatus  from "../utils/useOnlineStatus";

const Body=()=>{

  const [listOfRes,setListOfRes]=useState([]);
  const [searchText,setSearchText]=useState([]);

  const [filteredRes,setFilteredRes]=useState([]);

// it is normal js variable.
    // let listOfRes=[];
//    console.log(resList)

     const onlineStatus = useOnlineStatus();

   useEffect(()=>{
       getData();
   },[])

   const getData=async()=>{
    const data= await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=30.7486287&lng=76.64145169999999&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json= await data.json();

    // console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)
    setListOfRes(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    setFilteredRes(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants)

   }
   if(listOfRes.length===0){
    return<Shimmer/>
   }
    
    if(onlineStatus===false){
        return<h1>Looks Like Offline Please Check Your Internet Connection!!!</h1>
    }


    return(
        <div className="res">
            <div className="parentSearch">
                <div className="search">
                    <input type="text" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value)
                    }}></input>
                    <button onClick={()=>{
                      const filteredList=  listOfRes.filter((item)=>{
                            return item.info.name.toLowerCase().includes(searchText);
                        })
                        setFilteredRes(filteredList)
                    }}>search</button>
                </div>
                <div>
                <div>
               <button className="filter-btn" onClick={()=>{
                const filterRes=listOfRes.filter((item)=>{
                    return item.info.avgRating>4.5;
                })
                // console.log(listOfRes)
                setFilteredRes(filterRes)
               }}>Top Rated Restaurant</button>
            </div>
                </div>
            </div>
            <div className="res-container">
                {filteredRes.map((resCard)=>{
                    return <Link to={"/restaurant/"+resCard.info.id}><Restaurantcard key={resCard.info.id} resData={resCard}/></Link>
                })}
                 {/* <Restaurantcard resData={resList[0]}/>
                 <Restaurantcard resData={resList[1]}/> */}
                 
            </div>
        </div>
    )
}

export default Body;