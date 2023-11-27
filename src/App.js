import ButtonPage from './pages/ButtonPage'
import AccordionPage from './pages/AccordionPage'
import Route from './components/Route'
import DropdownPage from './pages/DropdownPage'
import Sidebar from './components/Sidebar'
import Link from './components/Link'
import ModalPage from './pages/ModalPage'
import TablePage from './pages/TablePage'

function App() {
	return (
		<div className="flex flex-row gap-x-8 mt-4">
			<div className="">
				<Sidebar />
			</div>
			<div className="grow pr-4">
				<Route path="/accordion">
					<AccordionPage />
				</Route>
				<Route path="/">
					<DropdownPage />
				</Route>
				<Route path="/buttons">
					<ButtonPage />
				</Route>
				<Route path="/modal">
					<ModalPage />
				</Route>
				<Route path="/tables">
					<TablePage />
				</Route>
			</div>
		</div>
	)
}
export default App
