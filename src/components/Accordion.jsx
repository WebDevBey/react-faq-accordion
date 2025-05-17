import React, { useState } from "react";

const Accordion = ({ data }) => {
  const [activeItems, setActiveItems] = useState([]);
  const [allowMultiple, setAllowMultiple] = useState(false);

  const toggleItem = (id) => {
    setActiveItems((prev) => {
      if (prev.includes(id)) {
        return prev.filter((itemId) => itemId !== id);
      } else {
        if (allowMultiple) {
          return [...prev, id];
        } else {
          return [id];
        }
      }
    });
  };

  return (
    <div className="bg-gray-800 rounded-xl p-6">
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="multi-expand"
            checked={allowMultiple}
            onChange={() => setAllowMultiple(!allowMultiple)}
            className="w-4 h-4"
          />
          <label htmlFor="multi-expand" className="ml-2 text-sm text-gray-300">
            Allow multiple open
          </label>
        </div>
        <button
          className="bg-blue-600 px-3 py-2 hover:bg-blue-700 rounded-md text-sm disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={() => setActiveItems([])}
          disabled={activeItems.length === 0}
        >
          Collapse All
        </button>
      </div>
      <div className="space-y-3">
        {data.map((item) => (
          <div key={item.id} className="border border-gray-700 rounded-lg">
            <button
              onClick={() => toggleItem(item.id)}
              className="w-full flex justify-between items-center p-4 bg-gray-700 hover:bg-gray-600 cursor-pointer transition-colors duration-300"
            >
              <span className="font-medium text-gray-100">{item.question}</span>
              <span
                className={`text-gray-400 transform transition-transform duration-300 ${
                  activeItems.includes(item.id) ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>
            <div
              className={`grid transition-all duration-300 ease-in-out ${
                activeItems.includes(item.id)
                  ? "grid-rows-[1fr]"
                  : "grid-rows-[0fr]"
              }`}
            >
              <div className="overflow-hidden">
                <div className="p-4 text-gray-300">{item.answer}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Accordion;
