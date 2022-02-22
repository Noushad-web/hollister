import { bgcolor } from '@mui/system';
import Link from 'next/link';
import React from 'react'

const ButtonCustom = ({ color = black, bgColor = white, href, children }) => {

  return (
    <Link href={href}>
      <a className='btn'>
        {children}
        <style jsx>
          {`
            .btn {
              padding: 10px 30px;
              text-transform: capitalize;
              background-color: ${bgColor};
              border: 1px solid ${color};
              border-radius: 30px;
              color: ${color};
              text-decoration: none;
            }
            .btn:hover {
              background-color: ${color};
              color: ${bgcolor};
            }
          `}
        </style>
      </a>
    </Link>
  )
}
export default ButtonCustom;