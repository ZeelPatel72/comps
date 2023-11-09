import className from 'classnames'
import { twMerge } from 'tailwind-merge'
function Button({ children, primary, secondary, success, warning, danger, rounded, outline, ...rest }) {
	const classes = twMerge(
		className(rest.className, 'flex items-center px-3 py-1.5 border text-base m-2 hover:border-gray-900', {
			'bg-blue-500 border-blue-600 text-white hover:border-blue-900': primary,
			'bg-gray-700 border-gray-700 text-white hover:border-gray-900': secondary,
			'bg-green-500 border-green-600 text-white hover:border-green-900': success,
			'bg-yellow-500 border-yellow-600 hover:border-yellow-900': warning,
			'bg-red-500 border-red-600 hover:border-red-900': danger,
			'rounded-full': rounded,
			'bg-white': outline,
			'text-blue-500': outline && primary,
			'text-gray-900': outline && secondary,
			'text-green-500': outline && success,
			'text-yellow-500': outline && warning,
			'text-red-500': outline && danger,
		}),
	)
	return (
		<button {...rest} className={classes}>
			{children}
		</button>
	)
}

Button.propTypes = {
	checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
		const count = Number(!!primary) + Number(!!secondary) + Number(!!success) + Number(!!warning) + Number(!!danger)

		if (count > 1) {
			return new Error('Only one of Variation can be used: primary, secondary, success, warning or danger')
		}
	},
}
export default Button
