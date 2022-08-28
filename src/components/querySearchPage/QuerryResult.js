import _ from "lodash";
import React, { useState } from "react";

import DataTable from "./DataTable";
import Filters from "./Filters";
import SearchInput from "./SearchInput";
import SortBy from "./SortBy";

const QuerryResult = ({ fileData }) => {
  const [searchText, setSearchText] = useState("");
  const [selectedFilters, setSelectedFilters] = useState([]);
  const [selectedSort, setSelectedSort] = useState({
    by: Object.keys(fileData[0])[0],
    order: "Asc",
  });

  /**
   * On search input change
   */
  const onSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  /**
   * Add filters
   */
  const addFilter = (filter) => {
    setSelectedFilters((oldSelectedFilter) =>
      _.concat(oldSelectedFilter, filter)
    );
  };

  /**
   * Update filters
   */
  const updateFilter = (filter, index) => {
    setSelectedFilters((oldSelectedFilter) => {
      let newResult = oldSelectedFilter;
      newResult[index] = filter;
      return [...newResult];
    });
  };

  /**
   * Remove filters
   */
  const removeFilter = (index) => {
    setSelectedFilters((oldSelectedFilter) => {
      let newResult = oldSelectedFilter;
      newResult.splice(index, 1);
      return [...newResult];
    });
  };

  /**
   * Update sort
   */
  const updateSort = (newValues) => {
    setSelectedSort((oldSelectedSort) => ({
      ...oldSelectedSort,
      ...newValues,
    }));
  };

  /**
   * Filter data based on filters
   */
  const filteredData = _.filter(fileData, (row) => {
    return selectedFilters
      .map((filter) => {
        if (!row[filter.category]) {
          return true;
        }
        return row[filter.category]
          .toLowerCase()
          .includes(filter.value.toLowerCase());
      })
      .every((val) => val);
  });

  /**
   * Perform search upon filtered data
   */
  const filteredAndSearchedData = _.filter(filteredData, (row) => {
    return Object.keys(row).some((key) =>
      row[key].toLowerCase().includes(searchText.toLowerCase())
    );
  });

  return (
    <>
      <div className="container">
        <SearchInput searchText={searchText} onSearchChange={onSearchChange} />
        <Filters
          selectedFilters={selectedFilters}
          dataKeys={_.keys(_.get(fileData, "[0]"))}
          addFilter={addFilter}
          updateFilter={updateFilter}
          removeFilter={removeFilter}
        />
        <div className="flex items-end justify-between mb-24">
          <p className="text-body text-light">
            <span className="hidden md:inline">Showing</span>{" "}
            {filteredAndSearchedData.length} Results
          </p>
          <SortBy
            selectedSort={selectedSort}
            dataKeys={_.keys(_.get(fileData, "[0]"))}
            updateSort={updateSort}
          />
        </div>
      </div>
      <DataTable
        filteredAndSearchedData={_.orderBy(
          filteredAndSearchedData,
          selectedSort.by,
          selectedSort.order.toLowerCase()
        )}
        searchText={searchText}
        selectedSort={selectedSort}
        updateSort={updateSort}
      />
    </>
  );
};

export default QuerryResult;
