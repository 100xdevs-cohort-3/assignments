import React from "react";

const FilterModal = ({ filters, setFilters, updateFilters }) => {
  return (
    <div className="absolute bg-gray-300 p-3 rounded-md flex flex-col gap-3 font-medium">
      <p>Status</p>
      <div className="flex justify-start items-center gap-5">
        <div>
          <input
            type="checkbox"
            id="todo"
            checked={filters["todo"]}
            onChange={() => updateFilters("todo")}
          />
          <label htmlFor="todo">Todo</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="solved"
            checked={filters["solved"]}
            onChange={() => updateFilters("solved")}
          />
          <label htmlFor="solved">Solved</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="attempted"
            checked={filters["attempted"]}
            onChange={() => updateFilters("attempted")}
          />
          <label htmlFor="attempted">Attempted</label>
        </div>
      </div>

      <p>Difficulty</p>
      <div className="flex justify-start items-center gap-5">
        <div>
          <input
            type="checkbox"
            id="easy"
            checked={filters["easy"]}
            onChange={() => updateFilters("easy")}
          />
          <label htmlFor="easy">Easy</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="medium"
            checked={filters["medium"]}
            onChange={() => updateFilters("medium")}
          />
          <label htmlFor="medium">Medium</label>
        </div>
        <div>
          <input
            type="checkbox"
            id="hard"
            checked={filters["hard"]}
            onChange={() => updateFilters("hard")}
          />
          <label htmlFor="hard">Hard</label>
        </div>
      </div>

      <div>
        <input
          type="checkbox"
          id="tags"
          checked={filters["tags"]}
          onChange={() => updateFilters("tags")}
        />
        <label htmlFor="tags">Show tags</label>
      </div>

      <button
        className="bg-gray-500/40 p-2 rounded-md"
        onClick={() =>
          setFilters({
            todo: false,
            solved: false,
            attempted: false,
            easy: false,
            medium: false,
            hard: false,
            tags: false,
          })
        }
      >
        Reset
      </button>
    </div>
  );
};

export default FilterModal;
