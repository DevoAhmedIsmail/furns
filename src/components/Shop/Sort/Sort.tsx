import React from "react";
import { Tsort } from "../../../types";
import { t } from "i18next";
import { IoIosArrowDown } from "react-icons/io";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../ui/dropdown-menu";

type SortProps = {
  itemsCount: number;
  sortBy: Tsort;
  changeSortBy: (newSort: Tsort) => void;
};

const Sort = ({ itemsCount, sortBy, changeSortBy }: SortProps) => {
    const sortDataMenu: Tsort[]= ["newest", "price-asc", "price-desc", "name-asc", "name-desc"]

  return (
    <div className="bg-[#ebebeb] py-3 px-6 mb-8">
      <div className="flex items-center justify-between">
        <p className="p-regular-14">There Are {itemsCount} Products.</p>

        <div className="flex items-center gap-3">
          {t("sort-by.sort-by")}:
          <DropdownMenu
          dir={t("lang") === "ar" ? "rtl" : "ltr"}
          >
            <DropdownMenuTrigger>
              <div className="min-w-[200px] text-start flex items-center justify-between">
                {t(`sort-by.${sortBy}`)}
                <IoIosArrowDown />
              </div>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                {
                    sortDataMenu.map((item) => (
                        <DropdownMenuItem
                            key={item}
                            onClick={() => changeSortBy(item)}
                            className={sortBy === item ? "bg-[var(--main-color)] text-white hover:bg-[var(--main-color)]" : "cursor-pointer"}
                        >
                            {t(`sort-by.${item}`)}
                        </DropdownMenuItem>
                    ))
                }
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </div>
  );
};

export default Sort;
