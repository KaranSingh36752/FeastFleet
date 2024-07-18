import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import store from "../utils/store";
import logo from "../utils/images/logo231323.png";
import { IoCloudOfflineOutline } from "react-icons/io5";
import { CiCloudOn } from "react-icons/ci";
import { TfiShoppingCart } from "react-icons/tfi";

const Title = () => (
  <>
    <a href="/">
      <img
        data-testid="logo"
        className="h-[80px] ml-1 my-1  transition ease-in-out hover:-translate-y-1 rounded-full "
        alt="Dorsia"
        src={logo}
      />
    </a>
  </>
);

const Header = () => {
  const [IsloggedIn, setIsloggedIn] = useState(false);
  const isOnline = useOnline();
  const { user } = useContext(UserContext);
  const cartItems = useSelector((store) => store.cart.items);
  //console.log(cartItems)

  return (
    <>
      <div className="flex items-center  justify-between bg-white to-transparent shadow-md sm:px-6 lg:px-8 ">
        <Title />
        <ul className="flex items-end ml-96 text-xl space-x-5 font-semibold text-[#36454F] ">
          <li className=" px-2 py-2 ">
            <Link to="/">Home</Link>
          </li>
          <li className=" px-2 py-2">
            <Link to="/About">About us</Link>{" "}
          </li>
          <li className=" px-2 py-2">
            <Link to="/Contact">Contact</Link>
          </li>
          <li className=" px-2 py-2">
            <Link to="/Instamart">Instamart</Link>
          </li>
          <li className=" px-2 py-2">
            <Link to="/Cart" data-testid="emptyCart">
              <span className="flex">
                <TfiShoppingCart className="size-8" />-{cartItems.length}
              </span>
            </Link>
          </li>
        </ul>
        <div className="flex gap-1">
          <div className="font-semibold text-[FFCF96] bg-[#D3D3D3] rounded-md flex items-center justify-end px-4 py-2">
            {IsloggedIn ? (
              <button onClick={() => setIsloggedIn(false)}>logout</button>
            ) : (
              <button onClick={() => setIsloggedIn(true)}>login</button>
            )}
          </div>
          <span data-testid="onlineStatus">
            {isOnline ? <CiCloudOn /> : <IoCloudOfflineOutline />}
          </span>
        </div>
        {/* <span className="font-bold text-red-900 p-2 m-2">{user.name}</span> */}
      </div>
    </>
  );
};

export default Header;
