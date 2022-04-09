import React from 'react'

const Icon = (props) => {
  return (
    <img
      className={props.className}
      width={35}
      height={35}
      onClick={props.onClick}
      src={`/images/${props.filename}.png`}
    />
  )
}

export default Icon
