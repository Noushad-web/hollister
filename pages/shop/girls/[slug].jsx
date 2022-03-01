import React from 'react'
import Layout from '../../../component/Layout';
import { Container } from '@mui/material'
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import ReactImageZoom from 'react-image-zoom';

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
    width: 400, height: 500, zoomWidth: 500, img: image, offset:
    {
      "vertical": 0,
      "horizontal": -150    }
  };
  return (
    <Layout>
      <Container sx={{ margin: '3rem auto' }}>
        <Grid container spacing={2} >
          <Grid xs={6}>
            <figure >
              <ReactImageZoom {...props} />
              {/* <Image
                src={image}
                alt={name}
                width='100%'
                height='100%'
                layout="responsive"
                objectFit='cover' 
              /> */}
            </figure>
          </Grid>
          <Grid h2 xs={6}>
            <h2>xs=4</h2>
          </Grid>
        </Grid>
      </Container>
    </Layout>
  )
}

export default Slug

export const getStaticProps = async ({ params }) => {

  const data = await (await fetch(`http://localhost:3000/api/girls/${params.slug}`)).json();

  return {
    props: {
      data
    }
  }
}

export const getStaticPaths = async () => {

  const data = await (await fetch('http://localhost:3000/api/girls')).json();

  const paths = data.products.map((eachProduct) => ({
    params: { slug: eachProduct.slug },
  }))

  return {
    paths: paths,
    fallback: false,
  }
} 