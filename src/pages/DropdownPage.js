import { useState } from 'react'
import Dropdown from '../components/Dropdown'

function DropdownPage() {
	const [selection, setSelection] = useState(null)
	const handleSelect = (option) => {
		setSelection(option)
	}
	const options = [
		{ label: 'Red', value: 'Red' },
		{ label: 'Green', value: 'Green' },
		{ label: 'Blue', value: 'Blue' },
	]
	return (
		<div className="flex">
			<div>
				<Dropdown value={selection} onChange={handleSelect} options={options} />
			</div>
		</div>
	)
}
export default DropdownPage
