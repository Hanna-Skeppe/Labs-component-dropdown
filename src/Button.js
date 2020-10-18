import React from 'react'

const Button = (props) => {
  return (
    <>
      <button
        type="button"
        className="dropbtn">
        {props.buttonName}
      </button>
    </>
  )
}
export default Button