import { Container } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const navItems = ['girls', 'guyz', 'jeans', 'sale', 'about-us']

const Header = () => {
  return (
    <header className='navbar'>
      <Container sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <h2 className='navbar__heading'>Hollister</h2>
        <ul className='navbar__item__wrapper'>
          {
            navItems.map((eachItem, index) => {
              return (
                <li className='navbar__item' key={index}>
                  <Link href={`/${eachItem}`}>
                    {eachItem}
                  </Link>
                </li>
              )
            })
          }
        </ul>
      </Container>
    </header>
  )
}

export default Header