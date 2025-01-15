'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

type Contribution = {
  date: string
  count: number
}

const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

export default function GithubContributions() {
  const [contributions, setContributions] = useState<Contribution[]>([])
  const [selectedYear, setSelectedYear] = useState('2025')

  useEffect(() => {
    fetch(`/api/github-contributions?year=${selectedYear}`)
      .then(response => response.json())
      .then(data => setContributions(data))
  }, [selectedYear])

  const getColor = (count: number) => {
    if (count === 0) return 'bg-transparent'
    if (count < 5) return 'bg-primary/30'
    if (count < 10) return 'bg-primary/60'
    if (count < 15) return 'bg-primary/80'
    return 'bg-primary'
  }

  const groupedContributions = contributions.reduce((acc, contribution) => {
    const date = new Date(contribution.date)
    const weekNumber = Math.floor((date.getDate() - 1) / 7)
    const dayOfWeek = date.getDay()

    if (!acc[weekNumber]) {
      acc[weekNumber] = Array(7).fill(null)
    }
    acc[weekNumber][dayOfWeek] = contribution
    return acc
  }, {} as Record<number, (Contribution | null)[]>)

  return (
    <section className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold font-playfair text-gray-200 mb-6">GitHub Contributions</h2>
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
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="bg-black/50 backdrop-blur-sm rounded-lg p-6 overflow-x-auto"
      >
        <div className="grid grid-flow-col gap-1">
          <div className="grid grid-rows-7 gap-1 text-xs text-right pr-2">
            {weekdays.map((day) => (
              <div key={day} className="h-4 flex items-center justify-end">{day}</div>
            ))}
          </div>
          {Object.values(groupedContributions).map((week, weekIndex) => (
            <div key={weekIndex} className="grid grid-rows-7 gap-1">
              {week.map((contribution, dayIndex) => (
                <motion.div
                  key={`${weekIndex}-${dayIndex}`}
                  className={`h-4 w-4 rounded-sm ${contribution ? getColor(contribution.count) : 'bg-transparent'}`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: weekIndex * 0.05 + dayIndex * 0.01 }}
                  title={contribution ? `${contribution.count} contributions on ${contribution.date}` : 'No contributions'}
                />
              ))}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}

