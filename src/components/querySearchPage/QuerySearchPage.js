import _ from "lodash";
import React, { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";

import { getApiData, getFileData } from "../helper/helperfunctions";
import Loader from "../common/Loader";
import QuerrySelector from "./QuerrySelector";
import QuerryResult from "./QuerryResult";

const QuerySearchPage = () => {
  const [selectedQuerry, setSelectedQuerry] = useState(null);

  const { data: availableDb, isLoading: availableDbLoading } = useQuery(
    ["dbList"],
    () => getApiData("/dbList.json")
  );

  const { data: fileData, isLoading: fileDataLoading } = useQuery(
    ["file", selectedQuerry],
    () => getFileData(_.get(selectedQuerry, "dbName")),
    {
      enabled: !!selectedQuerry,
    }
  );

  /**
   * Whenever availableDb is fetched, update the selected state and fetch the first api
   */
  useEffect(() => {
    setSelectedQuerry(_.get(availableDb, "0"));
  }, [availableDb]);

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
        {availableDbLoading ? (
          <Loader>Fetching queries</Loader>
        ) : (
          <QuerrySelector
            selected={selectedQuerry}
            menuItems={availableDb}
            onChange={onQuerySelectChange}
            disabled={availableDbLoading}
          />
        )}
      </div>
      {!availableDbLoading &&
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
