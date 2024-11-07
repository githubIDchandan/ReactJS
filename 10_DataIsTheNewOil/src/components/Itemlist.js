import { CDN_URL } from "../utils/constant";


const Itemlist=({itemList})=>{
    console.log(itemList)
    return(
        <div>
            {
                itemList.map((item)=>{
                    return(
                        <div key={item.card.info.id} className="border-gray-300 border-b-2 text-left flex justify-between">
                           <div className="w-9/12">
                            <span>{item.card.info.name}</span>
                            <span>{"₹ "}{item.card.info.price}</span>
                            <p className="text-gray-600 text-sm">{item.card.info.description}</p>
                           </div>
                           <div className="w-3/12">
                            <button className="absolute bg-black text-white p-2 mx-8 w-28 opacity-65 rounded-lg shadow-lg">Add+</button>
                            <img className="rounded-lg shadow-2xl" alt="food" src={CDN_URL+item.card.info.imageId}></img>
                           </div>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Itemlist;