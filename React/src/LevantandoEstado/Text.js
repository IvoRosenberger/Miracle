import React from 'react'

export default function text({color}) {
  return (
    <div>
        <p style={{color: `${color}`}}>El texto cambia de color</p>
    </div>
  )
}