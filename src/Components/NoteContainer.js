import React from 'react'
import Note from './Note'
import './NoteContainer.css'

function NoteContainer() {
    return (
        <div className='note-container'>
            <h2>My Notes</h2>
            <div className='note-container-notes custom-scroll'>
                <Note
                    note={{

                        text: "tesgdbfjd",
                        time: "2:45 AM",
                        color: "FFF89A"
                    }}
                />
                <Note
                    note={{

                        text: "tesgdbfjd",
                        time: "2:45 AM",
                        color: "FFF89A"
                    }}
                />
                <Note
                    note={{

                        text: "tesgdbfjd",
                        time: "2:45 AM",
                        color: "FFF89A"
                    }}
                />
                <Note
                    note={{

                        text: "tesgdbfjd",
                        time: "2:45 AM",
                        color: "FFF89A"
                    }}
                />
                <Note
                    note={{

                        text: "tesgdbfjd",
                        time: "2:45 AM",
                        color: "FFF89A"
                    }}
                />
            
              
            </div>
        </div>
    );
}

export default NoteContainer