import React , {useState} from 'react'
 


export default function TextForm(props) {

  const handleUpClick = ()=>{
   //console.log("Uppercase was clicked" + text);
   let newText = text.toUpperCase();
   setText(newText);
  }

  const handleLoClick = ()=>{
    //console.log("Uppercase was clicked" + text);
    let newText = text.toLowerCase();
    setText(newText);
   }

  const handleOnChange = (event)=>{
    //console.log("On Change");
    setText(event.target.value);
   }

   const handleClearClick = ()=>{
    //console.log("Uppercase was clicked" + text);
    let newText = ('');
    setText(newText);
   }


  const [text, setText] = useState('');
  //Here **text** is the value which is being used for 'Enter text here'
  //This is an example of state and hook.
  // google react hooks for more information
 
  return (
    <>
    <div className = "container">
      <h1>{props.heading} </h1>
        <div className="mb-3">
        {/* <label for="myBox" class="form-label">Example textarea</label> */}
        <textarea className="form-control" value = {text} onChange = {handleOnChange} id="myBox" rows="6"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
        <button className="btn btn-primary mx-2" onClick={handleLoClick}>Convert to LowerCase</button>
        <button className="btn btn-primary mx-2" onClick={handleClearClick}>Clear Text</button>
        
    </div>
    <div className="container my-3">
      <h2>Your text summary</h2>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes required to read</p>
      <h2>Preview</h2>
      <p>{text}</p>
    </div>
    </>
  )
}
