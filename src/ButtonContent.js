import React from 'react'

const ButtonContent = (props) => {
  return (
    <>
      <a
        className="button-link"
        href={props.linkUrl1}
        rel="noopener noreferrer">
        {props.linkName1}
      </a>
      <a
        className="button-link"
        href={props.linkUrl2}
        rel="noopener noreferrer">
        {props.linkName2}
      </a>
      <a
        className="button-link"
        href={props.linkUrl3}
        rel="noopener noreferrer">
        {props.linkName3}
      </a>
    </>
  )
}
export default ButtonContent
