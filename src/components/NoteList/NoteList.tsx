import React from "react";
import "./NoteList.css";

import Note from "../../types/Note";
import NoteCard from "../NoteCard/NoteCard";

let NOTE_ID = 1;

const NoteList: React.FC = () => {
  const [notes, setNotes] = React.useState<Note[]>([]);

  const addNote = () => {
    setNotes([
      ...notes,
      {
        id: NOTE_ID,
        title: "New note",
        content: `New note ${NOTE_ID}`,
      },
    ]);
    NOTE_ID++;
  };

  const updateNote = (note: Note) => {
    const noteIndex = notes.findIndex((x) => x.id === note.id);
    const newNotes = [...notes];
    newNotes[noteIndex] = note;
    setNotes(newNotes);
  };

  const deleteNote = (noteId: number) => {
    setNotes(notes.filter((note) => note.id !== noteId));
  };

  return (
    <>
      <div>
        <button onClick={addNote}>Add Note</button>
      </div>
      <div className="note-list__container">
        {notes.map((note) => {
          return (
            <NoteCard
              key={note.id}
              note={note}
              updateNote={updateNote}
              deleteNote={() => deleteNote(note.id)}
            />
          );
        })}
      </div>
    </>
  );
};

export default NoteList;
