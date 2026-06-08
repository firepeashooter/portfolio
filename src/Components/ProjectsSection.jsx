import ProjectCard from "./ProjectCard";
import DoomTerminal from '../assets/doomTerminal.png'
import MinecraftTerraria from '../assets/minecraftterraria.jpg'
import ChatServer from "../assets/ChatServer.png"
import Portfolio from "../assets/PortfolioWebsite.png"

const description1 =
	`This portfolio website was made with react and tailwind`

const description2 =
	`A TCP server I coded from scratch in C to learn about computer networking`

const description3 =
	`A project I worked on with a senior machine learning developer at manulife for his phd thesis`


const projects = [
	{ projectName: "TCP Chat Server", src: ChatServer, alt: "A chat server and client running in a terminal", tags: ['C', 'Ncurses', 'Low Level', 'TCP Protocol'], description: description2, date: '2026', gitLink: "https://github.com/firepeashooter/C-Server" },
	{ projectName: "Synthetic Dataset", tags: ['Python', 'Machine Learning', 'Testing'], description: description3, date: '2023-2024', gitLink: "https://github.com/ricardoluhms/The-True-Game-of-Life" },
	{ projectName: "Portfolio Website", src: Portfolio, alt: "Portfolio website running in a browser", tags: ['React', 'Tailwind', 'Website'], description: description1, date: '2026', gitLink: "https://github.com/firepeashooter/portfolio" },
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
