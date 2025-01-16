"use client";

import React, { useState } from "react";
import GitHubCalendar from "react-github-calendar";

const GitHubContributions = () => {
  const [year, setYear] = useState(new Date().getFullYear()); // Default to current year

  // Generate a list of past years (e.g., last 5 years)
  const years = Array.from({ length: 5 }, (_, i) => new Date().getFullYear() - i);

  return (

    <div className="flex flex-col items-center">
        <h2 className="text-2xl font-bold font-playfair text-gray-200 mb-6">GitHub Contributions</h2>
      {/* Year Selection Dropdown */}
      <select
        className="mb-4 p-2 border rounded-md"
        value={year}
        onChange={(e) => setYear(Number(e.target.value))}
      >
        {years.map((y) => (
          <option key={y} value={y}>
            {y}
          </option>
        ))}
      </select>

      {/* GitHub Calendar */}
      <GitHubCalendar
        username="jasuahonen"
        year={year} // Dynamically update the year
      />
    </div>
  );
};

export default GitHubContributions;
