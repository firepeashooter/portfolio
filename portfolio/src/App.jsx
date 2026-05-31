import './index.css'
import ProjectCard from './Components/ProjectCard.jsx'
import Navbar from './Components/Navbar.jsx'
import Hero from './Components/Hero.jsx'

function App() {

	return (
		<div className="flex min-h-screen flex-col items-center justify-start bg-slate-900 text-white">
			<Navbar />
			<Hero />
		</div>
	)
}

export default App
