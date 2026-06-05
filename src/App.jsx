import './index.css'
import ProjectCard from './Components/ProjectCard.jsx'
import Navbar from './Components/Navbar.jsx'
import Hero from './Components/Hero.jsx'
import Skills from './Components/Skills.jsx'
import ProjectsSection from './Components/ProjectsSection.jsx'
import ExperienceSection from './Components/ExperienceSection.jsx'
import Footer from './Components/Footer.jsx'

function App() {

	return (
		<div className="flex min-h-screen flex-col items-center justify-start bg-slate-900 text-white">
			<Navbar />
			<Hero />
			<Skills />
			<ProjectsSection />
			<ExperienceSection />
			<Footer />





		</div>
	)
}

export default App
