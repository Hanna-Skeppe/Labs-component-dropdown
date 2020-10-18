import React from 'react'
import ButtonContent from './ButtonContent'

const Button = () => {
  return (
    <>
      <div className="dropdown">
        <button type="button" className="dropbtn">Dropdown</button>
        <>
          <ButtonContent />
        </>
      </div>
    </>
  )
}
export default Button