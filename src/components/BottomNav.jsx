import { NavLink } from 'react-router-dom'

const tabs = [
  { to: '/', label: 'Home', icon: '🏠' },
  { to: '/tracker', label: 'Track', icon: '💳' },
  { to: '/goals', label: 'Goals', icon: '🎯' },
  { to: '/learn', label: 'Learn', icon: '📚' }
]

export default function BottomNav() {
  return (
	<nav className="fixed bottom-0 left-0 right-0 bg-ginger-100 border-t border-ginger-200">
  	<div className="max-w-md mx-auto px-6 py-2 flex items-center justify-between">
    	{tabs.map(t => (
      	<NavLink
        	key={t.to}
        	to={t.to}
        	className={({ isActive }) =>
          	`flex flex-col items-center text-sm ${isActive ? 'text-ginger-900' : 'text-ginger-700'}`
        	}
      	>
        	<span className="text-xl">{t.icon}</span>
        	<span>{t.label}</span>
      	</NavLink>
    	))}
  	</div>
	</nav>
  )
}
