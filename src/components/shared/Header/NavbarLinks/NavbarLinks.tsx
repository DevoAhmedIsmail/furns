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

const NavbarLinks = () => {
  return (
    <div className="text-white bg-mainBlack">
      <div className="wrapper">
        <div className="gap-10 flex-center">
          {NavLinksData.map((navLink, index) => (
            <DropdownMenu key={index}>
              <DropdownMenuTrigger>
                <div className="flex items-center gap-1">
                  {navLink.title}
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
                      {navLink.subLinks.map((subLink, index) => (
                        <DropdownMenuItem key={index}>
                          <span>{subLink.title}</span>
                        </DropdownMenuItem>
                      ))}
                    </DropdownMenuGroup>
                  ) : (
                    <DropdownMenuGroup>
                      {navLink?.subLinks?.map((subLink, index) => (
                        <DropdownMenuSub key={index}>
                          <DropdownMenuSubTrigger>
                            <Link to={subLink.link} className="w-full">
                              <span>{subLink.title}</span>
                            </Link>
                          </DropdownMenuSubTrigger>
                          <DropdownMenuPortal>
                            <DropdownMenuSubContent>
                              {subLink?.subLinksChildren?.map(
                                (subLinkChild, index) => (
                                  <DropdownMenuItem key={index} asChild>
                                    <Link to={subLinkChild.link} className="cursor-pointer">
                                      <span>{subLinkChild.title}</span>
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
