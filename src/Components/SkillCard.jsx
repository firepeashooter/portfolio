import Skill from "./Skill";

function SkillCard({ category, skills }) {

	return (

		<div className="flex flex-col items-center justify-start border-slate-950 rounded-xl bg-slate-300 w-full max-w-100 lg:max-w-150 p-5 m-5 gap-8 shadow-xl">
			<h3 className="font-bold text-2xl lg:text-3xl text-slate-950">{category}</h3>
			<div className="flex flex-wrap justify-center gap-4">

				{
					skills.map((skill, index) => {
						return (
							<Skill
								key={index}
								name={skill.name}
								src={skill.src}
								alt={skill.alt}

							/>
						)
					})
				}

			</div>

		</div>

	)


}

export default SkillCard;
