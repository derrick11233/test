import React, {useState} from "react";


export default function TextForm(props) {

const handleUpClick = ()=>{
  // console.log("Uppercase was clicked" + text)
  let newText = text.toUpperCase();
  setText(newText)
  props.showAlert("converted to uppercase", "success");
}


const handleLoClick = ()=>{
  // console.log("Uppercase was clicked" + text)
  let newText = text.toLowerCase();
  setText(newText)
  props.showAlert("converted to lowercase", "success");

}

const handleClearClick = ()=>{
  // console.log("Uppercase was clicked" + text)
  let newText = '';
  setText(newText)
  props.showAlert("Text Cleared", "success");
}

const handleonChange = (event)=>{
  // console.log("On Change")
  setText(event.target.value);
}

// Credit A
const handleCopy =() => {
// console.log("I am copy");
var text = document.getElementById("myBox");
text.select();
navigator.clipboard.writeText(text.value)
// text.setSelectionRange(0, 9999);
props.showAlert("Copied to Calipboard!", "success");
}

// Credit B
const handleExtraSpaces = () => {
  let newText = text.split(/[ ]+/)
  setText(newText.join(" "))
  props.showAlert("Extra spaces removed", "success");
}

  const [text, setText] = useState('');
  //ext = "new text"; // wrong way to change the state
  //setText = ("new text"); // Correct way to change the state
  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading}</h1>
      <div className="mb-3">
        <textarea
          className="form-control" value={text}
          onChange={handleonChange} style={{backgroundColor: props.mode==='dark'?'grey':'white', color: props.mode==='dark'?'white':'black'}} id="myBox"
          rows="3"
        ></textarea>
      </div>
      <button className="btn btn-primary mx-1" onClick={handleUpClick}>Convert to Upercase</button>
      <button className="btn btn-primary mx-1" onClick={handleLoClick}>Convert to Lowercase</button>
      <button className="btn btn-primary mx-1" onClick={handleClearClick}>Clear Text</button>
      <button className="btn btn-primary mx-1" onClick={handleCopy}>CopyText</button>
      <button className="btn btn-primary mx-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
    </div>
    <div className="container my-3" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>Your text Summary</h1>
      <p>{text.split(" ").lenght} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").lenght} Minutes read</p>
      <h2>Preview</h2>
      {/* <p>{text}</p> */}
      <p>{text.length>0?text:"Enter Something in the textbox above to preview it here"}</p>
    </div>
    </>
  );
}
