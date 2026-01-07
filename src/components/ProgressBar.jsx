export default function ProgressBar({ value, max }) {
  const pct = Math.min(100, Math.round((value / max) * 100))
  return (
	<div className="progress w-full">
  	<span style={{ width: `${pct}%` }} />
	</div>
  )
}
