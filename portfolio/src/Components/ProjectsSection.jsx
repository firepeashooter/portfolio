import ProjectCard from "./ProjectCard";
import DoomTerminal from '../assets/doomTerminal.png'
import MinecraftTerraria from '../assets/minecraftterraria.jpg'

const description1 =
	`This is a working version of doom running in a terminal I wrote this library myself
				using C++ and bash. Took me a pretty long time but now I can play doom when I'm
				supposed to be doing work and to be honest it's pretty based to just pull up doom itself
				inside my terminal. W Project.`

const description2 =
	`This Portfolio site was made with a combination of minecraft and terraria. Most people naively 
	assume that terraria is simply a 2d version of minecraft but they are mistaken. Terraria can play doom.`


const projects = [
	{ projectName: "Terminal Doom", src: DoomTerminal, alt: "Doom running in Terminal", tags: ['C++', 'Bash', 'Terminal'], description: description1, date: '2025' },
	{ projectName: "Minecraft Terraria", src: MinecraftTerraria, alt: "Minecraft Running in Terraria", tags: ['Minecraft', 'Terraria', 'Gaming'], description: description2, date: '2022' },
]


function ProjectsSection() {
	return (

		<div>

			{/* DEFAULT MOBILE VIEW*/}
			<div className="flex lg:hidden flex-col justify-start items-center w-screen p-10 min-h-400 bg-slate-900">

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
							/>

						)
					})
				}



			</div>

			{/* DESKTOP VIEW*/}
			<div className="hidden lg:flex w-screen min-h-400 bg-slate-900">

			</div>




		</div>


	);
}

export default ProjectsSection
