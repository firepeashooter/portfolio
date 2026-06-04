
function ExperienceCard({ company, jobTitle, timeline, description }) {
	return (
		<div className="flex flex-col bg-slate-300 w-full rounded-xl p-5 gap-2">

			<h4 className="text-xl text-slate-950 font-bold font-sans">{company}</h4>
			<h5 className="text-lg text-slate-950 font-sans">{jobTitle}</h5>
			<p className="text-xs text-slate-950 font-sans" >{timeline}</p>
			<p className="text-sm text-slate-950 font-sans">{description}</p>





		</div>

	)
}

export default ExperienceCard
