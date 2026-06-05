
function ExperienceCard({ company, jobTitle, timeline, description }) {
	return (
		<div className="flex flex-col bg-slate-300 w-full rounded-xl p-5 gap-2 lg:p-8 lg:max-w-200">

			<h4 className="lg:text-3xl text-xl text-slate-950 font-bold font-sans">{company}</h4>
			<h5 className="lg:text-xl text-lg text-slate-950 font-sans">{jobTitle}</h5>
			<p className="lg:text-lg text-xs text-slate-950 font-sans" >{timeline}</p>
			<p className="lg:text-xl text-sm text-slate-950 font-sans lg:pt-5">{description}</p>





		</div>

	)
}

export default ExperienceCard
