import { Container } from '@mui/material'
import React from 'react'
import ButtonCustom from '../../../component/Button'
import Layout from '../../../component/Layout'
import Annoucement from '../../../component/Annoucement';
import Banner from '../../../component/Banner';
import ImgMediaCard from '../../../component/ImgMediaCard';
// import bannerImg from '../'

const Guys = ({ data }) => {

  // console.log('bannerImg:', bannerImg);

  console.log(data);
  return (
    <Layout>
      <Annoucement>
        <Container>
          <p style={{ display: 'flex', justifyContent: 'space-between' }}>
            <span>Free Shipping On Orders Over US$99! </span>
            <div style={{ marginLeft: 'auto', display: 'inline-block' }}>
              {/* <ButtonCustom
                color={'#1c2121'}
                bgColor={'transparent'}
                href={'/shop/guys'}
                rounded
                hoverColor='white'
                fontSize="12px"
              >
                Shop Guys
              </ButtonCustom>
              &nbsp;&nbsp;&nbsp;
              <ButtonCustom
                color={'#1c2121'}
                bgColor={'transparent'}
                href={'/shop/girls'}
                hoverColor='white'
                rounded
                fontSize="12px"
              >
                Shop Girls
              </ButtonCustom> */}
            </div>
          </p>
        </Container>
      </Annoucement>

      {/* <Banner
        bgImg={bannerImg}
        articleAlign={'right'}
        heading={'Top Selling'}
        description=
        {` It’s the little things, like the vintage washes,
unique details & size availability, that make
these stand out. `}
        button={button1}
      /> */}

      <Container className='card__wrapper'>
        {data.products.map((eachData) => {
          return <ImgMediaCard product={eachData} linkBaseUrl={'/shop/girls'} key={eachData.id}/>
        })}
      </Container>
    </Layout>
  )
}

export default Guys

const button1 = [
  {
    text: 'Curvy High Rise',
    url: '/shop/girls/curvy-hight-rise'
  },
  {
    text: 'Curvy Ultra High',
    url: '/shop/girls/curvy-ultra-high'
  }
]

export const getStaticProps = async () => {

  const data = await (await fetch('http://localhost:3000/api/guys')).json();

  return {
    props: {
      data
    }
  }
} 