import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { menu_URL } from "../utils/constants.js";
import MenuCatagory from "./MenuCatagory.js";

const RestaurantMenu = () => {
  const [ResInfo, setResInfo] = useState(null);
  const { resId } = useParams();
  const MenuURL = menu_URL + resId.slice(1, resId.length);
  async function fetchMenu() {
    const menu = await fetch(MenuURL);
    const json = await menu.json();
    setResInfo(json);
  }

  useEffect(() => {
    fetchMenu();
  }, []);
  //
  if (ResInfo === null) return <Shimmer />;

  if (ResInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR === undefined)
    return <div></div>;

  const { cards } = ResInfo?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;
  //

  const catagories = cards.filter((ele) => {
    return (
      ele.card.card["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );
  });
  console.log(catagories);

  return (
    <div className="flex flex-col items-center">
      {catagories.map((catagory, index) => {
        return <MenuCatagory data={catagory} key={index} />;
      })}
    </div>
  );
};
export default RestaurantMenu;
