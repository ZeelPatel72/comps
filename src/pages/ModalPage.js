import Button from '../components/Button'
import { useState } from 'react'
import Modal from '../components/Modal'
function ModalPage() {
	const [showModal, setShowModal] = useState(false)
	const handleClick = () => {
		setShowModal(true)
	}
	const handleClose = () => {
		setShowModal(false)
	}
	const actionBar = (
		<div>
			<Button onClick={handleClose} primary>
				I Accept
			</Button>
		</div>
	)
	const modal = (
		<Modal onClose={handleClose} actionBar={actionBar}>
			<p>Here is some important information that we'd like you to review!</p>
			<p>
				What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
				been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
				scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
				electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of
				Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
				PageMaker including versions.
			</p>
		</Modal>
	)
	return (
		<div className="relative">
			<Button primary outline onClick={handleClick}>
				Open Modal
			</Button>
			{showModal && modal}
		</div>
	)
}
export default ModalPage