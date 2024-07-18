import { useDispatch } from "react-redux";
import { IMG_CON_URL } from "../config";
import { removeItem, addItem } from "./cartSlice";

const FoodItem = ({ name, description, id, imageId, price }) => {
  const dispatch = useDispatch();

  const removeItemOnClick = () => {
    dispatch(removeItem(id));
  };

  const addItemOnClick = () => {
    dispatch(addItem({ name, description, id, imageId, price }));
  };

  return (
    <div className="w-6/12 h-28 m-3 p-3 border-2 border-black shadow-2xl">
      <div className="flex overflow-hidden">
        <img className="rounded-md h-16" src={IMG_CON_URL + imageId} alt={name} />
        <div className="mx-2 overflow-hidden whitespace-nowrap text-clip">
          <h2 className="text-xl font-semibold">
            {name} - ₹{price / 100}
          </h2>
          <p className="text-sm font-serif text-left">{description}</p>
          <div className="flex space-x-2">
            <button
              className="px-3 py-1 font-semibold bg-black text-white shadow-lg rounded-md hover:bg-white hover:text-black"
              onClick={removeItemOnClick}
            >
              Remove -
            </button>
            <button
              className="px-3 py-1 font-semibold bg-black text-white shadow-lg rounded-md hover:bg-white hover:text-black"
              onClick={addItemOnClick}
            >
              Add +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;

