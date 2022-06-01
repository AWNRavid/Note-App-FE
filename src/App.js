import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavbarComp from './Components/NavbarComp';
import NoteContainer from './Components/NoteContainer';
import { useState } from 'react';
import { Button, Container } from 'react-bootstrap';
import AddNote from './Components/AddNote';

function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: 'what',
      content: 'the',
    },
    {
      id: 2,
      title: 'learn react for dummies',
      content: "i don't understand react",
    },
    {
      id: 3,
      title: 'please',
      content: 'help',
    },
    {
      id: 4,
      title: 'Lorem, ipsum.',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam laboriosam rerum dignissimos officiis et earum nesciunt excepturi sunt odio tempore. Laborum, alias harum libero totam nobis ea omnis illo ab quae aperiam culpa amet beatae. Quasi neque voluptate natus magni aliquam, sequi incidunt explicabo quisquam ducimus quo, ex, quam blanditiis?',
    },
    {
      id: 5,
      title: '',
      content: '',
    },
  ]);

  const handleAddNewNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  const handleEditNote = (newNote) => {
    console.log(newNote);
    console.log(notes);
    // notes.map((note) => {
    //   // note.id === newNote.id ? {note.content:newNote.content,} : note
    // })

    for (let i = 0; i < notes.length; i++) {
      if (notes[i].id === newNote.id) {
        // console.log('found');
        notes[i].title = newNote.title;
        notes[i].content = newNote.content;
      }
    }
  };

  const handleDelete = (id) => {
    const noteList = notes.filter((note) => {
      return note.id !== id;
    });
    setNotes(noteList);
  };

  return (
    <div>
      <NavbarComp />
      {/* <Container className="mt-5">
        <Button onClick={handleAddNewNote}>Add New Note</Button>
      </Container> */}
      <Container className="mt-5">
        <AddNote notes={notes} handleAddNewNote={handleAddNewNote} />
      </Container>
      <NoteContainer notes={notes} setNotes={setNotes} handleDelete={handleDelete} handleEditNote={handleEditNote} />
      {/* <textarea name="" id="" cols="30" rows="10">test</textarea> */}
    </div>
  );
}

export default App;
