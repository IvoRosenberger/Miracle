import React from 'react'

export default function ColorPicker({changeColor}) {

    const colors = ["red", "blue", "green"]

  return (
    <div>
        <button onClick={() => changeColor(colors[0])}>Red</button>
        <button onClick={() => changeColor(colors[1])}>Blue</button>
        <button onClick={() => changeColor(colors[2])}>Green</button>
    </div>
  )
}