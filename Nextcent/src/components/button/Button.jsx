import React from 'react'

import "./button.css"

export default function Button(props) {
  return (
    <div className="main">
        <button className="button">{props.name}</button>
    </div>
  )
}
