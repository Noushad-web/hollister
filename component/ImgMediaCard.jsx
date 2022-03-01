import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import img from '../public/girls/curvy/curvy-high-rise-brown-jeans.webp'
import ButtonCustom from './Button';

export default function ImgMediaCard({ product, linkBaseUrl }) {

  // console.log('====================================');
  // console.log(product);
  // console.log('====================================');

  const {
    brand,
    category,
    description,
    id,
    image,
    name,
    price,
    rating,
    slug,
    stock
  } = product;

  return (
    <>
      {product && (
        <div className="card" id={id}>
          <div className="card__header"></div>
          <figure className="card__figure">
            <Link href={`${linkBaseUrl}/${slug}`}>
              <a>
                <Image
                  src={image}
                  alt={product.name}
                  height='500'
                  width='400'
                  objectFit='cover'
                />
              </a>
            </Link>

            <figcaption>
                <ButtonCustom
                  color={'#fff'}
                  bgColor={'transparent'}
                  href={`${linkBaseUrl}/${slug}`}
                  hoverColor='black'
                  rounded
                  fontSize="15px"
                >
                  View More
                </ButtonCustom>

              <ButtonCustom
                color={'white'}
                bgColor={'transparent'}
                href={`${linkBaseUrl}/${slug}`}
                hoverColor='black'
                rounded
                fontSize="15px"
              >
                Buy it
              </ButtonCustom>

            </figcaption>
          </figure>
          <div className="card__content">
            <h4 className="card__heading">{getHeading(name)}</h4> <small className='card__brand'>
              Brand - {brand}
              </small>
            <h2 className="card__price">{`$${price}`}</h2>
          </div>
        </div>
      )}
    </>
  );
}

export const getHeading = (string) => {
  if (typeof string === 'string') {
    return string.trim().replace('-', ' ');
  }
}