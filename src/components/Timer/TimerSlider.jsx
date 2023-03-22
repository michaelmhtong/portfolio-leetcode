import React from "react";

const TimerSlider = ({ value, disabled, onChange }) => {
  return (
    <div>
      <label className="block mb-2 text-xl font-medium text-gray-900 dark:text-white">
        {value + ":00"}
      </label>
      <input
        id="small-range"
        type="range"
        value={value}
        min="1"
        max="60"
        onChange={({ target: { value: radius } }) => {
          onChange(radius);
        }}
        disabled={disabled}
        className="w-full h-1 mb-6 bg-gray-200 rounded-lg appearance-none cursor-pointer range-sm dark:bg-gray-700"
      ></input>
    </div>
  );
};

export default TimerSlider;
