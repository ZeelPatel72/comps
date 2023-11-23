import ButtonPage from './pages/ButtonPage'
import AccordionPage from './pages/AccordionPage'
import { useState } from 'react'
import Dropdown from './components/Dropdown'

function App() {
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
				{/* <AccordionPage /> */}
			</div>
			<div>
				<Dropdown value={selection} onChange={handleSelect} options={options} />
				{/* <AccordionPage /> */}
			</div>
			{/* <ButtonPage /> */}
		</div>
	)
}
export default App
