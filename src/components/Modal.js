import React from "react";
function Modal(props) {
  const { show, closeModal } = props;

  return (
    <>
      <div className={show ? "modal" : "hide"}>
        <button onClick={closeModal}>X</button>
        <h1>Insert Movie Infos</h1>
       <p> Name:<input></input></p>
       <p> Rating:<input></input></p>
      <p> Description:<input></input></p>
       <p> Image:<input></input></p>
       <p>Video:<input></input></p> 
      </div>
    </>
  );
}

export default Modal;