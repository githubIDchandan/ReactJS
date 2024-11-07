import { useState } from "react"
import Itemlist from "./Itemlist"


const RestaurantCategory=({item,showItem,handleIndex})=>{
    
    const [localshow,setLocalShow]=useState(false)

    const handleclick=()=>{
        handleIndex();
        setLocalShow(!localshow)
    }

    return(
        <div>
            <div className=" bg-gray-100 w-6/12 mx-auto my-2 shadow-lg p-4 rounded-lg">
                <div className=" w-full flex justify-between cursor-pointer" onClick={handleclick}>
                <h2 className="font-bold text-xl">{item.card.card.title}({item.card.card.itemCards.length})</h2>
                <h2 className="text-xl">⬇️</h2>
                </div>
                <div>
                    {(showItem&&localshow)&&<Itemlist itemList={item.card.card.itemCards}/>}
                </div>
            </div>
        </div>
    )
}

export default RestaurantCategory