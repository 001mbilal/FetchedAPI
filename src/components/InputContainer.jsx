import React from "react";
import {useState ,useRef} from 'react';
import "./InputContainer.css";
import "./Header.css";
import { FaBold } from "react-icons/fa";
import { FaItalic } from "react-icons/fa";
import { FaLink } from "react-icons/fa";
import { FaSort } from "react-icons/fa";
import { TbSubscript } from "react-icons/tb";
import { TbSuperscript } from "react-icons/tb";

const InputContainer = (props) => {
  const [text, setText] = useState({value: ""});
 const [editedText, setEditedText] = useState();


 
 const myRef = useRef();
const Ref2 = useRef();

  // const updateText = (e) => {

  //   var taxt = e.target.innerHTML
  //       let textArray = taxt.split(/\n/gm)
  //       console.log(textArray)
  //       setText( {value: e.target.value} )
  //   // setText(e.target.value);
  // };

  // const onClicked = () => {
  //   setEditedText(text);
  // };

  // const onBold = () => {
  //   let BoldText = text.toUpperCase();
  //   setEditedText(BoldText);
  // };

  const onItalics = () => {
    let ItalicsText = text.italics();
    setEditedText(ItalicsText);
  };

  const inputsHandler = (e) =>{
    var taxt = e.target.innerHTML
    console.log(taxt)
    let textArray = taxt.split(/\n/gm)
    console.log(textArray)
    setText( {value: e.target.value} )
    // console.log(myRef.current)

    //Ref2.current.innerHTML = '<p><b>BILAL</b></p>'

}

  return (
    <>
    <div className="editor-container">
    <div className="content">
      content
    </div>
    <div className="Border-Container">
    <div className="main-btn">
      <button className="button" onClick={() => {       
                    let textVal = myRef.current;
                    console.log(textVal)
                    let cursorStart = textVal.selectionStart;
                    console.log(cursorStart)
                    let cursorEnd = textVal.selectionEnd;
                    console.log(cursorEnd)
                    console.log("hello world",text)
                    let selectedText = text.value.substring(cursorStart,cursorEnd) 
                  console.log(selectedText)
                  // document.getElementById("#div").innerText = selectedText;
                  Ref2.current.innerHTML = `<span><b>${selectedText}</b></span>`
              //setText({value: `<span><b>${selectedText}</b></span>`})

                }}>
        <FaBold className="icons-style" />
      </button>
      
      <button onClick={onItalics} className="button">
        <FaItalic className="icons-style"/> 
      </button>


      <button onClick={onItalics} className="button">
        <FaLink className="icons-style"/> 
      </button>

      <button  onClick={inputsHandler} className="button">
        Normal
      </button>

      <button  onClick={inputsHandler} className="button">
        <FaSort className="icons-style"/>
      </button>

      <button  onClick={inputsHandler} className="button">
        Sans Serif
      </button>

      <button  onClick={inputsHandler} className="button">
        <FaSort className="icons-style"/>
      </button>

      <button  onClick={inputsHandler} className="button">
        <TbSubscript className="icons-style" size={20}/>
      </button>

      <button  onClick={inputsHandler} className="button">
        <TbSuperscript className="icons-style" size={20}/>
      </button>

      </div>
        <textarea 
          rows={10}
          cols={120}
          className="text-area"
          placeholder="Insert text here..."
             type="text"
             ref={myRef} 
             name="first_name" 
             onChange={inputsHandler} 
             value={text.value}/>
        
      </div>
      <div className="button-container">
        <button className="editor-btn" >Add Post</button>
      </div>

      <div ref={Ref2} >
          {text.value}
      </div>
      {/* <div className="editedText">{editedText}</div> */}
      </div>


    </>
  );
};
export default InputContainer;
