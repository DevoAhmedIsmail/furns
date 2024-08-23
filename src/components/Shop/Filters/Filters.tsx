import { TFilterItem } from "../../../types"
import FilterItem from "./FilterItem/FilterItem"

const Filters = ({allFilters}: {allFilters:TFilterItem[]}) => {
  return (
    <div>
      {
        allFilters.map((filter, index) => (
          <FilterItem
            key={index}
            title={filter.title}
            displayedData={filter.displayedData}
            state={filter.state}
            changeState={filter.changeState}
            isMultiSelect={filter.isMultiSelect}
          />
        ))
      }
    </div>
  )
}

export default Filters
