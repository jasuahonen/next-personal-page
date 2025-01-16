"use client";

import React, { useState } from "react";
import GitHubCalendar from "react-github-calendar";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const GitHubContributions = () => {
  const [year, setYear] = useState(new Date().getFullYear()); // Default to current year

  // Generate a list of past years (e.g., last 5 years)
  const years = Array.from({ length: 5 }, (_, i) => new Date().getFullYear() - i);

  return (
    <div className="flex flex-col items-center">
      <h2 className="text-xl md:text-2xl font-bold font-playfair text-gray-200 mb-6">GitHub Contributions</h2>

      <Select
        value={year.toString()}
        onValueChange={(value) => setYear(Number(value))}
      >
        <SelectTrigger className="w-32 mb-4 bg-black/50 backdrop-blur-sm border-gray-700 text-gray-200 text-sm">
          <SelectValue placeholder="Select Year" />
        </SelectTrigger>
        <SelectContent className="bg-black/50 backdrop-blur-sm border-gray-700">
          {years.map((y) => (
            <SelectItem
              key={y}
              value={y.toString()}
              className="text-gray-200 hover:bg-gray-800/50 focus:bg-gray-800/50 focus:text-gray-200"
            >
              {y}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      <GitHubCalendar
        username="jasuahonen"
        year={year}
      />
    </div>
  );
};

export default GitHubContributions;
