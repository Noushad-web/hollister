import { Container } from '@mui/material'
import Head from 'next/head'
import Image from 'next/image'
import Annoucement from '../component/Annoucement'
import Layout from '../component/Layout'

export default function Home() {
  return (
    <Layout>
      <Annoucement>
        <Container>
          <p>Free Shipping On Orders Over US$99! </p>
        </Container>
      </Annoucement>
    </Layout>
  )
}
