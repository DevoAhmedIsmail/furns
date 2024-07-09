import { Link } from "react-router-dom";
import NavLinksData from "../../../../Data/NavLinksData";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuGroup,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuPortal,
  DropdownMenuSubContent,
} from "../../../ui/dropdown-menu";

import { IoIosArrowDown } from "react-icons/io";
import { t } from "i18next";
console.log(NavLinksData);
const NavbarLinks = () => {
  return (
    <div className="hidden text-white bg-mainBlack md:block">
      <div className="wrapper">
        <div className="gap-10 flex-center">
          {NavLinksData.map((navLink, index) => (
            <DropdownMenu key={`Navbar-${index}`} dir={t("lang") === "ar" ? "rtl" : "ltr"}>
              <DropdownMenuTrigger>
                <div className="flex items-center gap-1">
                  {t(navLink.title)}
                  {
                    navLink.subLinks && (
                      <IoIosArrowDown />
                    )
                  }
                </div>
              </DropdownMenuTrigger>
              {navLink.subLinks && (
                <DropdownMenuContent className="w-56">
                  {navLink.subLinks &&
                  !navLink?.subLinks[0]?.subLinksChildren ? (
                    <DropdownMenuGroup>
                      {navLink.subLinks.map((subLink, i) => (
                        <DropdownMenuItem key={`menuItem-${i}`}>
                          <Link to={subLink.link} className="w-full">
                            <span>{t(subLink.title)}</span>
                          </Link>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuGroup>
                  ) : (
                    <DropdownMenuGroup>
                      {navLink?.subLinks?.map((subLink, index) => (
                        <DropdownMenuSub key={`menugroup-${index}`}>
                          <DropdownMenuSubTrigger>
                            <Link to={subLink.link} className="w-full">
                              <span>{t(subLink.title)}</span>
                            </Link>
                          </DropdownMenuSubTrigger>
                          <DropdownMenuPortal>
                            <DropdownMenuSubContent>
                              {subLink?.subLinksChildren?.map(
                                (subLinkChild, i) => (
                                  <DropdownMenuItem key={`drop-${i}`} asChild >
                                    <Link to={subLinkChild.link} className="cursor-pointer">
                                      <span>{t(subLinkChild.title)}</span>
                                    </Link>
                                  </DropdownMenuItem>
                                )
                              )}
                            </DropdownMenuSubContent>
                          </DropdownMenuPortal>
                        </DropdownMenuSub>
                      ))}
                    </DropdownMenuGroup>
                  )}
                </DropdownMenuContent>
              )}
            </DropdownMenu>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NavbarLinks;
