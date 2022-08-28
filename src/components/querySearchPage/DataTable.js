import _ from "lodash";
import React from "react";

import { getHighlightedText } from "../helper/helperfunctions";

import TableHeadWithSort from "./TableHeadWithSort";

const DataTable = ({
  filteredAndSearchedData,
  searchText,
  selectedSort,
  updateSort,
}) => {
  // Empty State
  if (_.get(filteredAndSearchedData, "length") === 0) {
    return (
      <div className="container">
        <div className="p-16 text-center border-t border-outline-light text-body text-light">
          No Data available. Try modififying the search and filter
        </div>
      </div>
    );
  }

  return (
    <div className="w-screen overflow-x-auto pb-96">
      <div className="container">
        <div className="w-full">
          <div className="shadow -mx-16">
            <table className="divide-y divide-outline-xlight min-w-full border-b border-t border-outline-light">
              <thead className="border-b border-outline-light">
                <tr>
                  {_.map(filteredAndSearchedData[0], (val, key, index) => (
                    <td
                      key={`header-${key}-${index}`}
                      className="text-body font-medium text-light"
                    >
                      <div className="relative">
                        <TableHeadWithSort
                          cellValue={key}
                          selectedSort={selectedSort}
                          selected="accending"
                          menuItems={[
                            { name: "Accending", value: "Asc" },
                            { name: "Descending", value: "Desc" },
                          ]}
                          onChange={(value) =>
                            updateSort({ by: key, order: value })
                          }
                        ></TableHeadWithSort>
                      </div>
                    </td>
                  ))}
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-outline-light">
                {filteredAndSearchedData.map((row, index) => (
                  <tr
                    key={`row-${row[_.get(_.keys(row), "[0]")]}-${index}`}
                    className="whitespace-nowrap divide-x divide-outline-light"
                  >
                    {_.map(row, (val, key, index) => (
                      <td
                        key={`cell-${val}-${key}-${index}`}
                        className="px-16 py-8 text-body font-medium text-dark"
                      >
                        {getHighlightedText(val, searchText)}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTable;
