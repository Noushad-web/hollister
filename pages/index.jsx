import { Container } from '@mui/material'
import Image from 'next/image'
import Annoucement from '../component/Annoucement'
import Banner from '../component/Banner'
import ButtonCustom from '../component/Button'
import Layout from '../component/Layout'
import Video from '../component/Video'
import banner1 from '../public/hero/hco-HP-D-20220217-LRJeans-SlimStraight-USCA.jpg'
import banner2 from '../public/hero/hco-HP-D-20220203-NewArrivals-APAC.webp'

const heading1 = 'THE JEANS THAT MAKE OUTFITTING EASY';
const description1 = 'Low-Rise Jeans & Slim Straight Jeans\,comin\' right up.'

const button1 = [
  {
    text: 'Shop Guys',
    url: '/shop/guys'
  },
  {
    text: 'Shop girls',
    url: '/shop/girls'
  }
]

const button2 = [
  {
    text: 'girls new arrival',
    url: '/shop/girls#girls-new-arrival'
  },
  {
    text: 'guys new arrival',
    url: '/shop/guys#guys-new-arrival'
  }
]
export default function Home() {
  console.log(banner1)
  return (
    <Layout>
      <Annoucement>
        <Container>
          <p style={{display: 'flex', justifyContent: 'space-between'}}>
            <span>Free Shipping On Orders Over US$99! </span>
            <div style={{marginLeft: 'auto', display: 'inline-block'}}>
              <ButtonCustom
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
              </ButtonCustom>
            </div>
          </p>
        </Container>
      </Annoucement>

      <Video />

      <Banner 
      bgImg={banner1} 
      articleAlign={'right'}
      heading = {heading1} 
      description = {description1}
      button = {button1}
      />

      <Banner 
      bgImg={banner2} 
      articleAlign={'center'}
        heading={'WE CALL THESE MUST-HAVES FOR A REASON'} 
        description={'Featuring new seamless fabric knits & elevated essentials that are the building blocks for countless jaw-dropping looks.'}
      button={button2}
      />

    </Layout>
  )
}
