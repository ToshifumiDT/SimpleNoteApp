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
      <textarea
        placeholder="adding text..."
        value={inputText}
        onChange={handleChange}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
}

export default NoteInput;