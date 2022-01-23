import React from "react";
import "./App.css";

import Note from "./types/Note";
import NoteList from "./components/NoteList/NoteList";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NoteList />
      </header>
    </div>
  );
}

export default App;
