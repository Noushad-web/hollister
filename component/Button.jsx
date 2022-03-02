import { bgcolor } from '@mui/system';
import Link from 'next/link';
import React from 'react'

const ButtonCustom = (
  { 
    color = 'black',
    bgColor = 'white',
    hoverColor = '#1c2121',
    href, 
    children,
    rounded,
    fontSize,
    style,
   }) => {

  return (
    <Link href={href}>
      <a className='btn' style={style}>
        {children}
        <style jsx>
          {`
            .btn {
              display: inline-block;
              padding: 10px 30px;
              text-transform: capitalize;
              background-color: ${bgColor};
              border: 1px solid ${color};
              border-radius: ${rounded ? '30px': '0'};
              color: ${color};
              text-decoration: none;
              transition: background-color .5s ease;
              font-size: ${fontSize};
            }
            .btn:hover {
              background-color: ${color};
              color: ${hoverColor};
            }
          `}
        </style>
      </a>
    </Link>
  )
}
export default ButtonCustom;