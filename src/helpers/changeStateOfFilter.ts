import { SetStateAction } from "react";
import { TAppliedFilters } from "../types";

const changeState = (title: keyof TAppliedFilters, value: string, setAppliedFilters: (value: SetStateAction<TAppliedFilters>) => void) => {
    setAppliedFilters((prevFilters) => {
      const currentFilter = prevFilters[title] || [];

      const isAlreadySelected = Array.isArray(currentFilter)
        ? currentFilter.includes(value)
        : currentFilter === value;

      return {
        ...prevFilters,
        [title]: isAlreadySelected
          ? Array.isArray(currentFilter)
            ? currentFilter.filter((item) => item !== value)
            : [] // In case it was a single selected item, remove it
          : Array.isArray(currentFilter)
          ? [...currentFilter, value]
          : [value],
      };
    });
  };

  export default changeState;