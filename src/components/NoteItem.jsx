function NoteItem({ note, onDelete }) {
  return (
    <div className="note-item">
      <p>{note.text}</p>
      <button onClick={() => onDelete(note.id)}>Delete</button>
    </div>
  );
}

export default NoteItem;
