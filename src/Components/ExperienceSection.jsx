import ExperienceTimeline from "./ExperienceTimeline.jsx"

function ExperienceSection() {
	return (
		<div>

			<div className="flex flex-col justify-start items-center p-10 bg-slate-700 w-screen">

				<h1 className="text-3xl lg:text-5xl text-slate-200 font-sans font-bold mb-7">Experience</h1>
				<ExperienceTimeline />

			</div>

		</div>


	)

}

export default ExperienceSection
