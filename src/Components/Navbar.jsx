import { useState } from "react";
import MobileMenu from "./MobileMenu";

function Navbar() {

	const [isOpen, setIsOpen] = useState(false);

	return (

		<nav className="z-50 flex flex-col justify-center items-center min-h-20 p-10 w-full fixed bg-slate-900 text-slate-200">

			<div className="w-full h-full">
				{/* THIS IS THE DESKTOP VIEW */}
				<div className="hidden lg:flex items-center justify-between w-full h-full">
					<div className=" font-mono text-3xl font-bold">
						Benjamin
					</div>
					<div className="text-3xl font-bold">
						<ul className="flex gap-7 font-sans">

							<li>
								<a href="#hero">
									About
								</a>
							</li>
							<li>
								<a href="#skills">
									Skills
								</a>
							</li>
							<li>
								<a href="#projects">
									Projects
								</a>
							</li>
							<li>
								<a href="#experience">
									Experience
								</a>
							</li>

						</ul>
					</div>

					<div className="text-3xl font-bold">
						<a href="#footer">
							Contact
						</a>
					</div>

				</div>

				{/* THIS IS THE DEFAULT MOBILE VIEW */}
				<div className="flex lg:hidden items-center justify-between w-full h-full">
					<div className=" font-mono text-3xl font-bold">
						Benjamin
					</div>

					<button onClick={() => setIsOpen(!isOpen)}
						className="flex justify-center items-center rounded-md p-2 h-10 w-10 transition-all duration-200 hover:bg-slate-500">
						{isOpen ? "X" :

							<svg
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth={2.9}
								stroke="currentColor"
								className="h-5 w-5">
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M2 3.75h23M2 12h23M2 20.25h23"
								/>
							</svg>
						}

					</button>

				</div>

			</div>

			<MobileMenu isOpen={isOpen} />

		</nav>





	);


}

export default Navbar;
