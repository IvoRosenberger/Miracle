import React, {useState} from 'react'
import ColorPicker from './ColorPicker'
import Text from './Text'


export default function Padre() {

    const [selectColor, setSelectColor] = useState('green')

    const changeColor = (e) => {
        setSelectColor(e)
    }


  return (
    <div>
        <ColorPicker changeColor={changeColor} />
        <Text color={selectColor}></Text>
        
    </div>
  )
}