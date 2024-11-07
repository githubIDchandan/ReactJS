import Restaurantcard , {withPromotedLabel} from "./Restaurantcard";
import { useContext, useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import  useOnlineStatus  from "../utils/useOnlineStatus";
import usercontext from "../utils/UserContext";

const Body=()=>{

  const [listOfRes,setListOfRes]=useState([]);
  const [searchText,setSearchText]=useState([]);

  const [filteredRes,setFilteredRes]=useState([]);
   
  const {loggedInUser,setUserName}=useContext(usercontext)

     const onlineStatus = useOnlineStatus();
     const PromotedRestaurant=withPromotedLabel(Restaurantcard)

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
            <div className="flex">
                <div className="">
                    <input className="border border-solid border-black p-1 m-4" type="text" value={searchText} onChange={(e)=>{
                        setSearchText(e.target.value)
                    }}></input>
                    <button className="bg-black text-white px-4 py-2 rounded-lg shadow-lg" onClick={()=>{
                      const filteredList=  listOfRes.filter((item)=>{
                            return item.info.name.toLowerCase().includes(searchText);
                        })
                        setFilteredRes(filteredList)
                    }}>search</button>
                </div>
                <div>
                <div>
               <button className="bg-black text-white px-4 py-2 my-3 mx-5 rounded-lg shadow-lg" onClick={()=>{
                const filterRes=listOfRes.filter((item)=>{
                    return item.info.avgRating>4.5;
                })
                // console.log(listOfRes)
                setFilteredRes(filterRes)
               }}>Top Rated Restaurant</button>

               
               <label>UserName: </label>
               <input className="border border-black" value={loggedInUser} onChange={(e)=>setUserName(e.target.value)}></input>

            </div>
          
                
         
                </div>
            </div>
            <div className="flex flex-wrap">
                {filteredRes.map((resCard)=>{
                    return <Link to={"/restaurant/"+resCard.info.id}>
                            { console.log(resCard.info.avgRating)}
                        {resCard?.info?.avgRating<4.4?<Restaurantcard key={resCard.info.id} resData={resCard}/>:<PromotedRestaurant key={resCard.info.id} resData={resCard}/>}
                        
                        </Link>
                })}
                 {/* <Restaurantcard resData={resList[0]}/>
                 <Restaurantcard resData={resList[1]}/> */}
                 
            </div>
        </div>
    )
}

export default Body;