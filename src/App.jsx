import { Routes, Route, NavLink } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import Tracker from './pages/Tracker'
import Goals from './pages/Goals'
import Learn from './pages/Learn'
import Quiz from './pages/Quiz'
import QuizResult from './pages/QuizResult'
import BottomNav from './components/BottomNav'
import { StoreProvider } from './state/store'

export default function App() {
  return (
	<StoreProvider>
  	<div className="max-w-md mx-auto min-h-screen bg-ginger-50">
    	{/* Header */}
    	<header className="sticky top-0 z-10 bg-ginger-50/80 backdrop-blur-sm">
      	<div className="px-4 py-4 flex items-center justify-between">
        	<h1 className="text-2xl font-bold">WealthFlow</h1>
        	<NavLink to="/learn" className="badge">Learn</NavLink>
      	</div>
    	</header>

    	{/* Content */}
    	<main className="px-4 pb-24">
      	<Routes>
        	<Route path="/" element={<Dashboard />} />
        	<Route path="/tracker" element={<Tracker />} />
        	<Route path="/goals" element={<Goals />} />
        	<Route path="/learn" element={<Learn />} />
        	<Route path="/quiz" element={<Quiz />} />
        	<Route path="/quiz/result" element={<QuizResult />} />
      	</Routes>
    	</main>

    	{/* Bottom Nav */}
    	<BottomNav />
  	</div>
	</StoreProvider>
  )
}
