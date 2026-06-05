import { useEffect, useRef } from 'react';
import VanillaTilt from 'vanilla-tilt';

export default function TiltImage({ src, alt }) {
	const tiltRef = useRef(null);

	useEffect(() => {
		const tiltElement = tiltRef.current;

		if (tiltElement) {
			// Initialize the exact configuration from Jigar's portfolio script
			VanillaTilt.init(tiltElement, {
				max: 15,          // Maximum tilt rotation in degrees
				speed: 400,       // Speed of the enter/exit transition
				glare: false,      // Adds a premium reflective light effect (optional, looks great!)
			});
		}

		// Clean up the event listeners if the component unmounts
		return () => {
			if (tiltElement && tiltElement.vanillaTilt) {
				tiltElement.vanillaTilt.destroy();
			}
		};
	}, []);

	return (
		<div
			ref={tiltRef}
			className="inline-block rounded-full shadow-2xl overflow-hidden cursor-pointer bg-neutral-200"
			style={{ transformStyle: 'preserve-3d' }}
		>
			<img
				src={src}
				alt={alt}
				draggable="false"
				// Jigar uses a circular avatar layout on his hero page
				className="w-180 h-180 object-cover rounded-full pointer-events-none transition-transform duration-200"
				style={{ transform: 'translateZ(20px)' }} // Forces image to float slightly above its shadow
			/>
		</div>
	);
}
