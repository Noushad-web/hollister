import React from 'react'

const navItems = ['girls', 'guyz', 'jeans', 'sale', 'about-us']

const Header = () => {
  return (
    <header className='navbar'>
      <h3 className='navbar__heading'>Hollister</h3>
      <ul className='navbar__item__wrapper'>
        {
          navItems.map((eachItem, index) => {
            return (
              <li className='navbar__item' key={index}>{eachItem}</li>
            )
          })
        }
      </ul>      
    </header>
  )
}

export default Header