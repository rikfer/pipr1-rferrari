import React from "react";

const Select = (props) => {
  const { selectOptions } = props;

  const handleSelect = (event) => {
    console.log("Selected value: " + event.target.value);
  };

  return (
    <>
      <select
        className="form-select appearance-none
                    block
                    w-full
                    px-3
                    py-1.5
                    text-base
                    font-normal
                    text-gray-700
                    bg-white bg-clip-padding bg-no-repeat
                    border border-solid border-gray-300
                    rounded
                    transition
                    ease-in-out
                    m-0
                    focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        aria-label="Default select example"
        onChange={(event) => handleSelect(event)}
      >
        {selectOptions.map((item, index) => {
          return (
            <option value={item} key={index}>
              {item}
            </option>
          );
        })}
        ;
      </select>
    </>
  );
};

export default Select;
