import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";

const MenuItems = (props) => {
  const { items, CanShow } = props;
  const dispatch = useDispatch()
  return (
    <div className="menu items inside caragory">
      {items.map((item) => {
        if(CanShow===false) return;
        else return (
          <div className="m-4 p-4 border-b-2 border-gray-300 text-start" onClick={()=>{
            dispatch(addItems(item?.card?.info?.name));
          }}>
            <div className="text-info w-9/12">
              <div className="font-semibold font-sans text-gray-800 ">{item?.card?.info?.name}</div>
              <div className="font-semibold font-mono text-gray-700">₹{item?.card?.info?.defaultPrice/100}</div>
              <div className="my-4 text-gray-600 font-sans">
                { item?.card?.info?.description}
              </div>
            </div>
            <div className="img"></div>
          </div>
        );
      })}
    </div>
  );
};
export default MenuItems;
