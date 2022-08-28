import _ from "lodash";
import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { getApiData, getFileData } from "../helper/helperfunctions";
import Loader from "../common/Loader";
import QuerrySelector from "./QuerrySelector";
import QuerryResult from "./QuerryResult";

const QuerySearchPage = () => {
  const [selectedQuerry, setSelectedQuerry] = useState(null);

  const { data: availableApi, isLoading: availableApiLoading } = useQuery(
    ["apilist"],
    () => getApiData("/apiList.json")
  );

  const { data: fileData, isLoading: fileDataLoading } = useQuery(
    ["file", selectedQuerry],
    () => getFileData(selectedQuerry.name),
    {
      enabled: !!selectedQuerry,
    }
  );

  /**
   * Whenever availableApi is fetched, update the selected state and fetch the first api
   */
  useEffect(() => {
    setSelectedQuerry(_.get(availableApi, "0"));
  }, [availableApi]);

  /**
   * On section change -> Changes select and fetch new data
   */
  const onQuerySelectChange = (value) => {
    setSelectedQuerry(value);
  };

  return (
    <>
      <div className="container pt-64">
        <h2 className="font-semibold text-display5 mb-8">Select query</h2>
        {availableApiLoading ? (
          <Loader>Fetching queries</Loader>
        ) : (
          <QuerrySelector
            selected={selectedQuerry}
            menuItems={availableApi}
            onChange={onQuerySelectChange}
            disabled={availableApiLoading}
          />
        )}
      </div>
      {!availableApiLoading &&
        (fileDataLoading ? (
          <div className="container">
            <Loader>Loading Data</Loader>
          </div>
        ) : (
          <QuerryResult fileData={fileData} />
        ))}
    </>
  );
};

export default QuerySearchPage;
