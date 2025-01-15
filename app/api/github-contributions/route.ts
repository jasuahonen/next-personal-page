import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams
  const year = searchParams.get('year') || '2025'

  const startDate = new Date(`${year}-01-01`)
  const endDate = new Date(`${year}-12-31`)

  const contributions = []

  for (let d = new Date(startDate); d <= endDate; d.setDate(d.getDate() + 1)) {
    contributions.push({
      date: d.toISOString().split('T')[0],
      count: Math.floor(Math.random() * 15), // Increased max count for more variety
    })
  }

  return NextResponse.json(contributions)
}

