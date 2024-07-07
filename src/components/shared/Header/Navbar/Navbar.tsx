
import { Link } from "react-router-dom"

// components
import Profile from "./Profile"
import Cart from "./Cart/Cart"
import Search from "./Search"

// images
import logo from "../../../../assets/images/logo.webp"

// styles
import "./Navbar.scss"

const Navbar = () => {
  return (
    <nav className="py-3">
      <div className="wrapper flex-between">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>

        <div className="flex items-center gap-5">
          <Search/>
          <span className=" w-[1px] h-6 bg-slate-400"></span>
          <Profile />
          <span className=" w-[1px] h-6 bg-slate-400"></span>
          <Cart />
        </div>
      </div>
    </nav>
  )
}

export default Navbar