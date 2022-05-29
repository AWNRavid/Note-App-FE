import React, { useState } from 'react';
import './Note.css';
import { Button } from 'react-bootstrap';

function Note({ note, setNotes, handleDelete }) {
  const [noteContent, setNoteContent] = useState(note.content);

  return (
    <div className="note">
      <h3>{note.title}</h3>
      {/* <hr /> */}
      {/* <p className="note-text">{note.content}</p> */}
      <textarea
        className="note-content"
        name=""
        id=""
        cols="30"
        rows="10"
        value={noteContent}
        onChange={(e) => {
          return setNoteContent(e.target.value);
        }}
        
      >
        {note.content}
      </textarea>
      {/* <input className='input-text' type="text" /> */}
      <Button
        className="mt-2"
        onClick={() => {
          handleDelete(note.id);
        }}
      >
        delete
      </Button>
    </div>
  );
}

export default Note;

/* 
<div className='note' style={{backgroundColor:props.note.color}}>
        <textarea className='note-text' defaultValue={props.note.text}/>
        <p>{props.note.time}</p>
    </div>
*/
