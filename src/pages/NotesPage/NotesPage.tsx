import "./NotesPage.css";

import * as React from "react";
import { useState } from "react";
import Note from "../../Components/Note/Note";
import { ScreenLoader } from "../../components/ScreenLoader/ScreenLoader";
import { NoteModel } from "../../domain/NoteModel";
import { v4 as uuid } from "uuid";
import InputModal from "../../components/InputModal/InputModal";

export default function NotesPage() {
	const handleDelete = (id: string) => {
		const filteredNotes = notesList.filter((note) => note.id != id);
		setNotesList(filteredNotes);
	};

	const handleInsert = (note: NoteModel) => {
		const newNote = {
			id: uuid(),
			title: note.title,
			description: note.description,
		};

		setNotesList((prev) => [...prev, newNote]);
	};

	const default_notes: NoteModel[] = [
		{
			id: uuid(),
			title: "New Note",
			description: "This is an example of a note.",
		},
	];

	const [notesList, setNotesList] = useState<Array<NoteModel>>(default_notes);

	return (
		<div className="notes-page">
			<InputModal handler={handleInsert} />

			<div className="grid">
				{notesList == null ? (
					<ScreenLoader />
				) : (
					notesList.map((note) => (
						<Note note={note} onDelete={handleDelete} />
					))
				)}
			</div>
		</div>
	);
}
