import { Link } from "react-router-dom";
import { Button } from "../../ui/button";
import { Input } from "../../ui/input";

import { IoIosSend } from "react-icons/io";
import { FiFacebook } from "react-icons/fi";
import { FiTwitter } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiYoutube } from "react-icons/fi";

import "./Footer.scss";
import { t } from "i18next";

const Footer = () => {
  return (
    <footer className="bg-[#2f333a] text-white pt-5">
      <div className=" wrapper">
        <div className="grid grid-cols-12 gap-y-12 footer-links-container">
          {/* Row 1 */}
          <div className="col-span-12 px-3 sm:col-span-6 xl:col-span-4">
            <p className="mb-4 tracking-wider uppercase p-medium-16">{t("about-us")}</p>
            <p className="p-regular-14 leading-[24px] max-w-[290px]">
              {t("product-desc")}
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
            <p className="mb-4 tracking-wider p-medium-16">{t("information")}</p>
            <ul className="space-y-2">
              <li>
                <Link to="/">{t("about-us")}</Link>
              </li>
              <li>
                <Link to="/">{t("delivery-info")}</Link>
              </li>
              <li>
                <Link to="/">{t("privacy-and-policy")}</Link>
              </li>
              <li>
                <Link to="/">{t("terms-and-condition")}</Link>
              </li>
              <li>
                <Link to="/">{t("manufactures")}</Link>
              </li>
            </ul>
          </div>

          {/* Row 3 */}
          <div className="col-span-12 px-3 sm:col-span-6 xl:col-span-2">
            <p className="mb-4 tracking-wider p-medium-16">{t("my-account")}</p>
            <ul className="space-y-2">
              <li>
                <Link to="/">{t("my-account")}</Link>
              </li>
              <li>
                <Link to="/">{t("my-cart")}</Link>
              </li>
              <li>
                <Link to="/">{t("login")}</Link>
              </li>
              <li>
                <Link to="/">{t("wishlist")}</Link>
              </li>
              <li>
                <Link to="/">{t("checkout")}</Link>
              </li>
            </ul>
          </div>

          {/* Row 4 */}
          <div className="col-span-12 px-3 sm:col-span-6 xl:col-span-3">
            <p className="mb-4 tracking-wider p-medium-16">{t("newsletter")}</p>

            <Input
              className="w-full bg-transparent border placeholder:text-white border-slate-50/50 h-[50px] rounded-sm"
              placeholder={`${t("your-mail")}*`}
            />

            <Button className="bg-mainColor h-[50px] mt-4 rounded-sm w-[150px]">
              <IoIosSend className="text-white me-2" size={22} />
              {t("send-mail")}
            </Button>
          </div>
        </div>
      </div>

      {/* CopyWrite */}
      <div className="py-5 mt-5 bg-black">
        <div className="wrapper">
          <p className="text-center">&copy; 2024 {t("furns-made-by")} <span className="text-mainColor p-medium-16">{t("ahmed-ismail")}</span>.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
