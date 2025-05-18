import { useState } from "react";

function NoteInput({ onAddNote }) {
  const [inputText, setInputText] = useState('');

  const handleChange = (e) => {
    setInputText(e.target.value);
  };

  const handleAdd = () => {
    if (inputText.trim() === '') return;
    onAddNote(inputText);
    setInputText('');
  };

  return (
    <div className="note-input">
      <textarea className="w-2/3 text-zinc-900 bg-zinc-100 rounded-lg p-1"
        placeholder="add text here..."
        value={inputText}
        onChange={handleChange}
      />
      <button className="
      bg-cyan-700 hover:bg-cyan-600 text-white 
      shadow shadow-gray-950
      transition-all duration-150
      hover:-translate-y-0.5 hover:shadow-md
      ml-3 pl-3 pr-3 rounded-lg
      " onClick={handleAdd}>Add</button>
    </div>
  );
}

export default NoteInput;