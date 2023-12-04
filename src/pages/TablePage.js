import Table from '../components/Table'
function TablePage() {
	const data = [
		{ name: 'Orange', color: 'bg-orange-200 border borde r-orange-500', score: 25 },
		{ name: 'Apple', color: 'bg-red-200 border borde r-red-500', score: 10 },
		{ name: 'Blueberry', color: 'bg-blue-200 border borde r-blue-500', score: 50 },
		{ name: 'Cucumber', color: 'bg-green-200 border borde r-green-500', score: 5 },
		{ name: 'Banana', color: 'bg-yellow-200 border borde r-yellow-500', score: 10 },
	]
	const config = [
		{ label: 'Fruit', render: (fruit) => fruit.name },
		{ label: 'Colour', render: (fruit) => <div className={`p-3 m-2 ${fruit.color}`} /> },
		{ label: 'Score', render: (fruit) => fruit.score },
	]
	const keyFn = (fruit) => {
		return fruit.name
	}
	return (
		<div>
			<Table data={data} config={config} keyFn={keyFn} />
		</div>
	)
}
export default TablePage
