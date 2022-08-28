import _ from "lodash";
import React from "react";
import { Listbox } from "@headlessui/react";
import { RiArrowDownLine, RiArrowUpLine } from "react-icons/ri";

const TableHeadWithSort = ({
  cellValue,
  selectedSort,
  selected,
  menuItems,
  onChange,
  disabled,
}) => {
  return (
    <Listbox
      value={selected}
      onChange={(item) => onChange(item.value)}
      disabled={disabled}
    >
      {({ open }) => (
        <>
          <Listbox.Button
            className={`${
              open ? "bg-gray-100 text-medium" : "hover:bg-gray-100 text-light"
            } flex w-full transition items-center bg-white px-16 py-8 h-40 text-body font-medium focus:outline-none focus-visible:border-indigo-500`}
          >
            {cellValue}
            {_.get(selectedSort, "by") === cellValue && (
              <>
                {_.get(selectedSort, "order") === "Asc" ? (
                  <RiArrowDownLine className="fill-light ml-2" size="14px" />
                ) : (
                  <RiArrowUpLine className="fill-light ml-2" size="14px" />
                )}
              </>
            )}
          </Listbox.Button>
          <Listbox.Options className="absolute left-0 mt-4 w-full origin-top-left p-8 rounded-md bg-white shadow-9 border border-outline-light focus:outline-none">
            <>
              {menuItems.map((item, index) => (
                <Listbox.Option
                  key={`${_.get(item, "value")}-${_.get(
                    item,
                    "name"
                  )}-${index}`}
                  value={item}
                >
                  <button className="px-8 transition py-4 block w-full text-left rounded-md font-semibold truncate bg-white text-medium hover:bg-gray-200">
                    {_.get(item, "name")}
                  </button>
                </Listbox.Option>
              ))}
            </>
          </Listbox.Options>
        </>
      )}
    </Listbox>
  );
};

export default TableHeadWithSort;
