import { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

function Skill({ name, src, alt }) {
	const skillRef = useRef(null);

	useEffect(() => {
		const tiltElement = skillRef.current;

		if (tiltElement) {
			VanillaTilt.init(tiltElement, {
				max: 10,           // Kept it tight so small items don't distort too much
				speed: 500,        // Fast transition for a snappy feel
				glare: false,      // Definitely keep glare off on tiny text boxes
				scale: 1.03,       // Optional: makes the skill tag slightly "pop" forward on hover
			});
		}

		return () => {
			if (tiltElement && tiltElement.vanillaTilt) {
				tiltElement.vanillaTilt.destroy();
			}
		};
	}, []);

	return (
		<div
			ref={skillRef}
			/* Added h-auto so arbitrary padding can dictate height safely, and cursor-pointer */
			className="flex justify-around items-center h-auto w-auto border p-3 lg:p-4 gap-4 border-slate-950 rounded-lg cursor-pointer bg-slate-100 shadow-[2px_2px_0px_0px_rgba(15,23,42,1)]"
			style={{ transformStyle: 'preserve-3d' }}
		>
			<img
				src={src}
				alt={alt}
				draggable="false"
				className="w-5 h-5 lg:w-7 lg:h-7 pointer-events-none"
				style={{ transform: 'translateZ(10px)' }} // Gives the icon a tiny bit of 3D separation from the text
			/>

			<h4
				className="text-slate-900 font-mono text-sm lg:text-xl font-medium selection:bg-transparent"
				style={{ transform: 'translateZ(10px)' }}
			>
				{name}
			</h4>
		</div>
	);
}

export default Skill;
//
// function Skill({ name, src, alt }) {
// 	return (
//
// 		<div className="flex justify-around items-center h-13 w-auto border p-5 lg:p-8 gap-4 border-slate-950 rounded-lg">
//
// 			<img
// 				src={src}
// 				alt={alt}
// 				className="w-5 h-5 lg:w-7 lg:h-7"
//
// 			/>
//
// 			<h4 className="text-slate-900 font-mono lg:text-2xl">{name}</h4>
//
// 		</div>
//
// 	)
// }
//
// export default Skill;
