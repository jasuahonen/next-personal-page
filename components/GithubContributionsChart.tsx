'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type Contribution = {
  date: string
  count: number
}

export default function GithubContributionsChart() {
  const [contributions, setContributions] = useState<Contribution[]>([])
  const [selectedYear, setSelectedYear] = useState('2025')

  useEffect(() => {
    fetch(`/api/github-contributions?year=${selectedYear}`)
      .then(response => response.json())
      .then(data => setContributions(data))
  }, [selectedYear])

  const getColor = (count: number) => {
    if (count === 0) return 'bg-gray-800'
    if (count < 5) return 'bg-green-900'
    if (count < 10) return 'bg-green-700'
    return 'bg-green-500'
  }

  return (
    <section className="mb-12 px-4">
      <div className="mb-4 flex items-center justify-between">
        <h2 className="font-playfair text-xl font-bold">GitHub Contributions</h2>
        <Select onValueChange={setSelectedYear} defaultValue={selectedYear}>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select year" />
          </SelectTrigger>
          <SelectContent>
            {['2022', '2023', '2024', '2025'].map((year) => (
              <SelectItem key={year} value={year}>
                {year}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>
      <div className="grid grid-cols-52 gap-1">
        {contributions.map((contribution, index) => (
          <motion.div
            key={contribution.date}
            className={`h-4 w-4 ${getColor(contribution.count)}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: index * 0.01 }}
            title={`${contribution.count} contributions on ${contribution.date}`}
          />
        ))}
      </div>
    </section>
  )
}

