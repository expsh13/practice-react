import React from "react";

export function Input( onAdd:any ) {
  const [text, setText] = React.useState('');

  const handleChange = (e:any) => {
    console.log(e.target.value);
    setText(e.target.value);
  }

  const handleKeyDown = (e:any) => {
    if (e.key === 'Enter') {
      onAdd.onAdd(text);
      setText('');
    }
  };

  return(
    <div className="panel-block">
      <input
        className="input"
        type="text"
        placeholder="Enter to add"
        value={text}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
      />
    </div>
  )
}