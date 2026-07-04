import ExperienceCard from "./ExperienceCard.jsx"

const description1 = [
	"During a 16-month internship within the Queen's University IT department, I spearheaded the planning and development of a live Salesforce chatbot built to assist international student applicants.",
	"Additionally, I led stakeholder requirement gathering sessions to architect and develop a public-facing Graduate Studies Request For Information (RFI) form that securely processes data into our Salesforce backend.",
	"Supported continuous deployment pipelines by drafting QA and UAT test scripts, while actively documenting and resolving tracking lifecycle bugs inside Azure DevOps."
];

const description2 = [
	"At Toyota I worked across multiple summer terms in a high-volume manufacturing environment, adhering to strict standardized work procedures to ensure precision, efficiency, and peak operational safety.",
	"I was entrusted with training, evaluating, and supervising new hires on complex assembly processes, emphasizing ergonomic safety protocols and the proper handling of heavy power tools.",
	"I collaborated within cross-functional teams to maintain rigorous quality control benchmarks, troubleshoot equipment line adjustments, and consistently meet strict daily production quotas."
];
const description3 = [
	"At Mark's I delivered high-quality, consultative customer service by actively diagnosing client needs and providing tailored product recommendations, directly contributing to elevated customer satisfaction and store recommendation metrics.",
	"I also maintained an in-depth knowledge of diverse technical apparel and safety product lines to effectively address customer inquiries and streamline the purchasing process.",
	"I collaborated closely with team members and management to optimize floor layouts, manage inventory replenishment, and ensure a cohesive, efficient service environment during peak operational hours."
];


const experiences = [
	{ company: "Queen's University IT Services", jobTitle: "Junior Developer/Business Analyst", timeline: "05/2024 - 09/2025", description: description1 },
	{ company: "Toyota Motor Manufacturing Canada", jobTitle: "Production Worker", timeline: "05/2022 - 09/2022 | 05/2023 - 09/2023", description: description2 },
	{ company: "Mark's Work Wearhouse", jobTitle: "Sales Associate", timeline: "02/2020 - 09/2021 | 11/2022 - 04/2025", description: description3 },
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
