import React from 'react'
import Layout from '../../../component/Layout';
import { Container } from '@mui/material'
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import ButtonCustom from '../../../component/Button';

const Slug = ({ data }) => {

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
  } = data;

  const props = {
    width: 400, height: 500, zoomWidth: 500, img: image,
    offset: {
      "vertical": 0,
      "horizontal": -150
    },
  };

  const stars = [
    '★',
    '★★',
    '★★★',
    '★★★★',
    '★★★★★'
  ]

  return (
    <Layout>
      <Container sx={{ margin: '3rem auto' }}>
        <Grid container spacing={2} >
          <Grid xs={6}>
            <figure >
              {/* <ReactImageZoom {...props} /> */}
              <Image src={image} width="400" height="500" />

            </figure>
          </Grid>
          <Grid xs={6} className='single-product'>
            <h2>{name}</h2>
            <p><i>Brand - {brand}</i>
              &nbsp; &nbsp;<span>{stars[rating]}</span>
            </p>
            <h1>&#36;{price} </h1>
            <i style={{ color: 'darkred' }}>{!stock ? 'Out of Stock' : 'In Stock'}</i>
            <p>{description}</p>

            {stock && <ButtonCustom
              color={'#1c2121'}
              bgColor={'transparent'}
              href={'#'}
              rounded
              hoverColor='white'
              fontSize="15px"
            >
              Buy Now
            </ButtonCustom>}
          </Grid>
        </Grid>
      </Container>
    </Layout>
  )
}

export default Slug

export const getStaticProps = async ({ params }) => {

  const data = await (await fetch(`http://localhost:3000/api/guys/${params.slug}`)).json();

  return {
    props: {
      data
    }
  }
}

export const getStaticPaths = async () => {

  const data = await (await fetch('http://localhost:3000/api/guys')).json();

  const paths = data.products.map((eachProduct) => ({
    params: { slug: eachProduct.slug },
  }))

  return {
    paths: paths,
    fallback: false,
  }
} 