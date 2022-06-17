import React, { useState } from 'react';
import { Accordion, Form, Button } from 'react-bootstrap';

function AddNote({ notes, handleAddNewNote }) {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleTitle = (e) => {
    setTitle(e.target.value);
  };

  const handleContent = (e) => {
    setContent(e.target.value);
  };

  const add = (e) => {
    e.preventDefault();
    // const id = notes[notes.length - 1].id + 1;
    const newNote = {
      // id: id,
      title: title,
      content: content,
    };
    handleAddNewNote(newNote);
    setTitle('');
    setContent('');
  };

  return (
    <Accordion className={'d-flex justify-content-center'}>
      <Accordion.Item eventKey="0" style={{ width: '450px' }}>
        <Accordion.Header style={{ padding: '0' }}>Add New Note</Accordion.Header>
        <Accordion.Body>
          <Form onSubmit={add}>
            <Form.Group className="mb-3 p-3">
              <Form.Label>Title</Form.Label>
              <Form.Control type="text" value={title} onChange={handleTitle} />
            </Form.Group>

            <Form.Group className="mb-3 p-3">
              <Form.Label>Content</Form.Label>
              <Form.Control as="textarea" style={{ height: '300px' }} value={content} onChange={handleContent} />
            </Form.Group>
            

            <div className="d-flex justify-content-between px-5 pb-3">
              <Button variant="primary">Discard</Button>
              <Button variant="primary" type="submit">
                Submit
              </Button>
            </div>
          </Form>
        </Accordion.Body>
      </Accordion.Item>
    </Accordion>
  );
}

export default AddNote;
