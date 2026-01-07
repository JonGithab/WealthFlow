import { useStore } from '../state/store'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const questions = [
  {
	q: "What's your spending philosophy?",
	a: ['I live for the moment.', 'I plan before I spend.', 'I only buy what I need.']
  },
  {
	q: 'How do you feel about taking risks with money?',
	a: ['Love it', 'Sometimes', 'Rarely']
  },
  {
	q: 'What motivates your purchases?',
	a: ['Experiences', 'Utility', 'Deals']
  }
]

export default function Quiz() {
  const { update } = useStore()
  const navigate = useNavigate()
  const [idx, setIdx] = useState(0)
  const [answers, setAnswers] = useState([])

  const choose = (ans) => {
	const next = [...answers, ans]
	setAnswers(next)
	if (idx < questions.length - 1) {
  	setIdx(idx + 1)
	} else {
  	// naive classification
  	const counts = Object.fromEntries(next.map(a => [a, 0]))
  	next.forEach(a => { counts[a] = (counts[a] || 0) + 1 })
  	const profile = next.includes('I live for the moment.') ? 'Adventurer'
                	: next.includes('I plan before I spend.') ? 'Planner'
                	: 'Minimalist'
  	update({ quizAnswers: next, profile: {
    	type: profile,
    	suggestions: profile === 'Adventurer'
      	? ['Set a dedicated savings goal for adventures', 'Pause before impulse purchases']
      	: profile === 'Planner'
      	? ['Automate savings & investing', 'Use category caps to avoid over-optimization fatigue']
      	: ['Keep a “joy” budget to avoid burnout', 'Track subscriptions quarterly']
  	}})
  	navigate('/quiz/result')
	}
  }

  const q = questions[idx]
  return (
	<div className="space-y-6">
  	<div className="text-sm text-ginger-700">Question {idx + 1} of {questions.length}</div>
  	<h2 className="text-2xl font-semibold">{q.q}</h2>
  	<div className="grid gap-3">
    	{q.a.map((ans) => (
      	<button key={ans} className="card text-left hover:bg-ginger-200" onClick={() => choose(ans)}>
        	{ans}
      	</button>
    	))}
	</div>
	</div>
  )
}