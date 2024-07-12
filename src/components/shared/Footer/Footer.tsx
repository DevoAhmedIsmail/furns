import { Link } from "react-router-dom";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";

import { IoIosSend } from "react-icons/io";
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiYoutube } from "react-icons/fi";

import "./Footer.scss";

const Footer = () => {
  return (
    <footer className="bg-[#2f333a] text-white pt-5">
      <div className=" wrapper">
        <div className="grid grid-cols-12 gap-y-12 footer-links-container">
          {/* Row 1 */}
          <div className="col-span-12 px-3 sm:col-span-6 xl:col-span-4">
            <p className="mb-4 tracking-wider p-medium-16">ABOUT US</p>
            <p className="p-regular-14 leading-[24px] max-w-[290px]">
              Lorem ipsum dolor sit amet cons adipisicing elit sed do eiusm
              tempor incididunt ut labor et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud
            </p>

            <div className="flex items-center gap-4 mt-4 social-links">
              <Link to="/">
                <FiFacebook className="text-2xl text-white" />
              </Link>
              <Link to="/">
                <FiTwitter className="text-2xl text-white" />
              </Link>
              <Link to="/">
                <FiLinkedin className="text-2xl text-white" />
              </Link>
              <Link to="/">
                <FiYoutube className="text-2xl text-white" />
              </Link>
            </div>
          </div>

          {/* Row 2 */}
          <div className="col-span-12 px-3 sm:col-span-6 xl:col-span-3">
            <p className="mb-4 tracking-wider p-medium-16">INFORMATION</p>
            <ul className="space-y-2">
              <li>
                <Link to="/">About Us</Link>
              </li>
              <li>
                <Link to="/">Delivery Information</Link>
              </li>
              <li>
                <Link to="/">Privacy & Policy</Link>
              </li>
              <li>
                <Link to="/">Terms & Condition</Link>
              </li>
              <li>
                <Link to="/">Manufactures</Link>
              </li>
            </ul>
          </div>

          {/* Row 3 */}
          <div className="col-span-12 px-3 sm:col-span-6 xl:col-span-2">
            <p className="mb-4 tracking-wider p-medium-16">MY ACCOUNT</p>
            <ul className="space-y-2">
              <li>
                <Link to="/">My Account</Link>
              </li>
              <li>
                <Link to="/">My Cart</Link>
              </li>
              <li>
                <Link to="/">Login</Link>
              </li>
              <li>
                <Link to="/">Wishlist</Link>
              </li>
              <li>
                <Link to="/">Checkout</Link>
              </li>
            </ul>
          </div>

          {/* Row 4 */}
          <div className="col-span-12 px-3 sm:col-span-6 xl:col-span-3">
            <p className="mb-4 tracking-wider p-medium-16">NEWSLETTER</p>

            <Input
              className="w-full bg-transparent border placeholder:text-white border-slate-50/50 h-[50px] rounded-sm"
              placeholder="Your Mail*"
            />

            <Button className="bg-mainColor h-[50px] mt-4 rounded-sm w-[150px]">
              <IoIosSend className="text-white me-2" size={22} />
              Send Mail
            </Button>
          </div>
        </div>
      </div>

      {/* CopyWrite */}
      <div className="py-5 mt-5 bg-black">
        <div className="wrapper">
          <p className="text-center">&copy; 2024 Furns Made By <span className="text-mainColor p-medium-16">Ahmed Ismail</span>.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
