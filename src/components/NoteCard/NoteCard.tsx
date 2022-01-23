import React from 'react';

import Note from '../../types/Note';
import NoteColour from '../../types/NoteColour';
import './NoteCard.css';

interface NoteCardProps {
    note: Note;
    updateNote?: (note: Note) => void;
    deleteNote?: () => void;
}

const NoteCard: React.FC<NoteCardProps> = (props) => {
    const {note} = props;

    const onChangeContent: React.ChangeEventHandler<HTMLTextAreaElement> = (target) => {
        props.updateNote?.({
            ...note,
            title: target.currentTarget.value
        });
    }

    const onColour = () => {
        props.updateNote?.({
            ...note,
            colour: NoteColour.blue // TODO
        });
    }

    const onDelete = () => {
        props.deleteNote?.();
    }

    return (
        <div className={`card-container card-colour--${note.colour}`}>
            <button onClick={onColour}>Colour</button>
            <button onClick={onDelete}>Delete</button>
            <textarea onChange={onChangeContent}>{note.content}</textarea>
        </div>
    )
}

export default NoteCard;