import { textAlign } from '@mui/system'
import Image from 'next/image'
import React from 'react'
import ButtonCustom from './Button'

const Banner = ({ bgImg, heading, description, articleAlign, button }) => {
  return (
    <section className='banner__wrapper'>
      <figure className=''>
        <Image
          src={bgImg.src}
          width={bgImg.width}
          height={bgImg.height}
          alt='banner-image'
          layout='responsive'
        />

        <figcaption>
          <h1>{heading}</h1>
          <p>{description}</p>

          <div className="button__wrapper" style={{ marginTop: '2rem' }}>
            {
              button.map((eachButton, index) => {
                return <ButtonCustom
                  key={index}
                  color={'#1c2121'}
                  bgColor={'transparent'}
                  href={eachButton.url}
                  rounded
                  hoverColor='white'
                >
                  {eachButton.text}
                </ButtonCustom>
              })
            }
          </div>
        </figcaption>
      </figure>



      <style jsx> {`
        .banner__wrapper {
          position: relative;
        }
        figcaption {
          position: absolute;
          right: ${articleAlign === 'right' ? '5%' : 'unset'};
          left: ${articleAlign === 'left' ? '5%' : 'unset'};
          left: ${articleAlign === 'center' ? '50%' : 'unset'};
          top: 50%;
          transform:
          ${articleAlign === 'center'
          ?
          'translate(-50%, -50%);'
          : 'translate(0%, -50%);'};
          text-align: center;
        }
        figcaption {
          max-width: 60ch;
        }
        figcaption h1 {
          font-size: 2.5rem;
          font-weight: 700;
        }
        figcaption p {
          font-size: 1.2rem;
          padding: 0 1.5rem;
        }
        figcaption > * + * {
          margin-top: 1rem;
        }        
      `}
      </style>
    </section>
  )
}

export default Banner