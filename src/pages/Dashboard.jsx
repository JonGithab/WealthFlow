import { useStore } from '../state/store'
import { Link } from 'react-router-dom'
import SpendingWheel from '../components/SpendingWheel'

export default function Dashboard() {
  const { data } = useStore()

  return (
	<div className="space-y-4">
  	<section className="card">
    	<p className="text-sm">Financial Confidence Score</p>
    	<div className="mt-2 bg-ginger-200 rounded-full h-2">
      	<div className="h-2 bg-ginger-400 rounded-full" style={{ width: `${data.confidence}%` }} />
    	</div>
    	<p className="mt-2 font-semibold">{data.confidence}</p>
  	</section>

  	<SpendingWheel categories={data.categories} />

	   <section className="grid grid-cols-3 gap-3">
	    	<Link to="/tracker" className="card text-center">Tracker</Link>
	    	<Link to="/goals" className="card text-center">Goals</Link>
	    	<Link to="/learn" className="card text-center">Learn</Link>
	   	</section>

  	<section className="card">
    	<h3 className="font-semibold mb-2">Interactive Modules</h3>
	      <div className="grid grid-cols-2 gap-3">
	      	<Link to="/learn" className="card">Budgeting • 5 min</Link>
	      	<Link to="/quiz" className="card">Personality Quiz</Link>
	      	</div>
  	</section>
	 	</div>
	  )

	}
