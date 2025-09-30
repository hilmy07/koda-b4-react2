// components/SearchForm.jsx
import React from "react";

export const SearchForm = ({ value, onChange, onSubmit }) => {
  return (
    <form onSubmit={onSubmit} className="my-6 flex gap-2">
      <div className="relative flex-1">
        <input
          type="text"
          placeholder="Search character..."
          value={value}
          onChange={onChange}
          className="inputSearch w-[95%] p-2 pr-10 border border-gray-400 rounded-lg"
        />
        <button
          type="submit"
          className="absolute right-15 top-1/2 -translate-y-1/2 text-gray-500 hover:text-gray-700"
          aria-label="Search"
        >
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </div>
    </form>
  );
};
