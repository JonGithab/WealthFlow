import { Doughnut } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from 'chart.js'
ChartJS.register(ArcElement, Tooltip, Legend)

export default function SpendingWheel({ categories }) {
  const data = {
	labels: categories.map(c => c.label),
	datasets: [{
  	data: categories.map(c => c.value),
  	backgroundColor: categories.map(c => c.color),
  	borderWidth: 0
	}]
  }
  const options = {
	plugins: {
  	legend: { display: false }
	},
	cutout: '70%'
  }
  return (
	<div className="card">
  	<Doughnut data={data} options={options} />
  	<div className="mt-4 grid grid-cols-2 gap-2">
    	{categories.map(c => (
      	<div key={c.label} className="flex items-center gap-2">
        	<span className="inline-block w-3 h-3 rounded" style={{ backgroundColor: c.color }} />
        	<span className="text-sm">{c.label}: ${c.value}</span>
      	</div>
    	))}
  	</div>
	</div>
  )
}
