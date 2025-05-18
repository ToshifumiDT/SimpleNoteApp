import NoteItem from './NoteItem';

function NoteList({ notes, onDeleteNote }) {
  if (notes.length === 0) {
    return <p className="no-notes">No notes available</p>;
  }

  return (
    <div className="note-list">
      {notes.map(note => (
        <NoteItem key={note.id} note={note} onDelete={onDeleteNote} />
      ))}
    </div>
  );
}

export default NoteList;