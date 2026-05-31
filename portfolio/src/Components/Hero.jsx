import rayquazaImg from '../assets/rayquaza.png';

function Hero() {

	return (


		<div>
			<div className="flex flex-col justify-center items-center pt-20">

				<img
					src={rayquazaImg}
					alt="RAYQUAZA"
					className="w-64 h-64 rounded-full m-10"
				/>

				<div className="flex flex-col justify-center items-center font-sans">

					<h2 className="text-5xl font-bold m-3">Hi There</h2>
					<h2 className="text-5xl font-bold m-3">My Name is <span className="text-green-700">Ray</span></h2>



				</div>


			</div>

		</div>


	)

}

export default Hero;
