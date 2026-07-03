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

			<section id="hero">
				<Hero />
			</section>

			<section id="skills">
				<Skills />
			</section>

			<section id="projects">
				<ProjectsSection />
			</section>

			<section id="experience">
				<ExperienceSection />
			</section>

			<section id="footer" className='w-full'>

				<Footer />
			</section>





		</div>
	)
}

export default App
