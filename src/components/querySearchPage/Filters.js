import _ from "lodash";
import React from "react";
import { RiAddLine, RiFilter3Fill, RiArrowDownSLine } from "react-icons/ri";

import FilterButton from "./FilterButton";

const Filters = ({
  selectedFilters,
  addFilter,
  removeFilter,
  updateFilter,
  dataKeys,
}) => {
  return (
    <div className="flex mb-16 flex-wrap gap-8">
      {_.map(selectedFilters, (filter, index) => (
        <FilterButton
          key={`filterbutton-${filter.category}=${filter.value}-${index}`}
          filter={filter}
          onFormSubmit={(filter) => updateFilter(filter, index)}
          removeFilter={() => removeFilter(index)}
          index={index}
          dataKeys={dataKeys}
          className="text-brand-700 bg-brand-100 border-brand-300 hover:bg-brand-200 hover:border-brand-400"
        >
          <RiFilter3Fill className="fill-brand-700 mr-4" size="16px" />
          {filter.category} contains {filter.value}
          <RiArrowDownSLine className="fill-brand-700 ml-8" size="16px" />
        </FilterButton>
      ))}
      <FilterButton
        onFormSubmit={addFilter}
        dataKeys={dataKeys}
        className="text-dark bg-white border-outline-light hover:border-outline-medium"
      >
        <RiAddLine className="fill-dark mr-4" size="16px" />
        Add filter
      </FilterButton>
    </div>
  );
};

export default Filters;
