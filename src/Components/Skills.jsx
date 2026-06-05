import SkillCard from "./SkillCard";
import ReactIcon from "../assets/React.png"
import TailwindIcon from "../assets/Tailwind CSS.png"
import NodeIcon from "../assets/Node.js.png"
import PostgressIcon from "../assets/PostgresSQL.png"
import DjangoIcon from "../assets/Django.png"

const frontendSkills = [
	{ name: "React", src: ReactIcon, alt: "React Icon" },
	{ name: "Tailwind", src: TailwindIcon, alt: "Tailwind Icon" },
	{ name: "NodeJS", src: NodeIcon, alt: "React Icon" }
]

const backednSkills = [
	{ name: "Django", src: DjangoIcon, alt: "Django Icon" },
	{ name: "Postress", src: PostgressIcon, alt: "Postress Icon" },
]

function Skills() {

	return (

		<div>


			<div className="flex lg:hidden flex-col justify-start items-center p-10 bg-slate-700 w-screen">

				<h1 className="text-3xl text-slate-200 font-sans font-bold">Skills </h1>

				<SkillCard category="Frontend" skills={frontendSkills} />
				<SkillCard category="Backend" skills={backednSkills} />
			</div>

			{/*DEKSTOP VIEW*/}
			<div className="hidden lg:flex flex-col justify-start items-center p-10 bg-slate-700 w-screen">

				<div>
					<h1 className="text-5xl text-slate-200 font-sans font-bold mb-5">Skills </h1>
				</div>

				<div className="flex">
					<SkillCard category="Frontend" skills={frontendSkills} />
					<SkillCard category="Backend" skills={backednSkills} />
				</div>
			</div>

		</div>



	)
}

export default Skills;
