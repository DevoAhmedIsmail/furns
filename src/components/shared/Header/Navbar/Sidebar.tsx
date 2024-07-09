import { Sheet, SheetContent, SheetTrigger } from "../../../ui/sheet";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../ui/accordion";

import { LuMenu } from "react-icons/lu";
import NavLinksData from "../../../../Data/NavLinksData";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <Sheet>
      <SheetTrigger>
        <LuMenu className="block md:hidden" size={30} />
      </SheetTrigger>
      <SheetContent className="pt-14 w-[80%] sm:w-[300px]">
        <Accordion type="single" collapsible>
          {NavLinksData.map((navLink, index) => (
            <AccordionItem value={`item-${index}`}>
              <AccordionTrigger hideIcon={!navLink?.subLinks?.length}>
                <Link to={navLink.link}>{navLink.title}</Link>
              </AccordionTrigger>
              {navLink?.subLinks?.length && (
                <AccordionContent>
                  <div className="flex flex-col divide-y-2 divide-slate-100 ps-2">
                    {navLink.subLinks &&
                      navLink.subLinks.map((subLink, index) => (
                        <Link
                          to={subLink.link}
                          key={index}
                          className="py-2 p-medium-16"
                        >
                          - {subLink.title}
                        </Link>
                      ))}
                  </div>
                </AccordionContent>
              )}
            </AccordionItem>
          ))}
        </Accordion>
      </SheetContent>
    </Sheet>
  );
};

export default Sidebar;
