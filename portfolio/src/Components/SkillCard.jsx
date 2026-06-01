import Skill from "./Skill";
import ReactIcon from "../assets/React.png"
import TailwindIcon from "../assets/Tailwind CSS.png"
import NodeIcon from "../assets/Node.js.png"

function SkillCard() {

	return (

		<div className="flex flex-col items-center justify-start border-2 border-slate-950 rounded-xl bg-slate-300 p-5 m-5 gap-8">
			<h3 className="font-bold text-2xl text-slate-950">Frontend</h3>
			<div className="flex flex-wrap justify-center gap-4">

				<Skill name="React" src={ReactIcon} alt="React Icon" />
				<Skill name="Tailwind" src={TailwindIcon} alt="Tailwind Icon" />
				<Skill name="Node" src={NodeIcon} alt="NodeJS Icon" />


			</div>

		</div>

	)


}

export default SkillCard;
