import { Box } from '@chakra-ui/react'

const separatorLarge = () => {
  return (
    <Box w="100%" h="100%" display="flex" gap={2}>
      <Box
        bg="gray.700"
        _dark={{ bg: 'whiteAlpha.800' }}
        w="100%"
        h="12px"
        rounded="lg"
      />
      <Box
        bg="gray.700"
        _dark={{ bg: 'whiteAlpha.800' }}
        w="15px"
        h="12px"
        rounded="lg"
      />
      <Box
        bg="gray.700"
        _dark={{ bg: 'whiteAlpha.800' }}
        w="15px"
        h="12px"
        rounded="lg"
      />
      <Box
        bg="gray.700"
        _dark={{ bg: 'whiteAlpha.800' }}
        w="15px"
        h="12px"
        rounded="lg"
      />
    </Box>
  )
}

export default separatorLarge
