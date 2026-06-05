import rayquazaImg from '../assets/rayquaza.png';
import TiltImage from './TiltImage.jsx';


function Hero() {

	return (


		<div>
			<div className="flex flex-col lg:hidden w-screen min-h-screen justify-start items-center pt-30">

				<img
					src={rayquazaImg}
					alt="RAYQUAZA"
					className="w-64 h-64 rounded-full m-10"
				/>

				<div className="flex flex-col justify-center items-center">

					<h2 className="text-5xl font-bold m-3 text-center">Hi There</h2>
					<h2 className="text-5xl font-bold m-3 text-center">My Name is <span className="text-green-700">Ray</span></h2>

				</div>

			</div>


			{/*DESKTOP VERSION */}
			<div className="hidden lg:flex min-h-screen w-screen justify-around items-center pt-25">

				<div className="flex flex-col justify-center items-center">

					<h2 className="text-7xl font-bold m-3">Hi There</h2>
					<h2 className="text-7xl font-bold m-3">My Name is <span className="text-green-700">Ray</span></h2>

				</div>

				<TiltImage src={rayquazaImg} alt="Image of Rayquaza the Pokemon" />

			</div>
		</div>


	)

}

export default Hero;
