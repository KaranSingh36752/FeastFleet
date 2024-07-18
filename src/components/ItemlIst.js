import { useDispatch } from "react-redux";
import { IMG_CON_URL } from "../config";
import { addItem } from "./cartSlice";
const ItemList = ({ items }) => {
    console.log(items);
    const dispatch = useDispatch();

    const addItemOnClick = (item) => {
        dispatch(addItem(item))
    }
    return (
        <div>
            {items.map((item) => (
                
                <div data-testid="menu" className="border-b-2 border-gray-400 my-2 flex justify-between" key={item.card.info.id}>
                    <div className="w-9/12">
                    <div className="mx-4 py-2 text-l font-semibold ">
                        <span>{item.card.info.name} </span> {" - "} <span>₹ {item.card.info.price/100 || item.card.info.defaultPrice/100}</span>
                        
                    </div>
                    <p className="text-sm mx-4">{item.card.info.description}</p></div>
                    
                    <div className="w-3/12 relative py-2 rounded-sm shadow-lg ">
                    <img className="w-11/12 rounded-md" src={IMG_CON_URL + item.card.info.imageId} />
                    <div>
                        <button data-testid="addBtn" className="absolute px-3 mx-12  font-semibold bg-black text-white shadow-lg rounded-md 
                         hover:bg-white hover:text-black" onClick={()=> addItemOnClick(item)}>
                            Add+
                            </button>
                    </div>
                    </div>
                 </div>
                
            ))}
        </div>
    )
}

export default ItemList;