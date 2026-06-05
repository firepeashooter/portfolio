import TiltImage from './TiltImage.jsx';
import SquareMe from '../assets/SquareBitmojiMe.png'


function Hero() {

	return (


		<div>
			<div className="flex flex-col lg:hidden w-screen min-h-screen justify-around items-center pt-30">

				<div
					className="w-70 h-70 rounded-full shadow-2xl overflow-hidden bg-green-800"
				>
					<img
						src={SquareMe}
						alt="Bitmoji style profile picture of Ben"
						className="w-100 h-100 object-cover -translate-y-[60px] -translate-x-[10px] rounded-full"
					/>
				</div>


				<div className="flex flex-col justify-center items-center">

					<h2 className="text-5xl font-bold m-3 text-center">Hi There,</h2>
					<h2 className="text-5xl font-bold m-3 text-center">My Name is <span className="text-green-700">Ben</span></h2>

				</div>

			</div>


			{/*DESKTOP VERSION */}
			<div className="hidden lg:flex min-h-screen w-screen justify-around items-center pt-25">

				<div className="flex flex-col justify-center items-center">

					<h2 className="text-7xl font-bold m-3">Hi There,</h2>
					<h2 className="text-7xl font-bold m-3">My Name is <span className="text-green-700">Ben</span></h2>

				</div>

				<TiltImage src={SquareMe} alt="Bitmoji style profile picture of Ben" />

			</div>
		</div>


	)

}

export default Hero;
