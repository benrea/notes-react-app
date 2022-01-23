import NoteColour from './NoteColour'

type Note = {
    id: number;
    title?: string;
    content?: string;
    colour?: NoteColour;
}

export default Note;