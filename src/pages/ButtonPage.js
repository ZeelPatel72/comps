import Button from '../components/Button'
import { GoAlert } from 'react-icons/go'
function ButtonPage() {
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
				<Button secondary>Secondary</Button>
			</div>
			<div>
				<Button success>Success</Button>
			</div>
			<div>
				<Button warning>
					<GoAlert />
					warning
				</Button>
			</div>
			<div>
				<Button danger>! Danger</Button>
			</div>
		</div>
	)
}
export default ButtonPage
