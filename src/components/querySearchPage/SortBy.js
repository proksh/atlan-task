import React from "react";
import { Popover, Transition } from "@headlessui/react";
import { Fragment } from "react";
import {
  RiArrowDownSLine,
  RiArrowDownLine,
  RiArrowUpLine,
} from "react-icons/ri";

import Select from "../common/Select";
import _ from "lodash";

const SortBy = ({ selectedSort, updateSort, dataKeys }) => {
  return (
    <div className="flex text-light font-medium items-center gap-4">
      Sort by:
      <div className="relative text-dark">
        <Popover className="relative">
          {({ open }) => (
            <>
              <Popover.Button
                className={`
          ${
            open
              ? "shadow-focus-primary"
              : "border-transparent hover:bg-gray-200"
          }
          flex items-center text-body py-4 pl-4 pr-8 border rounded-md transition focus:outline-none focus:shadow-focus-primary`}
              >
                {selectedSort.order === "Asc" ? (
                  <RiArrowDownLine className="fill-dark mr-2" size="16px" />
                ) : (
                  <RiArrowUpLine className="fill-dark mr-2" size="16px" />
                )}
                {selectedSort.by}
                <RiArrowDownSLine className="fill-dark ml-4" size="16px" />
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
                <Popover.Panel className="absolute right-0 z-10 mt-4">
                  <div className="flex gap-8 font-medium bg-white border border-outline-light shadow-9 rounded-md p-20">
                    <div className="relative z-10 w-full mb-8">
                      <Select
                        selected={_.get(selectedSort, "by")}
                        menuItems={dataKeys}
                        onChange={(value) => updateSort({ by: value })}
                      />
                    </div>
                    <div className="relative w-full mb-8">
                      <Select
                        selected={_.get(selectedSort, "order")}
                        menuItems={["Asc", "Desc"]}
                        onChange={(value) => updateSort({ order: value })}
                      />
                    </div>
                  </div>
                </Popover.Panel>
              </Transition>
            </>
          )}
        </Popover>
      </div>
    </div>
  );
};

export default SortBy;
