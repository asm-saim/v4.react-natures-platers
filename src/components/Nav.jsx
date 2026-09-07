import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import NavLogo from "../assets/assets/nav-logo.png";
const Nav = () => {
  return (
    <div className="bg-amber-200  max-w-6xl mx-auto  flex justify-between items-center p-3">
      <div>
        <img className="h-10 w-32" src={NavLogo} alt="" />
      </div>

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
      <div className="flex items-center gap-3">
        <IoIosSearch />
        <IoCartOutline />
        <button>Login</button>
        <button>SignUp</button>
      </div>
    </div>
  );
};

export default Nav;
