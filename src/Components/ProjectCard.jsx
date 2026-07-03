import ProjectTag from './ProjectTag';



function ProjectCard({ projectName, src, alt, tags, description, date, demoLink, gitLink }) {

	return (
		<div className="flex flex-col items-center justify-start border-2 border-slate-950 rounded-xl bg-slate-300 w-full max-w-150 lg:max-w-280 min-w-[360px] p-5 m-5 gap-4 shadow-xl">


			<img
				src={src}
				alt={alt}
				className="w-150 h-auto lg:w-full lg:h-full object-contain"
			/>

			<div className="flex items-center gap-5 lg:gap-20 lg:pt-2">
				<a
					href=""
					target="_blank"
					rel="noopener noreferrer"
					className="hover:border-none hover:border-b-0 no-underline"
				>
					<button disabled className="bg-gray-600 rounded-3xl lg:rounded-[2rem] text-center p-3 max-h-15 text-sm lg:text-lg lg:p-3.5 font-bold text-slate-200">
						Live Demo
					</button>
				</a>


				<div className="flex flex-col items-center justify-center text-center">
					<h4 className="font-bold text-2xl lg:text-3xl text-slate-950">{projectName}</h4>
					<h5 className="text-slate-950 lg:text-xl">{date}</h5>
				</div>

				<a
					href={gitLink}
					target="_blank"
					rel="noopener noreferrer"
					className="hover:border-none hover:border-b-0 no-underline"
				>
					<button className="bg-violet-800 rounded-3xl lg:rounded-[2rem] text-center p-3 max-h-15 text-sm lg:text-lg lg:p-3.5 font-bold text-slate-200 cursor-pointer transition-all duration-100 ease-out hover:bg-violet-700 hover:scale-[1.02] hover:shadow-lg active:scale-[0.98]">
						See Code
					</button>
				</a>

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

			<p className='text-slate-950 text-center font-sans lg:text-xl'>{description}</p>





		</div>
	)

}

export default ProjectCard;
