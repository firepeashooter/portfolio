import SocialButton from "./SocialButton.jsx"

function Footer() {
	return (
		<div className="flex flex-col gap-10 lg:flex-row justify-around items-center w-full p-10">
			<div className="flex flex-col gap-5">

				<h4 className="text-2xl font-sans text-slate-100">Rayquaza's Portfolio Site</h4>
				<p className="font-sans text-sm text-slate-300">Thank you for checking out my portfolio site!</p>
				<p className="font-sans text-sm text-slate-300">Inpirational Quote! Connect with me over socials</p>

			</div>

			<div className="flex flex-col gap-3">
				<h4 className="text-2xl font-sans text-slate-100">Contact Information</h4>

				<div className="flex gap-2 items-center">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						className="w-6 h-6 text-slate-400"
					>
						<path
							fillRule="evenodd"
							d="M1.5 4.5A3 3 0 0 1 4.5 1.5h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
							clipRule="evenodd"
						/>
					</svg>
					<p className="font-sans text-sm text-slate-300">226-224-9308</p>
				</div>

				<div className="flex items-center gap-2">
					<svg
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 24 24"
						fill="currentColor"
						className="w-6 h-6 text-slate-400"
					>
						<path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
						<path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
					</svg>

					<p className="font-sans text-sm text-slate-300">benjamin.braun2003@gmail.com</p>
				</div>


				<div className="flex flex-wrap gap-2">
					<SocialButton href="https://linkedin.com">

						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 382 382"
							fill="currentColor"
							className="w-5 h-5"
						>
							<g id="SVGRepo_iconCarrier">
								<path d="M347.445,0H34.555C15.471,0,0,15.471,0,34.555v312.889C0,366.529,15.471,382,34.555,382h312.889 C366.529,382,382,366.529,382,347.444V34.555C382,15.471,366.529,0,347.445,0z M118.207,329.844c0,5.554-4.502,10.056-10.056,10.056 H65.345c-5.554,0-10.056-4.502-10.056-10.056V150.403c0-5.554,4.502-10.056,10.056-10.056h42.806 c5.554,0,10.056,4.502,10.056,10.056V329.844z M86.748,123.432c-22.459,0-40.666-18.207-40.666-40.666S64.289,42.1,86.748,42.1 s40.666,18.207,40.666,40.666S109.208,123.432,86.748,123.432z M341.91,330.654c0,5.106-4.14,9.246-9.246,9.246H286.73 c-5.106,0-9.246-4.14-9.246-9.246v-84.168c0-12.556,3.683-55.021-32.813-55.021c-28.309,0-34.051,29.066-35.204,42.11v97.079 c0,5.106-4.139,9.246-9.246,9.246h-44.426c-5.106,0-9.246-4.14-9.246-9.246V149.593c0-5.106,4.14-9.246,9.246-9.246h44.426 c5.106,0,9.246,4.14,9.246,9.246v15.655c10.497-15.753,26.097-27.912,59.312-27.912c73.552,0,73.131,68.716,73.131,106.472 L341.91,330.654L341.91,330.654z" />
							</g>
						</svg>
					</SocialButton >

				</div>

			</div>

		</div>

	)
}

export default Footer

