import "./InputModal.css";

import * as React from "react";
import { useState } from "react";
import { Button, Header, Modal } from "semantic-ui-react";

export default function InputModal({ handler }) {
	const [title, setTitle] = useState("");
	const [description, setDescription] = useState("");
	const [show, setShow] = useState(false);

	const handleShow = () => setShow(true);
	const handleClose = () => setShow(false);

	return (
		<div className="inputModal">
			<Modal
				className="modal"
				onClose={handleClose}
				onOpen={handleShow}
				open={show}
				trigger={<Button className="plusButton" content="+" circular />}
			>
				<Header className="modal-header"> New Note </Header>
				<Modal.Content>
					<textarea
						className="title-input"
						placeholder="Title"
						maxLength={15}
						value={title}
						onChange={(event) => setTitle(event.target.value)}
					/>
					<textarea
						className="description-input"
						placeholder="Description"
						maxLength={90}
						value={description}
						onChange={(event) => setDescription(event.target.value)}
					/>
				</Modal.Content>
				<Modal.Actions>
					<Button
						className="modalButton"
						content="Save"
						onClick={() => {
							handler({ title, description });
							handleClose;
						}}
					/>
					<Button
						className="modalButton"
						content="Cancel"
						onClick={handleClose}
					/>
				</Modal.Actions>
			</Modal>
		</div>
	);
}
