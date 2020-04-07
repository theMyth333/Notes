import React from 'react';

function InputArea(props) {
    return (
        <div className="input-area">
            <input 
            className="i1" 
            name="title"
            type="text" 
            placeholder="Title" 
            value={props.noteContent.title} 
            onChange={(evt)=>{props.onChange(evt);}} />

            <input 
            className="i2"
            name="note" 
            type="text" 
            placeholder="Type your note" 
            value={props.noteContent.note}  
            onChange={(evt)=>{props.onChange(evt);}}/>

            <button onClick={() => { props.onAdd(); } }>+</button>
        </div>
    );
}

export default InputArea;