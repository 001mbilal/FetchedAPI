import React from 'react';
import {useState ,useRef} from 'react';


function MyEditor() {

    const [state,setValue] = useState({value: ""});
    
    //1
    const myRef = useRef();
    
    const inputsHandler = (e) =>{
        var taxt = e.target.innerHTML
        let textArray = taxt.split(/\n/gm)
        console.log(textArray)
        setValue( {value: e.target.value} )
    }
    
    // const onDone = () => {
    //     console.log("on done", stateNew)
    //     dispatch(updateEditorVisibility())
    //     // dispatch(props.reducer(state.value))
    //     dispatch(stateNew.editorReducerAction(state.value))
    // }
    
    
    
    return (
        <div>
            <textarea 
             type="text"
             ref={myRef} 
             name="first_name" 
             onChange={inputsHandler} 
             value={state.value}/>
             <button onClick={() => {       
                    let textVal = myRef.current;
                    console.log(textVal)
                    let cursorStart = textVal.selectionStart;
                    console.log(cursorStart)
                    let cursorEnd = textVal.selectionEnd;
                    console.log(cursorEnd)
                    let selectedText = state.value.substring(cursorStart,cursorEnd) 
                    console.log(selectedText)
                }}>Log</button>
        </div>
    )}

    export default MyEditor;