import Button from './components/Button'
import { GoAlert } from 'react-icons/go'

function App() {
	return (
		<div>
			<div>
				<Button>Plain</Button>
			</div>
			<div>
				<Button primary outline rounded>
					Primary
				</Button>
			</div>
			<div>
				<Button outline secondary rounded>
					Secondary
				</Button>
			</div>
			<div>
				<Button success outline rounded>
					Success
				</Button>
			</div>
			<div>
				<Button warning outline rounded>
					<GoAlert />
					warning
				</Button>
			</div>
			<div>
				<Button danger outline rounded>
					! Danger
				</Button>
			</div>
		</div>
	)
}
export default App
