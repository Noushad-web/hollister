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

  console.log(name);

  return (
    <>
      {product && (
        <div className="card">
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
            <h4 className="card__heading">{getHeading(product.name)}</h4>
            <h2 className="card__price">{`$${product.price}`}</h2>
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