function SocialButton({ href, children }) {
	return (
		<a
			href={href}
			target="_blank"
			rel="noopener noreferrer"
			/* Clean structural styling: centers the icon inside a uniform 40px circle */
			className="flex items-center justify-center w-9 h-9 rounded-full bg-slate-300 text-slate-900"
		>
			{children}
		</a>
	)


}

export default SocialButton
