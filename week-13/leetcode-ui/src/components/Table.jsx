import React, { useState } from "react";
import FilterModal from "./FilterModal";

import { FaFilter } from "react-icons/fa";
import { FaCheck } from "react-icons/fa6";
import { MdCancel } from "react-icons/md";

const problems = [
  {
    id: 14,
    name: "Longest Common Prefix",
    difficulty: "Easy",
  },
  {
    id: 217,
    name: "Contains Duplicate",
    difficulty: "Easy",
  },
  {
    id: 125,
    name: "Valid Palindrome",
    difficulty: "Easy",
  },
  {
    id: 26,
    name: "Remove Duplicates from Sorted Array",
    difficulty: "Easy",
  },
  {
    id: 66,
    name: "Plus One",
    difficulty: "Easy",
  },
  {
    id: 136,
    name: "Single Number",
    difficulty: "Easy",
  },
  {
    id: 121,
    name: "Best Time to Buy and Sell Stock",
    difficulty: "Easy",
  },
  {
    id: 88,
    name: "Merge Sorted Array",
    difficulty: "Easy",
  },
  {
    id: 69,
    name: "Sqrt(x)",
    difficulty: "Easy",
  },
  {
    id: 206,
    name: "Reverse Linked List",
    difficulty: "Easy",
  },
  {
    id: 141,
    name: "Linked List Cycle",
    difficulty: "Easy",
  },
];

const Table = () => {
  const [filterVisibility, setFilterVisibility] = useState(false);
  const [filters, setFilters] = useState({
    todo: false,
    solved: false,
    attempted: false,
    easy: false,
    medium: false,
    hard: false,
    tags: false,
  });

  function updateFilters(filter) {
    setFilters((prevFilters) => {
      return { ...prevFilters, [filter]: !prevFilters[filter] };
    });
  }

  return (
    <div className="w-full flex flex-col gap-2">
      <div className="flex gap-2 justify-start items-center flex-wrap">
        <button
          className="bg-white text-black p-2 px-4 rounded-full flex justify-center items-center gap-2"
          onClick={() => setFilterVisibility(!filterVisibility)}
        >
          <FaFilter size={14} />
          <p>Filter</p>
        </button>
        {Object.entries(filters).map((filter, index) => {
          if (!filter[1]) {
            return;
          }
          return (
            <button
              key={index}
              className="bg-transparent border-2 border-white/20 p-2 px-4 rounded-full flex justify-center items-center gap-2"
              onClick={() => updateFilters(filter[0])}
            >
              {filter[0].toUpperCase()}
              <MdCancel />
            </button>
          );
        })}
      </div>
      <div>
        {filterVisibility && (
          <FilterModal
            filters={filters}
            setFilters={setFilters}
            updateFilters={updateFilters}
          />
        )}
        <div>
          {problems.map((problem, index) => (
            <div
              key={index}
              className={`flex justify-between items-center w-full gap-3 font-medium p-3 rounded-md ${
                index % 2 ? "bg-black" : "bg-gray-500"
              }`}
            >
              <FaCheck color="green" />
              <p>{problem.id}.</p>
              <p className="flex-1">{problem.name}</p>
              <p className="mx-10 text-teal-300">{problem.difficulty}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Table;
