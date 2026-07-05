import ProjectCard from "./ProjectCard";
import DoomTerminal from '../assets/doomTerminal.png'
import MinecraftTerraria from '../assets/minecraftterraria.jpg'
import ChatServer from "../assets/ChatServer.png"
import Portfolio from "../assets/PortfolioWebsite.png"
import NewPortfolio from "../assets/UpdatedPortfolio.png"

const description1 =
	[
		" This is a portfolio website used mainly to display my skills and projects as a supplement to my resume. Created in React as	that was what I was most familiar with and what I've been using to make all of my web projects recently. This project taught me a lot about tailwind which I was using this project to learn, aswell as a lot of UI design which I was previously unfamiliar with. I'm honestly not sure how I ever did any sort of web development without tailwind because it is really awesome."
	]


const description2 =
	[
		"This idea was born out of wanting to learn more about how computer networks and servers work. It started as a barebones TCP server that I could send basic messages to and from between different computers. The server itself is written entirely in C using socket(), bind(), listen(), and accept() calls.",

		"Growing on this idea I decided to make a working chat server that me and my friends could use to talk over our terminals. It uses TCP requests with custom headers for the username. I then coded up a simple client with nCurses to display the relevant chat information, aswell as a window where the user can write, edit and send their message to my server."
	]

const description3 = [
	"This is a project I worked on with a senior machine learning developer at Manulife for his phd thesis. The idea is to create a synthetic dataset in python that represents a city of people that have incomes, jobs, families, all things that can change and grow as the city ages up over the years. It's essentially a simulation of an entire city.",

	"The main idea behind this was that we need data to train Machine Learning models, and while it is often difficult to obtain lot's of real data,the thesis was that maybe we can create simulated datasets that are much easier to create and train models on and that sufficeintly represent real world data. For this project I was mainly in charge of testing a lot of the features such as the marriage function,making sure that aging up the city properly progressed everyones lives, and reporting any bugs back to the senior developer."
]


const projects = [
	{ projectName: "TCP Chat Server", src: ChatServer, alt: "A chat server and client running in a terminal", tags: ['C', 'Ncurses', 'Low Level', 'TCP Protocol'], description: description2, date: '2026', gitLink: "https://github.com/firepeashooter/C-Server", hasDemo: false },
	{ projectName: "Synthetic Dataset", tags: ['Python', 'Machine Learning', 'Testing'], description: description3, date: '2023-2024', gitLink: "https://github.com/ricardoluhms/The-True-Game-of-Life", hasDemo: false },
	{ projectName: "Portfolio Website", src: NewPortfolio, alt: "Portfolio website running in a browser", tags: ['React', 'Tailwind', 'Website'], description: description1, date: '2026', gitLink: "https://github.com/firepeashooter/portfolio", demoLink: "https://firepeashooter.github.io/portfolio/", hasDemo: true },
]


function ProjectsSection() {
	return (

		<div>

			{/* DEFAULT MOBILE VIEW*/}
			<div className="flex lg:hidden flex-col justify-start items-center w-screen p-10 bg-slate-900">

				<h1 className="text-3xl text-slate-200 font-sans font-bold">Projects </h1>

				{
					projects.map((project, index) => {
						return (

							<ProjectCard key={index}
								projectName={project.projectName}
								src={project.src}
								alt={project.alt}
								tags={project.tags}
								description={project.description}
								date={project.date}
								gitLink={project.gitLink}
								demoLink={project.demoLink}
								hasDemo={project.hasDemo}
							/>

						)
					})
				}



			</div>

			{/* DESKTOP VIEW*/}
			<div className="hidden lg:flex flex-col justify-start items-center p-10 w-screen bg-slate-900">

				<h1 className="text-5xl text-slate-200 font-sans font-bold mb-5">Projects </h1>

				<div className="flex flex-col">


					{
						projects.map((project, index) => {
							return (

								<ProjectCard key={index}
									projectName={project.projectName}
									src={project.src}
									alt={project.alt}
									tags={project.tags}
									description={project.description}
									date={project.date}
									gitLink={project.gitLink}
									demoLink={project.demoLink}
									hasDemo={project.hasDemo}
								/>

							)
						})
					}
				</div>




			</div>




		</div>


	);
}

export default ProjectsSection
