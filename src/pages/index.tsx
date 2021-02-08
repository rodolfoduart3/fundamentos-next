import React from 'react'
import Head from 'next/head'

import LogoFile from '../assets/logofile.svg'
import { Container } from '../styles/pages/Home'

const Home: React.FC = () => {
  return (
    <Container>

      <Head>
        <title>Homepage</title>
      </Head>

      <LogoFile />
      <h1>ReactJS Strucuture</h1>
      <p>A ReactJS + Next.js sctructure made by Rocketseat.</p>

    </Container>
  )
}

export default Home
