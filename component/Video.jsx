import React from 'react'
import Image from 'next/image';
import respectJeans from '../public/hco_2022_Respect_the_Jeans_Horizontal_Light.webp'
import Link from 'next/link';
import ButtonCustom from './Button';
const src = "https://img.hollisterco.com/is/content/anf/22_SPR_HCO_JeansBrand_10_HPDesk_WEBSITE_5Mbps_V2.mp4"

const Video = () => {

  return (
    <div className='video__wrapper'>
      <video
        width="100%"
        loop
        muted
        autoPlay
      >
        <source src={src} />
      </video>

      <figure className='video__figure'>
        <Image
          src={respectJeans.src}
          alt="respect the jeans"
          width={respectJeans.width}
          height={respectJeans.height}
          blurDataURL={respectJeans.blurDataURL}
        />

        <figcaption>
          These wide-leg trends weren’t born yesterday.
          Show them a little respect.

          <div className="video__btns">
            <ButtonCustom
              color={'white'}
              bgColor={'transparent'}
              href={'/shop/guys'}
            >
              Shop Guys
            </ButtonCustom>

            <ButtonCustom
              color={'white'}
              bgColor={'transparent'}
              href={'/shop/girls'}
            >
              Shop Girls
            </ButtonCustom>
          </div>
        </figcaption>
      </figure>
    </div>

  )
}

export default Video