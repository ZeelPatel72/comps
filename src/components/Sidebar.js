import Link from './Link'

function Sidebar() {
	const links = [
		{ label: 'Dropdown', path: '/' },
		{ label: 'Accordion', path: '/accordion' },
		{ label: 'Buttons', path: '/buttons' },
		{ label: 'Modal', path: '/modal' },
		{ label: 'Table', path: '/tables' },
	]
	const renderedLinks = links.map((link) => {
		return (
			<Link
				className="mb-3 ml-3 pl-3"
				activeClassName="font-bold border-l-4 border-blue-500"
				key={link.label}
				to={link.path}
			>
				{link.label}
			</Link>
		)
	})
	return <div className="sticky top-0 flex flex-col items-start">{renderedLinks}</div>
}
export default Sidebar
