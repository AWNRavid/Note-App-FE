import React from 'react';
import Note from './Note';
import './NoteContainer.css';
import { Container } from 'react-bootstrap';

function NoteContainer({ notes, setNotes, handleDelete }) {
  return (
    <Container>
      <h2>My Notes</h2>
      <div className="note-container-notes custom-scroll">
        {notes?.map((note) => {
          return <Note key={note.id} note={note} setNotes={setNotes} handleDelete={handleDelete}/>;
        })}
      </div>
    </Container>
  );
}

export default NoteContainer;

/* 
<Note
          note={{
            text: 'tesgdbfjd',
            time: '2:45 AM',
            color: 'FFF89A',
          }}
        />
        <Note
          note={{
            text: 'tesgdbfjd',
            time: '2:45 AM',
            color: 'FFF89A',
          }}
        />
        <Note
          note={{
            text: 'tesgdbfjd',
            time: '2:45 AM',
            color: 'FFF89A',
          }}
        />
        <Note
          note={{
            text: 'tesgdbfjd',
            time: '2:45 AM',
            color: 'FFF89A',
          }}
        />
        <Note
          note={{
            text: 'tesgdbfjd',
            time: '2:45 AM',
            color: 'FFF89A',
          }}
        />
*/
