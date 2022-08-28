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

export const getApiData = async (url) => {
  const response = await fetch(url);
  const result = await response.json();
  return result;
};

export const getFileData = async (url) => {
  console.log(url);
  const response = await fetch(`/fakeData${url}.csv`);
  const reader = response.body.getReader();
  const result = await reader.read(); // raw array
  const decoder = new TextDecoder("utf-8");
  const csv = decoder.decode(result.value); // the csv text
  const rows = _.get(Papa.parse(csv, { header: true }), "data");
  console.log({ rows });
  return rows;
};
