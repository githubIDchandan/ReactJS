import { useDispatch, useSelector } from "react-redux";
import Itemlist from "./Itemlist";
import { clearCart } from "../store/cartSlice";




const Cart=()=>{
    
   const cartItem=useSelector((store)=>store.cart.items);
   console.log(cartItem)

   const dispatch=useDispatch();

   const clearCartHandler=()=>{
       dispatch(clearCart())
    
   }

    return(
        <div>
           <div className="text-center m-2 p-4">
            <h1 className="font-bold text-2xl m-4">Cart</h1>
            <button className="bg-black text-white p-4 rounded-lg" onClick={clearCartHandler}>Clear Cart</button>
            <div className="w-6/12 m-auto bg-emerald-100 rounded-lg">
                <Itemlist  itemList={cartItem}/>
            </div>
           </div>
        </div>
    )
}

export default Cart;