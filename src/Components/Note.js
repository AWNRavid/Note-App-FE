import React, { useState } from 'react';
import './Note.css';
import { Button, Modal, Form } from 'react-bootstrap';

function Note({ note, setNotes, handleDelete, handleEditNote }) {
  // console.log(note);
  const [noteTitle, setNoteTitle] = useState(note.title);
  const [noteContent, setNoteContent] = useState(note.content);
  const [show, setShow] = useState(false);
  

  const handleClose = () => {
    setShow(false);
    setNoteContent(note.title);
    setNoteTitle(note.content);
  };
  const handleShow = () => setShow(true);

  const handleNote = (e) => {
    setNoteContent(e.target.value);
  };

  const handleTitle = (e) => {
    setNoteTitle(e.target.value);
  };

  const edit = (e) => {
    e.preventDefault();
    // console.log('edited');
    const newNote = {
      id: note.id,
      title: noteTitle,
      content: noteContent,
    };
    // console.log(newNote);
    handleEditNote(newNote);
    handleClose();
  };

  return (
    <div className="note">
      {/* display notes */}
      <h3>{note.title}</h3>
      {/* <h3>{noteTitle}</h3> */}
      <textarea
        className="note-text"
        cols="30"
        rows="10"
        // value={noteContent}
        value={note.content}
        onChange={handleNote}
        readOnly
      >
        {/* {noteContent} */}
        {note.content}
      </textarea>
      <div className="d-flex justify-content-between">
        <Button
          className="mt-2"
          onClick={() => {
            handleDelete(note.id);
          }}
        >
          delete
        </Button>
        <Button className="mt-2 edit-button" onClick={handleShow}>
          edit
        </Button>
      </div>

      {/* modal for editing notes */}
      <Modal onSubmit={edit} show={show} onHide={handleClose} backdrop="static" keyboard={false}>
        <Form>
          <Form.Group className="mb-3 p-3">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" value={noteTitle} onChange={handleTitle} />
          </Form.Group>

          <Form.Group className="mb-3 p-3">
            <Form.Label>Content</Form.Label>
            <Form.Control as="textarea" style={{ height: '300px' }} value={noteContent} onChange={handleNote} />
          </Form.Group>

          <Button variant="primary" onClick={handleClose}>
            Discard
          </Button>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </Modal>
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
