import { useStore } from '../state/store'
import { Link } from 'react-router-dom'

export default function QuizResult() {
  const { data } = useStore()
  const p = data.profile || { type: 'Adventurer', suggestions: [
	'Set a dedicated savings goal for adventures',
	'Practice pausing before impulse purchases'
  ]}

  return (
	<div className="space-y-6">
  	<h2 className="text-3xl font-bold">{p.type}</h2>

  	<div className="card">
    	<p>You’re spontaneous and ready to explore, but you may overlook saving for the future.</p>
  	</div>

  	<div className="card space-y-2">
    	<p className="font-semibold">Suggestions</p>
    	<ul className="list-disc pl-5 space-y-1">
      	{p.suggestions.map(s => <li key={s}>{s}</li>)}
    	</ul>
  	</div>

  	<Link to="/learn" className="btn w-full">Start your personalized learning path</Link>
	</div>
  )
