import { useState } from "react";
import MenuItems from "./MenuItems";
const MenuCatagory = (props) => {
  const { data } = props;
  const [Show, setShow] = useState(true);
  console.log(data);
  return (
    <div className="bg-gray-100 my-6 w-6/12 text-center p-8 rounded-lg">
      <div
        className="flex justify-between mx-5 cursor-pointer"
        onClick={() => {
          console.log("clicked");
          setShow(!Show);
        }}
      >
        <div className="font-sans font-bold text-md ">
          {data.card.card.title} ({data.card.card.itemCards.length})
        </div>
        <div className="font-bold text-lg">{Show === true ? "↑" : "↓"}</div>
      </div>
      <MenuItems items={data.card.card.itemCards} CanShow={Show} />
    </div>
  );
};
export default MenuCatagory;
