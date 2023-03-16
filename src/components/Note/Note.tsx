import "./Note.css";

import * as React from "react";
import { NoteModel } from "../../domain/NoteModel";

export type NoteProps = {
	note: NoteModel;
	onDelete: (id: string) => void;
};

export default function Note({ note, onDelete }: NoteProps) {
	return (
		<div className="note">
			<div className="note-title"> {note.title} </div>
			<div className="note-description"> {note.description} </div>
			<img
				className="note-delete"
				src="/trash.svg"
				onClick={() => onDelete(note.id)}
			/>
		</div>
	);
}
