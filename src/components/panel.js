import classNames from 'classnames'
import { twMerge } from 'tailwind-merge'

function panel({ children, className, ...rest }) {
	const finalclasses = twMerge(classNames('border rounded p-3 shadow bg-white w-full', className))
	return (
		<panel {...rest} className={finalclasses}>
			{children}
		</panel>
	)
}
export default panel
