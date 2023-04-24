import { useState } from "react";

function SearchBar({ onSubmit }) {
    const [value,setValue] = useState('')

    const handleTyping = (e)=>{
        setValue(e.target.value)
        console.log(value)
    }
    const handleClick = () =>{
        onSubmit(value); 
    }

  return (
    <div style={{display: 'flex'}}>
      <input type="text" className="input is-primary is-normal" value={value} onChange={handleTyping} placeholder="the photo you are looking" />
      <button  className="button is-dark" onClick={handleClick}>Search</button>
    </div>
  );
}

export default SearchBar;
