import { LOGO_URL } from "../utils/constants";
import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import UseOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/UserContext";
import { useSelector } from "react-redux";


const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  console.log("Header Render");

  //  if no dependency array => useEffect is called on every render
  // if dependency array id empty => useEffect is called on intiall render(just once)
  // if dependency array is [btnNameReact] => useEffect is called on intiall render and
  //  on every render if btnNameReact changes/called everytime btnNameReact is updated

  useEffect(() => {
    console.log("useEffect called");
  }, [btnNameReact]);

  const onlineStatus = UseOnlineStatus();

  const { loggedInUser } = useContext(userContext);
  console.log(loggedInUser);

  //Subscribing to the Store using a  Selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  return (
    <div className="flex justify-between bg-orange-400 shadow-lg  sm:bg-yellow-50 lg:bg-gray-700">
      <div className="logo-container">
        <img className="w-40" src={LOGO_URL} />
      </div>
      <div className="flex items-center ">
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status:{onlineStatus ? "🟢" : "🔴"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About Us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold text-lg">
            <Link to="/cart">
            Cart({cartItems.length} items)</Link>
          </li>
          <button
            className="px-4"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
              console.log(btnNameReact);
            }}
          >
            {btnNameReact}
          </button> 

          <li className="px-4 font-bold">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;


