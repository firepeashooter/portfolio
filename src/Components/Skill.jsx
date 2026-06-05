
function Skill({ name, src, alt }) {
	return (

		<div className="flex justify-around items-center h-13 w-auto border p-5 gap-4 border-slate-950 rounded-lg">

			<img
				src={src}
				alt={alt}
				className="w-5 h-5"

			/>

			<h4 className="text-slate-900 font-mono">{name}</h4>

		</div>

	)
}

export default Skill;
