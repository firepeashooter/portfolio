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

		<div className="flex flex-col justify-start items-center p-10 bg-slate-700 w-screen min-h-300">

			<h1 className="text-3xl text-slate-200 font-sans font-bold">Skills </h1>

			<SkillCard category="Frontend" skills={frontendSkills} />
			<SkillCard category="Backend" skills={backednSkills} />





		</div>

	)
}

export default Skills;
