import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginBtn, setloginBtn] = useState("Login");
  const { loggedInUser } = useContext(userContext);

  // subscribing to the store using selector
  const cart = useSelector((store) => store.cart.items);
  console.log(cart)

  return (
    <div className="flex justify-between bg-gray-100 shadow-lg mx-6">
      <div className="w-36 mx-9">
        <img className=" mix-blend-multiply" src={LOGO_URL} />
      </div>
      <div className="flex">
        <ul className="flex p-10 items-center font-sans font-thin text-xl">
          <li className="px-4 py-2 hover:bg-gray-300">Home</li>
          <li className="px-4 py-2 hover:bg-gray-300">
            About us
          </li>
          <li className="px-4 py-2 hover:bg-gray-300 ">
           SignUp
          </li>
          <li className=" cursor-pointer px-4 py-2 hover:bg-gray-300" ><Link to={"/cart"}>Cart🛒 {cart.length?cart.length:""}</Link> </li>
          <li className="font-bold px-4 py-2">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
