import { Container } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import Annoucement from '../component/Annoucement'
import Layout from '../component/Layout'
import Video from '../component/Video'
import heroVideo from '../public/hero/22_SPR_HCO_JeansBrand_10_HPDesk_WEBSITE_5Mbps_V2.mp4'

export default function Home() {
  console.log('====================================');
  console.log(heroVideo);
  console.log('====================================');
  return (
    <Layout>
      <Annoucement>
        <Container>
          <p>Free Shipping On Orders Over US$99! </p>
        </Container>
      </Annoucement>

      {/* <Video videoUrl={heroVideo && heroVideo}/> */}
    </Layout>
  )
}
