
function ExperienceCard({ company, jobTitle, timeline, description }) {
	return (
		<div className="flex flex-col bg-slate-300 w-full rounded-xl p-5 gap-2 lg:p-8 lg:max-w-200">

			<h4 className="lg:text-3xl text-2xl text-slate-950 font-bold font-sans">{company}</h4>
			<h5 className="lg:text-xl text-xl text-slate-950 font-sans">{jobTitle}</h5>
			<p className="lg:text-lg text-base text-slate-950 font-sans" >{timeline}</p>
			<p className="lg:text-xl text-base text-slate-950 font-sans pt-4 lg:pt-5">{description}</p>





		</div>

	)
}

export default ExperienceCard
