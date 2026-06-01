import DoomTerminal from '../assets/doomTerminal.png'

function ProjectCard() {

	return (

		<div className="flex flex-col items-center justify-start border-2 border-slate-950 rounded-xl bg-slate-300 w-full max-w-100 p-5 m-5 gap-8">


			<img
				src={DoomTerminal}
				alt="Terminal Doom"
				className="w-full h-full"
			/>

			<div className="flex gap-2">

				<button className="bg-violet-800 rounded-xl text-center">Live Demo</button>

				<div className="flex flex-col items-center justify-center">
					<h4 className="font-bold text-2xl text-slate-950">Project 1</h4>
					<h5 className="text-slate-950">2025</h5>
				</div>


				<button className="bg-violet-800 rounded-xl text-center">See Code</button>
			</div>

			<div>

			</div>



		</div>
	)

}

export default ProjectCard;
