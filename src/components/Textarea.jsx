import React, {useState} from 'react'

const Textarea = (props) => {
  const [text, setText] = useState("");
  const [isBold, setIsBold] = useState(false);
  const [isUnderline, setIsUnderline] = useState(false);
  const [isItalic, setIsItalic] = useState(false);
  
  const styleTextarea = {
    height:'10rem',
    fontWeight: isBold ? 'bold' : 'normal',
    textDecoration: isUnderline ? 'underline' : 'none',
    fontStyle: isItalic ? 'italic' : 'normal',
  };

  const textInside = (e)=>{
    setText(e.target.value);
  };


  //text editing functions
  const upperCaseFunc = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
  };
  const lowerCaseFunc = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
  };
  const clearTextFunc = ()=>{
    let newText = "";
    setText(newText);
    setIsBold(false);
    setIsItalic(false);
    setIsUnderline(false);
  };
  const boldTextFunc = ()=>{
    setIsBold(!isBold);
  };
  const underlineTextFunc = ()=>{
    setIsUnderline(!isUnderline);
  };
  const italicTextFunc = ()=>{
    setIsItalic(!isItalic);
  };
  const copyTextFunc = ()=>{
    navigator.clipboard.writeText(text);
    alert("text copied to clipboard");
  };
  // const removeExtraSpaceFunc = (e)=>{
  //   let newText = e.target.value.replace(/\s+/g, ' ');
  //   setText(newText);
  // };


  return (
    <>
      {/* //Code for Text Area and Heading */}
      <div className='container my-4'>
          <h1 className=''>Text-Editor - word counter, text editor, remove spaces etc</h1>
          <div className="form-floating my-4">
              <textarea className={`form-control bg-${props.mode === "dark"?"white":"dark"} text-${props.mode === "dark"?"black":"white"}`} value={text} placeholder="Leave a comment here" id="floatingTextarea2" onChange={textInside} style={styleTextarea}>{text}</textarea>
              <label htmlFor="floatingTextarea2">Write your text here</label>
          </div>


          {/* Code for buttons functions */}
          <button type="button" className={`btn btn-${props.mode} mx-1 my-1`} onClick={upperCaseFunc}>Convert To Uppercase</button>
          <button type="button" className={`btn btn-${props.mode} mx-1 my-1`} onClick={lowerCaseFunc}>Convert To Lowercase</button>
          <button type="button" className={`btn btn-${props.mode} mx-1 my-1`} onClick={boldTextFunc}><b>B</b></button>
          <button type="button" className={`btn btn-${props.mode} mx-1 my-1`} onClick={underlineTextFunc}><u>U</u></button>
          <button type="button" className={`btn btn-${props.mode} mx-1 my-1`} onClick={italicTextFunc}><i>I</i></button>
          <button type="button" className={`btn btn-${props.mode} mx-1 my-1`} onClick={clearTextFunc}>Clear Text</button>
          <button type="button" className={`btn btn-${props.mode} mx-1 my-1`} onClick={copyTextFunc}>Copy Text</button>
          {/* <button type="button" className="btn btn-success mx-1 my-1" onClick={removeExtraSpaceFunc}>Remove Extra Spaces</button> */}
      </div>

      {/* Code for summary and preview */}
      <div className='container'>
      <h4>Your Text Summary</h4>
      <p>{text.split(" ").length} words and {text.length} characters</p>
      <p>{0.008 * text.split(" ").length} Minutes read</p>
      <h4>Preview</h4>
      <p>{text}</p>
      </div>
    </>
  )
}

export default Textarea
