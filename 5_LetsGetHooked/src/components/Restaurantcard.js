import { CDN_URL } from "../utils/constant";

const Restaurantcard=(props)=>{
    const resData={props}
    // {console.log(props)}
    // {console.log(resData)}
    return(
        <div className="res-card"> 
        <img className="resCard-log" src={CDN_URL+props?.resData?.info?.cloudinaryImageId}></img>
        <h3>{props?.resData?.info?.name}</h3>
        <h4>{props?.resData?.info?.cuisines.join(", ")}</h4>
        <h4>{props?.resData?.info?.costForTwo}</h4>
        <h4>{props?.resData?.info?.sla?.deliveryTime}</h4>
        </div>
    )
}

export default Restaurantcard;