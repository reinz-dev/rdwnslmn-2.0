import Head from 'next/head'
import dynamic from 'next/dynamic'
import NavBar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import Footer from '../footer'
import ParticlesBg from '../particlesBg'

const Main = ({ children, router }) => {
  return (
    <Box as="main" pb={8}>
      <ParticlesBg />
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content="rdwnslmn homepage" />
        <meta name="author" content="Ridwan Sulaeman" />
        <meta name="author" content="rdwnslmn" />
        <link rel="apple-touch-icon" href="apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" type="image/x-icon" />
        <meta property="og:type" content="website" />
        <title>rdwnslmn - homepage</title>
      </Head>

      <NavBar path={router.asPath} />

      <Container maxW="container.xl" pt={14}>
        {children}

        <Footer />
      </Container>
    </Box>
  )
}

export default Main
