import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Note from './Note';
import InputArea from './InputArea';

function App(){

  const [noteItems, setNoteItems] = React.useState([]);
  const [noteContent, setNoteContent] = React.useState({ title: "", note:""});

  function addNote(evt) {
    let newNote = {};
    newNote.key = noteItems.length + 1;
    newNote.title = noteContent.title;
    newNote.content = noteContent.note;
    setNoteItems((preVal)=>{
      return [ ...preVal, newNote];
    });
    setNoteContent({ title: "", note:""});
  }

  function delNote(id) {
    setNoteItems((preVal)=>{
      return preVal.filter((val)=>{
        return val.key !== id && val;
      });
    });
  }

  function onChange(evt){
    const { name, value } = evt.target;
    setNoteContent((preVal)=>{
      return { ...preVal, [name]: value };
    });
  };

  return (
    <div>
    <Header />
    <InputArea onAdd={addNote} noteContent={noteContent} onChange={onChange} />
    {noteItems.map(note => <Note id={note.key} title={note.title} content={note.content} key={note.key} delNote={delNote}/>)}
    <Footer />
    </div>
  )
};

export default App;
