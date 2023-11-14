import { useState } from 'react'
import { GoChevronDown, GoChevronLeft } from 'react-icons/go'
function Accordion({ items }) {
	const [expandedIndex, setExpandedIndex] = useState(-1)
	const handleClick = (indexToExpand) => {
		if (expandedIndex === indexToExpand) {
			setExpandedIndex(-1)
		} else {
			setExpandedIndex(indexToExpand)
		}
	}
	const renderedItems = items.map((item, index) => {
		const isExpanded = index === expandedIndex

		const icon = <span className="text-2xl">{isExpanded ? <GoChevronDown /> : <GoChevronLeft />}</span>
		// const content = isExpanded && <div>{item.content}</div> //return first false value if there is or last truthy value if both are true
		// if (index == expandedIndex) {
		// 	console.log('Expanded')
		// } else {
		// 	console.log('collapsed')
		// }

		return (
			<div key={item.id}>
				<div
					className="flex p-3 bg-gray-200 border-b items-center cursor-pointer font-medium justify-between"
					onClick={() => handleClick(index)}
				>
					{item.label}
					{icon}
				</div>
				{isExpanded && <div className="border-b p-5 bg-gray-100">{item.content}</div>}
			</div>
		)
	})
	return <div className="border-x border-t rounded">{renderedItems}</div>
}

export default Accordion
