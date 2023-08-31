import {
  ChakraProvider,
  cookieStorageManagerSSR,
  localStorageManager
} from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import theme from '../lib/theme'
import Preloader from './preloader';

export default function Chakra({ cookies, children }) {
  const colorModeManager =
    typeof cookies === 'string'
      ? cookieStorageManagerSSR(cookies)
      : localStorageManager
      
    const [loading, setLoading] = useState(true);

      useEffect(() => {
        // Simulasikan waktu loading dengan setTimeout
        setTimeout(() => {
          setLoading(false);
        }, 2000); // Ganti waktu sesuai kebutuhan Anda
      }, []);

  return (
    <ChakraProvider theme={theme} colorModeManager={colorModeManager}>
      {loading ? <Preloader /> : children}
    </ChakraProvider>
  )
}

export async function getServerSideProps({ req }) {
  return {
    props: {
      cookies: req.headers.cookie ?? ''
    }
  }
}
