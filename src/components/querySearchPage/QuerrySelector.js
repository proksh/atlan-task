import _ from "lodash";
import React from "react";
import { Listbox } from "@headlessui/react";
import { RiArrowDownSLine } from "react-icons/ri";

const QuerrySelector = ({ selected, menuItems, onChange, disabled }) => {
  return (
    <div className="relative z-10 max-w-240 mb-40">
      <Listbox value={selected} onChange={onChange} disabled={disabled}>
        {({ open }) => (
          <>
            <Listbox.Button
              className={`${
                open
                  ? "border-brand-500 shadow-focus-primary hover:bg-gray-100"
                  : "border-outline-light shadow-1 hover:bg-gray-100 hover:border-brand-200 focus:outline-none focus:border-brand-500 focus:shadow-focus-primary"
              } inline-flex w-full transition items-center justify-between rounded-full bg-white px-20 py-8 h-48 text-subheader font-semibold border`}
            >
              {_.get(selected, "name")}
              <RiArrowDownSLine className="fill-dark ml-12" size="20px" />
            </Listbox.Button>
            <Listbox.Options className="absolute left-0 mt-4 w-full origin-top-left p-8 rounded-md bg-white shadow-9 border border-outline-light focus:outline-none">
              {_.map(menuItems, (item) => (
                <Listbox.Option key={_.get(item, "id")} value={item}>
                  {({ active, selected }) => (
                    <button
                      className={`px-8 transition py-4 block w-full text-left rounded-md font-semibold ${
                        selected
                          ? "bg-brand-100 text-brand-700"
                          : `${
                              active
                                ? "bg-gray-300 text-dark"
                                : "bg-white text-medium"
                            }`
                      }`}
                    >
                      {_.get(item, "name")}
                    </button>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </>
        )}
      </Listbox>
    </div>
  );
};

export default QuerrySelector;
