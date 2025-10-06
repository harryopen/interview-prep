import React, { useState } from "react";

const Accordians = () => {
  const [isMultiSelect, setIsMultiSelect] = useState(false);
  const [openAccordions, setOpenAccordions] = useState<number[]>([]);

  const toggleAccordion = (id: number) => {
    // 🧠 Multi-Selection Mode
    if (isMultiSelect) {
      setOpenAccordions((prev) =>
        prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
      );
      return;
    }

    // 🎯 Single-Selection Mode
    setOpenAccordions((prev) => (prev.includes(id) ? [] : [id]));
  };

  return (
    <div className="space-y-3">
      <h3
        onClick={() => setIsMultiSelect((prev) => !prev)}
        className="cursor-pointer font-semibold text-lg"
      >
        Mode: {isMultiSelect ? "Multi Selection" : "Single Selection"}
      </h3>

      {accordionData.map(({ id, title, desc }) => {
        const isOpen = openAccordions.includes(id);
        return (
          <div key={id} className="border p-2 rounded">
            <div
              onClick={() => toggleAccordion(id)}
              className="flex justify-between cursor-pointer"
            >
              <div>{title}</div>
              <button>{isOpen ? "▼" : "▲"}</button>
            </div>
            {isOpen && <p className="mt-2 text-gray-600">{desc}</p>}
          </div>
        );
      })}
    </div>
  );
};

export default Accordians;

const accordionData = [
  {
    id: 1,
    title: "What are the benefits of investing in SIP?",
    desc: "Long Term Profit",
  },
  {
    id: 2,
    title: "Interview-prep",
    desc: "Machine Coding",
  },
];
