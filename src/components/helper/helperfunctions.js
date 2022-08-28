import _ from "lodash";
import Papa from "papaparse";

export const getHighlightedText = (text, highlight) => {
  const parts = text.split(new RegExp(`(${highlight})`, "gi"));
  return _.map(parts, (part, i) => (
    <span
      key={i}
      className={
        part.toLowerCase() === highlight.toLowerCase()
          ? " bg-brand-200 font-bold"
          : ""
      }
    >
      {part}
    </span>
  ));
};

// Fake api funtion
export const getApiData = async (url) => {
  const currentUrl = window.location.href;

  const response = await fetch(`${currentUrl}fakeData${url}`);
  const result = await response.json();
  return result;
};

// Fake api funtion
export const getFileData = async (url) => {
  const currentUrl = window.location.href;

  const response = await fetch(`${currentUrl}fakeData${url}.csv`);
  const reader = response.body.getReader();
  const result = await reader.read(); // raw array
  const decoder = new TextDecoder("utf-8");
  const csv = decoder.decode(result.value); // the csv text
  const rows = _.get(Papa.parse(csv, { header: true }), "data");
  return rows;
};
