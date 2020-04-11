import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import InputArea from './InputArea';
import updatDB from "../lib/api/call-db-update";

function App(props) {

  const data = Object.values(props.notes);  // from db-get API

  const [noteItems, setNoteItems] = React.useState(data);
  const [noteContent, setNoteContent] = React.useState({ title: "", note: "" });

  function addNote(evt) {
    let newNote = {};
    newNote._id = Math.floor(Math.random() * (10 ** 10)); //key field used to delete and insert record in DB
    newNote.user_id = 55489;
    newNote.note_title = noteContent.title;
    newNote.note_content = noteContent.note;
    updatDB("I", newNote);  //call db-update API
    setNoteItems((preVal) => {
      const newVal = [...preVal, newNote];
      return newVal;
    });
    setNoteContent({ title: "", note: "" });
  }

  function delNote(id) {
    setNoteItems((preVal) => {
      return preVal.filter((val) => {
        return val._id !== id && val;
      });
    });
    updatDB("D", { _id: id }); //call db-update API
  };

  function onChange(evt) {
    const { name, value } = evt.target;
    setNoteContent((preVal) => {
      return { ...preVal, [name]: value };
    });
  };

  return (
    <div>
      <Header />
      <InputArea onAdd={addNote} noteContent={noteContent} onChange={onChange} />
      {noteItems.map(note => <Note id={note._id}
        title={note.note_title}
        content={note.note_content}
        key={note._id}
        delNote={delNote} />)}
      <Footer />
    </div>
  )
};

export default App;