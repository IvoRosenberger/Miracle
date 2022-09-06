import React from 'react'

export default function Links({openInNewTab}) {
    

  return (
    <a target={openInNewTab} href="https://reactjs.org/">
      React Docs
    </a>
  )
}