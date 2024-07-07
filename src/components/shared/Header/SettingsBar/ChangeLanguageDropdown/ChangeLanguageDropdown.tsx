import { t } from "i18next";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../../../../ui/popover";

import { IoIosArrowDown } from "react-icons/io";
import { Button } from "../../../../ui/button";
import { switchLang } from "../../../../../helpers/lang";

const ChangeLanguageDropdown = () => {
  return (
    <Popover >
      <PopoverTrigger>
        <div className="flex items-center gap-2">
          <p className="flex items-center gap-1">
            {t("language")}
            <span>({t("lang") === "ar" ? "عربي" : "ENG"})</span>
          </p>
          <IoIosArrowDown size={15} />
        </div>
      </PopoverTrigger>
      <PopoverContent className="max-w-[150px] py-4 px-2">
        <div className="flex flex-col gap-2">
          <Button
            onClick={() => {
              switchLang("en");
            }}
            variant="ghost"
          >
            English
          </Button>
          <Button
            onClick={() => {
              switchLang("ar");
            }}
            variant="ghost"
          >
            العربية
          </Button>
        </div>
      </PopoverContent>
    </Popover>
  );
};

export default ChangeLanguageDropdown;
