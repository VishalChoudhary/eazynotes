import { useState } from "react";
import { nanoid } from 'nanoid';
import NotesList from "./components/NotesLists";

const App = () =>{
  const [notes,setNotes] = useState([
    {
    id: nanoid(),
    text: "First Note",
    date: "15/01/2024"
    },
    {
      id: nanoid(),
      text: "Second Note",
      date: "15/01/2024"
    },
    {
      id: nanoid(),
      text: "Third Note",
      date: "15/01/2024"
    },
    {
      id: nanoid(),
      text: "Fourth Note",
      date: "15/01/2024"
    }
  ]);
  return (
    <div className="container">
      <NotesList notes={notes}/>
    </div>
  );
};

export default App;
