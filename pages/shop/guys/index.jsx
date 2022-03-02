import { Container } from '@mui/material'
import React from 'react'
import Layout from '../../../component/Layout'
import Annoucement from '../../../component/Annoucement';
import ImgMediaCard from '../../../component/ImgMediaCard';

const Guys = ({ data }) => {

  return (
    <Layout>
      <Annoucement>
        <Container>
          <p style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>Free Shipping On Orders Over US$99! </span>
          </p>
        </Container>
      </Annoucement>

      <Container className='card__wrapper' id="guys-new-arrival">
        {data.products.map((eachData) => {
          return <ImgMediaCard product={eachData} linkBaseUrl={'/shop/guys'} key={eachData.id}/>
        })}
      </Container>
    </Layout>
  )
}

export default Guys

export const getStaticProps = async () => {

  const data = await (await fetch('http://localhost:3000/api/guys')).json();

  return {
    props: {
      data
    }
  }
} 