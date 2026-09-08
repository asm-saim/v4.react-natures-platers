import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import NavLogo from "../assets/nav-logo.png";
const Nav = ({ cart }) => {
  return (
    <div className="shadow-md bg-white pb-2">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-3">
        <img className="h-10 w-32" src={NavLogo} alt="" />

        <ul className="flex gap-5">
          <li>
            <a href="">Home</a>
          </li>
          <li>
            <a href="">About</a>
          </li>
          <li>
            <a href="">Collections</a>
          </li>
          <li>
            <a href="">Contact</a>
          </li>
        </ul>
        <div className="flex items-center gap-3 ">
          <IoIosSearch />
          <IoCartOutline />
          <div className="">
            {cart.length > 0 && (
              <span className="bg-green-500 text-white rounded-full px-2 py-1 text-xs">
                {cart.length}
              </span>
            )}
          </div>

          <button className="bg-green-400 hover:bg-green-500 px-4 py-2 rounded-xl text-amber-50">Login</button>
          <button className="bg-gray-400 hover:bg-gray-500 px-4 py-2 rounded-xl text-amber-50">SignUp</button>
        </div>
      </div>
    </div>
  );
};

export default Nav;
