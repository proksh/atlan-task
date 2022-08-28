import React from "react";

const Input = ({ className, ...props }) => {
  return (
    <input
      className={`${className} bg-gray-300 font-semibold rounded-md transition w-full border border-transparent text-semibold placeholder:text-disabled focus:outline-none focus:bg-white focus:border-brand-300 focus:shadow-focus-primary`}
      placeholder="Type to Search in results..."
      {...props}
    />
  );
};

export default Input;
