import { useState, useEffect, useRef } from 'react'
import { GoChevronDown } from 'react-icons/go'
import Panel from './panel'
function Dropdown({ options, value, onChange }) {
	const [isOpen, setIsOpen] = useState(false)
	const divEl = useRef()
	useEffect(() => {
		const handler = (event) => {
			if (!divEl.current) {
				return
			}
			if (!divEl.current.contains(event.target)) {
				setIsOpen(false)
			}
		}
		document.addEventListener('click', handler, true)
		return () => {
			document.removeEventListener('click', handler)
		}
	}, [])
	//const [selected, setSelected] = useState()
	const handleClick = () => {
		setIsOpen(!isOpen) //Why !isOpen : cause we need the oposite of what the state already is (if open then Close if Close then open)
	}
	const handleOptionClick = (option) => {
		//show currently selected option:
		onChange(option)
		//Close drop down
		setIsOpen(false)
	}
	const renderedOptions = options.map((option) => {
		return (
			<div
				className="hover:bg-sky-100 rounded cursor-pointer p-1"
				onClick={() => handleOptionClick(option)}
				key={option.value}
			>
				{/*giving function to onClick and passing in option to get the option label back*/}
				{option.label}
			</div>
		)
	})
	// let content = 'Select...'
	// if (selection) {
	// 	content = selection.label
	// } instead of this we are using {selection?.label || 'Select...'} will return first truthy value
	return (
		<div ref={divEl} className="w-48 relative">
			<Panel className="flex justify-between items-center cursor-pointer" onClick={handleClick}>
				{value?.label || 'Select...'}
				<GoChevronDown />
			</Panel>
			{isOpen && <Panel className="absolute top-full">{renderedOptions}</Panel>}
		</div>
	)
}
export default Dropdown
