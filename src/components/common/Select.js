import React from "react";
import { Listbox } from "@headlessui/react";
import { RiArrowDownSLine } from "react-icons/ri";

const Select = ({ selected, menuItems, onChange, disabled }) => {
  return (
    <Listbox value={selected} onChange={onChange} disabled={disabled}>
      {({ open }) => (
        <>
          <Listbox.Button
            className={`${
              open
                ? "border-brand-500 shadow-focus-primary hover:bg-gray-100"
                : "border-outline-light shadow-1 hover:bg-gray-100 hover:border-brand-200 focus:outline-none focus:border-brand-500 focus:shadow-focus-primary"
            } inline-flex w-full transition items-center justify-between rounded-md bg-white px-12 py-8 h-40 text-body font-medium border`}
          >
            <span className="truncate">{selected}</span>
            <RiArrowDownSLine className="fill-dark ml-8 min-w-16" size="16px" />
          </Listbox.Button>
          <Listbox.Options className="absolute left-0 mt-4 w-full origin-top-left p-8 rounded-md bg-white shadow-1 border border-outline-light focus:outline-none">
            {menuItems.map((item, index) => (
              <Listbox.Option key={`${item}-${index}`} value={item}>
                {({ active, selected }) => (
                  <button
                    className={`px-8 transition py-4 block w-full text-left rounded-md font-semibold truncate ${
                      selected
                        ? "bg-brand-100 text-brand-700"
                        : `${
                            active
                              ? "bg-gray-300 text-dark"
                              : "bg-white text-medium"
                          }`
                    }`}
                  >
                    {item}
                  </button>
                )}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </>
      )}
    </Listbox>
  );
};

export default Select;
