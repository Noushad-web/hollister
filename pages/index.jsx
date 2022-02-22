import { Container } from '@mui/material'
import Image from 'next/image'
import Annoucement from '../component/Annoucement'
import Layout from '../component/Layout'
import Video from '../component/Video'

export default function Home() {

  return (
    <Layout>
      <Annoucement>
        <Container>
          <p>Free Shipping On Orders Over US$99! </p>
        </Container>
      </Annoucement>

      <Video />


    </Layout>
  )
}
