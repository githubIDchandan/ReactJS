import { useContext } from "react";
import { CDN_URL } from "../utils/constant";
import usercontext from "../utils/UserContext";

const Restaurantcard=(props)=>{
    const resData={props}
    // {console.log(props)}
    // {console.log(resData)}
    const {loggedInUser}=useContext(usercontext)
    return(
        <div className="w-[200px] m-2 rounded-lg" style={{backgroundColor:"#f0f0f0"}}> 
        <img className="rounded-lg w-[180px] ml-3 h-[180px]"  src={CDN_URL+props?.resData?.info?.cloudinaryImageId}></img>
        <h3 className="font-bold text-center">{props?.resData?.info?.name}</h3>
        <div className="">
        <h4 className="text-center">{props?.resData?.info?.cuisines.join(", ")}</h4>
        <h4 className="text-center">{props?.resData?.info?.costForTwo}</h4>
        <h4 className="text-center">{props?.resData?.info?.sla?.deliveryTime}mins</h4>
        <h4 className="font-bold text-center">({loggedInUser})</h4>
        </div>
        </div>
    )
}


export const withPromotedLabel=(Restaurantcard)=>{
    return (props)=>{
          return(<div>
            <label className="bg-slate-900 text-white rounded-lg w-24 absolute text-center">Promoted</label>
            <Restaurantcard resData={props.resData}/>
         </div>
          )
    }
}


export default Restaurantcard;