
function Navbar() {

	return (

		<nav className="flex items-center justify-around h-20 p-10 w-screen fixed bg-amber-600">

			<div className=" font-mono text-3xl font-bold">
				Logo
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


		</nav>



	);


}

export default Navbar;
