import ProjectCard from "./ProjectCard";

function ProjectsSection() {
	return (

		<div>

			{/* DEFAULT MOBILE VIEW*/}
			<div className="flex lg:hidden flex-col justify-start items-center w-screen p-10 min-h-400 bg-slate-900">

				<h1 className="text-3xl text-slate-200 font-sans font-bold">Projects </h1>

				<ProjectCard />

			</div>

			{/* DESKTOP VIEW*/}
			<div className="hidden lg:flex w-screen min-h-400 bg-slate-900">

			</div>




		</div>


	);
}

export default ProjectsSection
