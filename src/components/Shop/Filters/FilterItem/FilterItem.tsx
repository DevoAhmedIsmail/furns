import { TFilterItem } from "../../../../types";
import { Checkbox } from "../../../ui/checkbox";
import FilterTitle from "../FilterTitle/FilterTitle";

const FilterItem = ({
  title,
  displayedData,
  state,
  changeState,
  isMultiSelect,
}: TFilterItem) => {
  return (
    <div>
      <FilterTitle title={title} />

      <div className="mt-4 mb-8 space-y-2">
        {displayedData.map((data, index) => (
          <div className="flex items-center justify-between" key={index}>
            <div className="flex items-center gap-2">
              {isMultiSelect && (
                <Checkbox
                  id={`${title}-${index}`}
                  checked={state?.includes(data)}
                  onCheckedChange={() => changeState(data)}
                />
              )}
              <label
                onClick={!isMultiSelect ? () => changeState(data) : undefined}
                htmlFor={`${title}-${index}`}
                className="text-[#474747] text-[14px] cursor-pointer"
              >
                {data}
              </label>
            </div>

            <div className="text-[#474747] text-[13px]">(12)</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FilterItem;
