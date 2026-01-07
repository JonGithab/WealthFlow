import React, { createContext, useContext, useMemo, useState } from 'react'

const Store = createContext(null)

const initialData = {
  confidence: 78,
  categories: [
	{ label: 'Needs', value: 450, color: '#F4D1A6' },
	{ label: 'Wants', value: 300, color: '#E8B987' },
	{ label: 'Savings', value: 300, color: '#A8C686' },
	{ label: 'Other', value: 150, color: '#FF6F61' }
  ],
  goals: [
	{ id: 'italy', name: 'Italy Trip', target: 3000, saved: 2500 },
	{ id: 'laptop', name: 'Laptop', target: 2800, saved: 1200 },
	{ id: 'courses', name: 'Courses', target: 1500, saved: 800 }
  ],
  quizAnswers: [],
  profile: null // { type: 'Adventurer', suggestions: [...] }
}

export function StoreProvider({ children }) {
  const [data, setData] = useState(() => {
	const cached = localStorage.getItem('wealthflow')
	return cached ? JSON.parse(cached) : initialData
  })

  const update = (patch) => {
	setData(prev => {
  	const next = typeof patch === 'function' ? patch(prev) : { ...prev, ...patch }
  	localStorage.setItem('wealthflow', JSON.stringify(next))
  	return next
	})
  }

  const value = useMemo(() => ({ data, update }), [data])
  return <Store.Provider value={value}>{children}</Store.Provider>
}

export function useStore() {
  const ctx = useContext(Store)
  if (!ctx) throw new Error('useStore must be used inside StoreProvider')
  return ctx
}

