 import { useState } from "react";
 const KeyboardClipboard = () => {
   const [inputData, setInputData] = useState("");
   const handleChange = (e) => {
     e.target.value = e.target.value.toLocaleUpperCase();
     setInputData(e.target.value);
   };
   const handleKeydown = (e) => {
     console.log(e.keyCode);
     if (e.keyCode >= 48 && e.keyCode <= 57) {
       e.preventDefault();
       alert("Please dont enter a number");
     }
   };
   const handleAreaPaste = (e) => {
     e.target.style.fontSize = "30px";
     e.target.style.border = " 3px solid red";
     e.target.style.backgroundColor = "lightgrey";
     e.target.value += e.clipboardData.getData("text").toLocaleUpperCase();
     e.preventDefault();
   };
   const handleParCopy = (e) => {
     e.preventDefault();
     alert("you cannot copy this text");
   };
   const handleParCut = (e) => {
     e.preventDefault();
     alert("you cannot cut this text");
   };
   return (
     <div className="container text-center">
       <h2 className="display-5 text-danger">Keyboard-Clipboard Event</h2>
       <input
         type="text"
         className="form-control"
         onChange={handleChange}
         onKeyDown={handleKeydown}
       />
       <div className="text-start mt-4">
         <h6>Copied Input Data</h6>
         <p onCopy={handleParCopy}
          onCut={handleParCut}>
          {inputData.toLocaleLowerCase()}
         </p>
       </div>
       <textarea
         className="form-control"
         name="textarea"
         id="textarea"
         cols="30"
         rows="10"
         onPaste={handleAreaPaste}
       ></textarea>
     </div>
   );
 };
 export default KeyboardClipboard;







