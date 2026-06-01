import './index.css'
import ProjectCard from './Components/ProjectCard.jsx'
import Navbar from './Components/Navbar.jsx'
import Hero from './Components/Hero.jsx'
import Skills from './Components/Skills.jsx'

function App() {

	return (
		<div className="flex min-h-screen flex-col items-center justify-start bg-slate-900 text-white">
			<Navbar />
			<Hero />
			<Skills />

		</div>
	)
}

export default App
