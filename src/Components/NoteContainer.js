import React from 'react';
import Note from './Note';
import './NoteContainer.css';
import { Container } from 'react-bootstrap';
import { useEffect } from 'react';

function NoteContainer({ notes, setNotes, handleDelete, handleEditNote, handleGetNote, isLogin }) {
  useEffect(() => {
    handleGetNote();
  }, [handleGetNote]);

  return (
    <div>
      <Container>
        <h2>My Notes</h2>
        <div className="note-container-notes custom-scroll">
          {notes?.map((note) => {
            return <Note key={note.id} note={note} setNotes={setNotes} handleDelete={handleDelete} handleEditNote={handleEditNote} />;
          })}
        </div>
      </Container>
    </div>
  );
}

export default NoteContainer;

// <Redirect to='/login'></Redirect>
