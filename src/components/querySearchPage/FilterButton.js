import _ from "lodash";
import React, { useState } from "react";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

import Select from "../common/Select";
import Input from "../common/Input";

const FilterButton = ({
  filter,
  onFormSubmit,
  removeFilter,
  dataKeys,
  className,
  children,
}) => {
  const [formData, setFormData] = useState({
    category: _.get(filter, "category") || dataKeys[0],
    value: _.get(filter, "value") || "",
  });

  const updateForm = (key, value) => {
    setFormData((oldFormdata) => ({
      ...oldFormdata,
      [key]: value,
    }));
  };

  return (
    <div className="relative">
      <Popover className="relative">
        {({ open }) => (
          <>
            <Popover.Button
              className={`
            ${open ? "shadow-focus-primary" : ""}
            flex items-center text-body py-4 pl-8 pr-12 border rounded-full transition focus:outline-none focus:shadow-focus-primary ${className} `}
            >
              {children}
            </Popover.Button>
            <Transition
              as={Fragment}
              show={open}
              enter="transition ease-out duration-200"
              enterFrom="opacity-0 translate-y-1"
              enterTo="opacity-100 translate-y-0"
              leave="transition ease-in duration-150"
              leaveFrom="opacity-100 translate-y-0"
              leaveTo="opacity-0 translate-y-1"
            >
              <Popover.Panel className="absolute left-0 z-10 mt-4">
                {({ close }) => (
                  <form
                    onSubmit={(e) => {
                      e.preventDefault();
                      close();
                      onFormSubmit(formData);
                    }}
                    className="font-medium bg-white border border-outline-light shadow-9 rounded-md p-20"
                  >
                    <div className="relative w-full mb-8">
                      <Select
                        selected={_.get(formData, "category")}
                        menuItems={dataKeys}
                        onChange={(value) => updateForm("category", value)}
                        disabled={false}
                      />
                    </div>
                    <div className="flex items-center gap-8 mb-20">
                      contains
                      <div className="w-144">
                        <Input
                          required
                          value={_.get(formData, "value")}
                          onChange={(e) => updateForm("value", e.target.value)}
                          className="text-body h-40 px-12"
                          placeholder="Value"
                        />
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="h-32 w-full  px-12 bg-brand-700 text-body font-medium text-white rounded-md hover:bg-brand-800 focus:shadow-focus-primary"
                    >
                      Apply Filter
                    </button>
                    {removeFilter && (
                      <button
                        onClick={removeFilter}
                        className="flex mt-8 items-center justify-center gap-8 h-32 w-full px-12 bg-gray-200 text-body font-medium text-medium rounded-md hover:bg-gray-300 hover:text-dark focus:shadow-focus-primary"
                      >
                        <RiDeleteBin6Line className="fill-medium" size="16px" />
                        Remove
                      </button>
                    )}
                  </form>
                )}
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
};

export default FilterButton;
