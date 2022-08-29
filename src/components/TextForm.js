import React , {useState} from 'react'
 


export default function TextForm(props) {

  const handleUpClick = ()=>{
   //console.log("Uppercase was clicked" + text);
   let newText = text.toUpperCase();
   setText(newText);
  }

  const handleOnChange = (event)=>{
    //console.log("On Change");
    setText(event.target.value);
   }


  const [text, setText] = useState('Enter text here');
  //Here **text** is the value which is being used for 'Enter text here'
  //This is an example of state and hook.
  // google react hooks for more information
 
  return (
    <div>
      <h1>{props.heading} </h1>
        <div className="mb-3">
        {/* <label for="myBox" class="form-label">Example textarea</label> */}
        <textarea className="form-control" value = {text} onChange = {handleOnChange} id="myBox" rows="6"></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>Convert to UpperCase</button>
    </div>
  )
}
