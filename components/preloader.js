import { Box, Text, Flex } from '@chakra-ui/react'
import { motion } from 'framer-motion'

const Preloader = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
      <Flex gap={5} align="center">
        <Box w="20px" h="20px" bg="whitesmoke" rounded="full" mt={2}></Box>
        <Text fontSize={56} align="center">
          hello
        </Text>
      </Flex>
    </Box>
  )
}

export default Preloader
