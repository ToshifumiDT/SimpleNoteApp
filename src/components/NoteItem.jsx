function NoteItem({ note, onDelete }) {
  return (
    <div className="bg-zinc-700  p-1 m-4 rounded-xl">
      <p className="text-slate-200 p-5">{note.text}</p>
      <button className="
      text-sm font-bold text-red-400 hover:text-zinc-600
      bg-zinc-600 hover:bg-red-400
      shadow shadow-zinc-900
      rounded-lg p-1 pl-2 pr-2 mb-1
      " onClick={() => onDelete(note.id)}>Delete</button>
    </div>
  );
}

export default NoteItem;