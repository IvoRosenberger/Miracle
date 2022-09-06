import React, { useState }  from 'react'
import { useRef } from "react";

export default function Refs() {
    const [text, setText] = useState("")

    var textOne = useRef("");
    var textTwo = useRef("");

    function handleClick() {
        setText(console.log(
          `Nombre: ${textOne.current.value}
           Apellido: ${textTwo.current.value}`)
        );
        
      }

  return (
    <div>
        <form>
        <label>Nombre: </label>
        <input ref={textOne}></input>
        <label>Appelido: </label>
        <input ref={textTwo}></input>
        <button onClick={handleClick}>Enviar</button>
        </form>
    </div>
  )
}