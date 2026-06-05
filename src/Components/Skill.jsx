
function Skill({ name, src, alt }) {
	return (

		<div className="flex justify-around items-center h-13 w-auto border p-5 lg:p-8 gap-4 border-slate-950 rounded-lg">

			<img
				src={src}
				alt={alt}
				className="w-5 h-5 lg:w-7 lg:h-7"

			/>

			<h4 className="text-slate-900 font-mono lg:text-2xl">{name}</h4>

		</div>

	)
}

export default Skill;
