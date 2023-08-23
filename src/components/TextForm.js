import React, {useState} from 'react'

export default function TestForm(props) {
    const handleUpClick = ()=>{
        // console.log("Uppercase was clicked");
        let newText = text.toUpperCase();
        setText(newText)
        props.showAlert("Converted to Uppercase" , "success");
    }

    const handleOnChange = (event)=>{
        setText(event.target.value);
    }

    const handlelowerClick = () =>{
        let newText = text.toLowerCase();
        setText(newText)
        props.showAlert("Converted to Lowercase" , "success");
    }

    const handleClearClick = () =>{
        let newText = '';
        setText(newText)
        props.showAlert("Cleared text" , "success");
    }

    const handleReClick = () =>{
        let newText = text.split('').reverse().join('');
        setText(newText)
        props.showAlert("Converted to Reverse text" , "success");
    }

    const handleCopy =() => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text has been copied" , "success");
    }

    const handleSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra Spaces removed" , "success");
    }

    const [text, setText] = useState(' ');
    // text = "new text";//wrong way to change the state
    // setText("new text");//correct way
    
  return (
    <> 
    <div className='container'  style={{color:props.mode==='dark'?'white':'#461036'}}>
        <h1>{props.heading} </h1>
        <div className="mb-3">
        <textarea className="form-control" id="myBox" value={text} onChange={handleOnChange}  style={{backgroundColor:props.mode==='dark'?'grey':'white',color:props.mode==='dark'?'white':'#461036'}} rows="7"></textarea>
        </div>
        <button className="btn btn-warning mx-2" onClick={handleUpClick}>Convert to Uppercase</button>
        <button className="btn btn-warning mx-1" onClick={handlelowerClick}>Convert to lowercase</button>
        <button className="btn btn-warning mx-1" onClick={handleClearClick}>Clear Text</button>
       <button className="btn btn-warning mx-1" onClick={handleReClick}>Reverse Text</button>
       <button className="btn btn-warning mx-1" onClick={handleCopy}>CopyText</button>
       <button className="btn btn-warning mx-1" onClick={handleSpaces}>Remove Extra Spaces</button>
       </div> 
    <div className="container my-2"  style={{color:props.mode==='dark'?'white':'#461036'}} >
        <h2>Your text summary</h2>
        <p>{text.split(" ").length}words and {text.length}characters</p>
        <p>{0.008 * text.split(" ").length}Minutes read</p>
        <h2>Preview</h2>
        <p>{text.length>0?text:"Enter something above to preview here"}</p>
    </div>
    </>
    
  )
}
