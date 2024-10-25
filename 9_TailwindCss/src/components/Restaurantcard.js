import { CDN_URL } from "../utils/constant";

const Restaurantcard=(props)=>{
    const resData={props}
    // {console.log(props)}
    // {console.log(resData)}
    return(
        <div className="w-[200px] m-2 rounded-lg" style={{backgroundColor:"#f0f0f0"}}> 
        <img className="rounded-lg w-[180px] ml-3 h-[180px]"  src={CDN_URL+props?.resData?.info?.cloudinaryImageId}></img>
        <h3 className="font-bold">{props?.resData?.info?.name}</h3>
        <div className="">
        <h4>{props?.resData?.info?.cuisines.join(", ")}</h4>
        <h4>{props?.resData?.info?.costForTwo}</h4>
        <h4>{props?.resData?.info?.sla?.deliveryTime}mins</h4>
        </div>
        </div>
    )
}

export default Restaurantcard;