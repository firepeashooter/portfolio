import SkillCard from "./SkillCard";
import ReactIcon from "../assets/React.png"
import TailwindIcon from "../assets/Tailwind CSS.png"
import NodeIcon from "../assets/Node.js.png"
import PostgressIcon from "../assets/PostgresSQL.png"
import DjangoIcon from "../assets/Django.png"
import MySQLIcon from "../assets/MySQL.png"
import SQLiteIcon from "../assets/SQLite.png"
import GitHubIcon from "../assets/GitHub.png"
import gitIcon from "../assets/Git.png"
import LinuxIcon from "../assets/Arch Linux.png"
import SalesforceIcon from "../assets/Salesforce.png"
import AzureIcon from "../assets/Azure Devops.png"
import AmazonIcon from "../assets/AWS.png"
import DockerIcon from "../assets/Docker.png"
import PythonIcon from "../assets/Python.png"
import JSIcon from "../assets/JavaScript.png"
import TSIcon from "../assets/TypeScript.png"
import JavaIcon from "../assets/Java.png"
import CIcon from "../assets/C.png"
import SQLIcon from "../assets/Azure SQL Database.png"
import NumpyIcon from "../assets/NumPy.png"
import MatIcon from "../assets/Matplotlib.png"
import PytorchIcon from "../assets/Python.png"
import PandasIcon from "../assets/Pandas.png"
import JestIcon from "../assets/Jest.png"

const frontendSkills = [
	{ name: "React", src: ReactIcon, alt: "React Icon" },
	{ name: "Tailwind", src: TailwindIcon, alt: "Tailwind Icon" },
	{ name: "NodeJS", src: NodeIcon, alt: "React Icon" },
	{ name: "HTML", src: NodeIcon, alt: "React Icon" },
	{ name: "CSS", src: NodeIcon, alt: "React Icon" },
]

const backednSkills = [
	{ name: "Django", src: DjangoIcon, alt: "Django Icon" },
	{ name: "PostreSQL", src: PostgressIcon, alt: "Postress Icon" },
	{ name: "MySQL", src: MySQLIcon, alt: "Postress Icon" },
	{ name: "SQLite", src: SQLiteIcon, alt: "Postress Icon" },
]

const tools = [
	{ name: "GitHub", src: GitHubIcon, alt: "Django Icon" },
	{ name: "git", src: gitIcon, alt: "Django Icon" },
	{ name: "Linux", src: LinuxIcon, alt: "Django Icon" },
	{ name: "Salesforce", src: SalesforceIcon, alt: "Django Icon" },
	{ name: "Azure Dev Ops", src: AzureIcon, alt: "Django Icon" },
	{ name: "Amazon Web Services", src: AmazonIcon, alt: "Django Icon" },
	{ name: "Docker", src: DockerIcon, alt: "Django Icon" },
]

const languages = [
	{ name: "Python", src: PythonIcon, alt: "Django Icon" },
	{ name: "Javascript", src: JSIcon, alt: "Django Icon" },
	{ name: "TypeScript", src: TSIcon, alt: "Django Icon" },
	{ name: "Java", src: JavaIcon, alt: "Django Icon" },
	{ name: "C", src: CIcon, alt: "Django Icon" },
	{ name: "SQL", src: SQLIcon, alt: "Django Icon" },

]

const libraries = [
	{ name: "Numpy", src: NumpyIcon, alt: "Django Icon" },
	{ name: "Matplotlib", src: MatIcon, alt: "Django Icon" },
	{ name: "Pytorch", src: PytorchIcon, alt: "Django Icon" },
	{ name: "Pandas", src: PandasIcon, alt: "Django Icon" },
	{ name: "Jest", src: JestIcon, alt: "Django Icon" },
]

function Skills() {

	return (

		<div>


			<div className="flex lg:hidden flex-col justify-start items-center p-10 bg-slate-700 w-screen">

				<h1 className="text-3xl text-slate-200 font-sans font-bold">Skills </h1>

				<SkillCard category="Frontend" skills={frontendSkills} />
				<SkillCard category="Backend" skills={backednSkills} />
				<SkillCard category="Tools" skills={tools} />
				<SkillCard category="Languages" skills={languages} />
				<SkillCard category="Libraries" skills={libraries} />
			</div>

			{/*DEKSTOP VIEW*/}
			<div className="hidden lg:flex flex-col justify-start items-center p-10 bg-slate-700 w-screen">

				<div>
					<h1 className="text-5xl text-slate-200 font-sans font-bold mb-5">Skills </h1>
				</div>

				<div className="flex flex-col gap-5 w-full">

					<div className="flex justify-center items-center gap-6 w-full">
						<SkillCard category="Frontend" skills={frontendSkills} />
						<SkillCard category="Backend" skills={backednSkills} />
					</div>

					<div className="flex justify-around gap-6 w-full">
						<SkillCard category="Tools" skills={tools} />
						<SkillCard category="Languages" skills={languages} />
						<SkillCard category="Libraries" skills={libraries} />
					</div>

				</div>
			</div>

		</div>



	)
}

export default Skills;
