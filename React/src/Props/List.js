import React from 'react'
import ListItem from './ListItem'

export default function List() {
  return (
    <ul>
       <ListItem props={'Observar el HTML'}/>
        <ListItem props={'Pensar en cómo puedo extraer cada trozo en componentes'}/>
        <ListItem props={'Usarlos, o mejor dicho, reusarlos en React'}/>
    </ul>
  )
}