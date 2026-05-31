
function Navbar() {

	return (

		<nav className="flex items-center h-20 p-10 w-screen fixed bg-slate-950 text-slate-100">


			{/* THIS IS THE DESKTOP VIEW */}
			<div className="hidden lg:flex items-center justify-around w-full h-full">
				<div className=" font-mono text-3xl font-bold">
					Logo (Desktop)
				</div>
				<div className="text-3xl font-bold">
					<ul className="flex gap-7 font-sans">

						<li>About </li>
						<li>Skills </li>
						<li>Projects </li>
						<li>Experience </li>

					</ul>
				</div>

				<div className="text-3xl font-bold">
					Contact
				</div>

			</div>

			{/* THIS IS THE DEFAULT MOBILE VIEW */}
			<div className="flex lg:hidden items-center justify-around w-full h-full">
				<div className=" font-mono text-3xl font-bold">
					Logo (Mobile View)
				</div>

				<button className="flex justify-center items-center border-2 border-slate-500 rounded-md p-2 h-10 w-10">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth={2.9}
						stroke="currentColor"
						className="h-5 w-5" // Tailwind sets the icon size here
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M2 3.75h23M2 12h23M2 20.25h23"
						/>
					</svg>
				</button>

			</div>
		</nav>



	);


}

export default Navbar;
