import { Box, Text, Spinner } from '@chakra-ui/react';

const Preloader = () => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height="100vh"
    >
        <Text>RIDWAN SULAEMAN</Text>
      <Spinner size="xl" color="blue.500" />
    </Box>
  );
};

export default Preloader;