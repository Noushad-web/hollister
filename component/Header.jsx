import { Container } from '@mui/material'
import Link from 'next/link'
import React from 'react'

const navItems = ['girls', 'guys']

const Header = () => {
  return (
    <header className='navbar'>
      <Container sx={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
        <h2 className='navbar__heading'><Link href={'/'}>Hollister</Link></h2>
        <ul className='navbar__item__wrapper'>
          <li className='navbar__item'>
            <Link href={`/`}>
              Home
            </Link>
          </li>
          {
            navItems.map((eachItem, index) => {
              return (
                <li className='navbar__item' key={index}>
                  <Link href={`/shop/${eachItem}`}>
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