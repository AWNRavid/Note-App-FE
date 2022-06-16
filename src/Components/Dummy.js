import React from 'react';
import { useEffect } from 'react';

function Dummy({ handleGetNote, notes }) {

  useEffect(() => {
    handleGetNote()
  }, [handleGetNote])
  
  return (
    <div>
      {/* <h1>wkwkwkwk</h1> */}
      {/* <button onClick={handleGetNote}>click</button> */}
      {/* <form action=""></form> */}
      {notes?.map((note) => {
          return (
           <div key={note.id}>
            <h1>{note.title}</h1>
            <p>{note.content}</p>
           </div>
          )
        })}
    </div>
  );
}

export default Dummy;
