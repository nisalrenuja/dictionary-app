import React from "react";
import { InputContext } from "../App";

function Header() {
  const [value, setValue] = React.useState("");
  const { inputValue, setInputValue } = React.useContext(InputContext);

  const handleInputChange = (e) => setValue(e.target.value);

  const handleSubmit = () => {
    setInputValue(value);
    setValue("");
  };

  const handleInputKeyDown = (e) => {
    if (e.key === "Enter") {
      setInputValue(value);
      setValue("");
    }
  };
  return (
    <div className="bg-black">
      <div className="container mx-auto py-8">
        <h1 className="text-5xl font-bold text-center text-white">
          My Dictionary
        </h1>
        <p className="text-center mt-1 mb-10 text-slate-300 text-lg">
          Find Definitions for word
        </p>
        <div className="flex items-center justify-center mt-5">
          <div className="flex-border-2 border-gray-200 rounded">
            <input
              className="px-4 py-2 md:w-80"
              type="text"
              placeholder="Search..."
              onChange={handleInputChange}
              onKeyDown={handleInputKeyDown}
              value={value}
            />
            <button
              className="bg-purple-800 border-l px-4 py-2 text-white"
              onClick={handleSubmit}
            >
              Search
            </button>
          </div>
        </div>

        {inputValue && (
          <h3 className="text-gray-50 text-center mt-4">
            Result for:{" "}
            <span className="text-white font-bold">{inputValue}</span>
          </h3>
        )}
      </div>
    </div>
  );
}

export default Header;
