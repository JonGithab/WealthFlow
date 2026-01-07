import { useStore } from '../state/store'
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
    	/trackerTracker</a>
    	/goalsGoals</a>
    	/learnLearn</a>
  	</section>

  	<section className="card">
    	<h3 className="font-semibold mb-2">Interactive Modules</h3>
    	<div className="grid grid-cols-2 gap-3">
      	/learnBudgeting • 5 min</a>
      	/quizPersonality Quiz</a>
    	</div>
  	</section>
	</div>
  )
