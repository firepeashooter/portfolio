import DoomTerminal from '../assets/doomTerminal.png'
import ProjectTag from './ProjectTag';

const tags = ['Minecrat', 'Factorio', 'DontStarve']


function ProjectCard() {

	return (

		<div className="flex flex-col items-center justify-start border-2 border-slate-950 rounded-xl bg-slate-300 w-full max-w-150 min-w-[360px] p-5 m-5 gap-4">


			<img
				src={DoomTerminal}
				alt="Terminal Doom"
				className="w-full h-full"
			/>

			<div className="flex items-center gap-3">

				<button className="bg-violet-800 rounded-3xl text-center p-3 max-h-15 text-sm font-bold text-slate-200">Live Demo</button>

				<div className="flex flex-col items-center justify-center">
					<h4 className="font-bold text-2xl text-slate-950">Project 1</h4>
					<h5 className="text-slate-950">2025</h5>
				</div>


				<button className="bg-violet-800 rounded-3xl text-center p-3 max-h-15 text-sm font-bold text-slate-200">See Code</button>
			</div>


			<div className='flex flex-wrap gap-2 justify-center items-center'>

				{
					tags.map((tag, index) => {
						return (

							<ProjectTag key={index}
								name={tag}
							/>

						)
					})
				}


			</div>




		</div>
	)

}

export default ProjectCard;
