
function MobileMenu({ isOpen }) {

	return (

		<div className={`h-full w-full m-5 border rounded-md border-slate500 p-5 transition-all duration-300 ease-in-out 
			${isOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "bg-transparent opacity-0 -translate-y-2 pointer-events-none"}`} >

			<ul className="flex flex-col gap-7">
				<li className=" p-1 hover:bg-slate-500 rounded-md">About</li>
				<li className=" p-1 hover:bg-slate-500 rounded-md">Skills</li>
				<li className=" p-1 hover:bg-slate-500 rounded-md">Projects</li>
				<li className=" p-1 hover:bg-slate-500 rounded-md">Experience</li>

			</ul>




		</ div>



	)

}

export default MobileMenu;
