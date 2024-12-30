import { useDispatch } from "react-redux";
import { addItems, removeItems } from "../utils/cartSlice";

const MenuItems = (props) => {
  const { items, CanShow } = props;
  const dispatch = useDispatch();
  return (
    <div className="menu items inside caragory">
      {items.map((item) => {
        if (CanShow === false) return;
        else
          return (
            <div className="flex justify-between border-b-2">
              <div className="m-4 p-4 text-start">
                <div className="text-info w-9/12">
                  <div className="font-semibold font-sans text-gray-800">
                    {item?.card?.info?.name}
                  </div>
                  <div className="font-semibold font-mono text-gray-700">
                    ₹{item?.card?.info?.defaultPrice / 100}
                  </div>
                  <div className="my-4 text-gray-600 font-sans w-64">
                    {item?.card?.info?.description}
                  </div>
                </div>
              </div>
              <div className="m-4 p-4">
                <button
                  className="m-2 border-2 bg-green-400 hover:bg-green-500 shadow-sm shadow-gray-200 h-11 w-auto rounded-lg p-2 text-white"
                  onClick={() => {
                    dispatch(addItems(item));
                  }}
                >
                  Add
                </button>
                <button
                  className="m-2 border-2 bg-green-400 hover:bg-green-500 shadow-sm shadow-gray-200 h-11 w-auto rounded-lg p-2 text-white"
                  onClick={() => {
                    dispatch(removeItems());
                  }}
                >
                  Remove
                </button>
              </div>
            </div>
          );
      })}
    </div>
  );
};
export default MenuItems;
