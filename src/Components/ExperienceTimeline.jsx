import ExperienceCard from "./ExperienceCard.jsx"

const description1 = `My time at roblox was wonderful. I was a junior developer
						for the tycoon game team, I made a lot of tycoon games :)`

const description2 = `Netflix was great I just spent all of my time watching shows
						that I will likley never remember, but still twas cool`

const description3 = `Once upon a time i went to burger king high and i was afraid everyone there
knew i was high so i ordered a burger and long story short eating that burger high changed my life forever`


const experiences = [
	{ company: "Roblox", jobTitle: "Junior Developer", timeline: "2020-2021", description: description1 },
	{ company: "Netflix", jobTitle: "QA Watcher", timeline: "2021-204", description: description2 },
	{ company: "Burger King", jobTitle: "High Burger", timeline: "10 minutes", description: description2 },
]

function ExperienceTimeline() {
	return (
		<div>

			<div className="flex lg:hidden justify-start, w-full">

				<div className="w-2 bg-slate-950 rounded-full" />

				<div className="flex flex-col w-full ml-5 gap-10">

					{
						experiences.map((experience, index) => {
							return (
								<ExperienceCard key={index}
									company={experience.company}
									jobTitle={experience.jobTitle}
									timeline={experience.timeline}
									description={experience.description}
								/>
							)
						})
					}


				</div>


			</div>

			<div className="hidden lg:block relative w-full max-w-7xl mx-auto py-10">
				{/* THE CENTER LINE */}
				<div className="absolute left-1/2 top-0 bottom-0 w-2 bg-slate-950 transform -translate-x-1/2 rounded-full" />

				<div className="flex flex-col w-full gap-16">
					{experiences.map((experience, index) => {

						{/* 💡 THE SECRET SAUCE: 
                        Index 0 % 2 = 0 (True -> Left side)
                        Index 1 % 2 = 1 (False -> Right side)
                        Index 2 % 2 = 0 (True -> Left side) ... and so on */}
						const isEven = index % 2 === 0;

						return (
							<div key={index} className="relative grid grid-cols-2 w-full">

								{/* The Center Dot stays exactly on the middle track line */}
								<div className="absolute left-1/2 top-8 -translate-x-1/2 w-5 h-5 bg-violet-800 border-4 border-slate-950 rounded-full z-10" />

								{/* LEFT CHANNEL COLUMN: 
                                If it's even, we show the card block. If it's odd, we render it completely invisible 
                                so it preserves its grid shape footprint on the left side of the screen */}
								<div className={`pr-12 text-right ${isEven ? 'block' : 'invisible h-0 pointer-events-none'}`}>
									<ExperienceCard
										company={experience.company}
										jobTitle={experience.jobTitle}
										timeline={experience.timeline}
										description={experience.description}
									/>
								</div>

								{/* RIGHT CHANNEL COLUMN: 
                                If it's odd (!isEven), we show the card block. If it's even, we turn it invisible */}
								<div className={`pl-12 text-left ${!isEven ? 'block' : 'invisible h-0 pointer-events-none'}`}>
									<ExperienceCard
										company={experience.company}
										jobTitle={experience.jobTitle}
										timeline={experience.timeline}
										description={experience.description}
									/>
								</div>

							</div>
						);
					})}
				</div>
			</div>

		</div>
	)
}

export default ExperienceTimeline
