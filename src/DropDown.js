import React from 'react'
import Button from 'Button'
import ButtonContent from './ButtonContent'

// props is defined but never used. What should be props in this case?
const DropDown = () => {
  return (
    <>
      <div className="dropdown">
        <Button buttonName="Learn to Code!" />
        <div className="button-content">
          <ButtonContent
            linkName1="CSS Dropdown"
            linkUrl1="https://www.w3schools.com/howto/howto_css_dropdown.asp"
            linkName2="Create a searchbar"
            linkUrl2="https://www.w3schools.com/howto/howto_css_searchbar.asp"
            linkName3="Create a hero image"
            linkUrl3="https://www.w3schools.com/howto/howto_css_hero_image.asp" />
        </div>
      </div>
      <div className="dropdown">
        <Button buttonName="Watch cute kittens!" />
        <div className="button-content">
          <ButtonContent
            linkName1="Why are kittens so cute?"
            linkUrl1="https://www.theguardian.com/commentisfree/2018/apr/11/cats-why-are-kittens-so-cute"
            linkName2="Very cute kittens"
            linkUrl2="https://iheartcats.com/ridiculously-cute-kittens-have-a-serious-message-to-share/"
            linkName3="Cats in hats"
            linkUrl3="https://www.pinterest.se/donjcat/cats-in-hats/" />
        </div>
      </div>
    </>
  )
}
export default DropDown