import NextLink from 'next/link'
import {
  Container,
  Heading,
  Box,
  Flex,
  Text,
  SimpleGrid,
  Button,
  IconButton,
  useColorModeValue,
  chakra
} from '@chakra-ui/react'
import Paragraph from '../components/paragraph'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import SeparatorLine from '../components/separator-line'
import { GridItem } from '../components/grid-item'
import thumbYouTube from '../public/Blank.jpg'
import thumbInkdrop from '../public/Blank.jpg'
import Image from 'next/image'

import { ChevronRightIcon } from '@chakra-ui/icons'
import { ImLocation } from 'react-icons/im'
import { FaTelegramPlane, FaLinkedin, FaGithubSquare } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const ProfileImage = chakra(Image, {
  shouldForwardProp: prop => ['width', 'height', 'src', 'alt'].includes(prop)
})
const Home = () => (
  <Layout>
    <Container align="center" maxW="container.md">
      <Box
        display={{ base: 'inline-block', md: 'inline-block' }}
        alignItems="center"
        mt={25}
      >
        <Box
          flexShrink={0}
          mt={{ base: 4, md: 10 }}
          ml={{ md: 6 }}
          textAlign="center"
        >
          <Box>
            <ProfileImage
              src="/images/avatar.svg"
              alt="Profile image"
              width="180"
              height="180"
            />
          </Box>
        </Box>
        <Box>
          <Box color="gray.300" mt={5}>
            Hello, I&apos;m{' '}
          </Box>
          <Box>
            <ProfileImage
              src="/images/name.svg"
              alt="Profile image"
              width="228"
              height="20"
              mt={2}
            />
          </Box>
          <Box align="center" mt={2}>
            <Text fontSize={20} color="gray.600">
              COST CONTROL
            </Text>
          </Box>
          <Flex mt={10} gap={5}>
            <Button
              as={NextLink}
              href="/"
              mt={{ base: 4, md: 0 }}
              scroll={false}
              colorScheme="blue"
              fontSize="sm"
            >
              Resume CV
            </Button>
            <Button
              as={NextLink}
              href="/"
              mt={{ base: 4, md: 0 }}
              scroll={false}
              colorScheme="blue"
              fontSize="sm"
              variant="outline"
            >
              Contact Me
            </Button>
          </Flex>
        </Box>
      </Box>
      <Section delay={0.1}>
        <Box mt={20} mb={20}>
          <Box>
            <ProfileImage
              src="/images/AboutMe.svg"
              alt="Profile image"
              width="363"
              height="93"
              mt={2}
            />
          </Box>
        </Box>
        <Paragraph>
          lorem ipsum is simply dummy text of the printing and typesetting
          industry. lorem ipsum has been the industry&#39;s standard dummy text
          ever since the 1500s, when an unknown printer took a galley of type
          and scrambled it to make a type specimen book. it has survived not
          only five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. it was popularised in the 1960s with
          the release of letraset sheets containing lorem
        </Paragraph>
        <Box my={4}>
          <Button
            as={NextLink}
            href="/works"
            scroll={false}
            rightIcon={<ChevronRightIcon />}
            colorScheme="blue"
          >
            Let&apos;s view
          </Button>
        </Box>
      </Section>
      <Section delay={0.2}>
        <Flex align="center" gap={5} mb={5}>
          <Heading as="h3" variant="section-title">
            Experience
          </Heading>
          <SeparatorLine />
        </Flex>
        <Flex alignItems="center">
          <Text maxW="20rem" fontSize="md" fontWeight={600}>
            Worked at
          </Text>
          <ChevronRightIcon mx={2} mb={1} />
          <Text fontWeight={600} mr={5}>
            PT. Jaya Konstruksi MP. Tbk
          </Text>
        </Flex>
        <Box mb={5} w="100%">
          <Flex alignItems="center" my={2}>
            <Button
              variant={useColorModeValue('BioLightButton', 'BioDarkButton')}
              h={6}
              w={12}
              pt={1}
              mr={2}
            >
              2020
            </Button>
            <ChevronRightIcon mr={2} />
            <Text
              color={useColorModeValue('gray.800', 'whiteAlpha.800')}
              pt={1}
            >
              Project Gedung Pasar Senen Blok 1 &amp; 2. Jakarta
            </Text>
          </Flex>
          <Flex alignItems="center" my={2}>
            <Button
              variant={useColorModeValue('BioLightButton', 'BioDarkButton')}
              h={6}
              w={12}
              pt={1}
              mr={2}
            >
              2019
            </Button>
            <ChevronRightIcon mr={2} />
            <Text
              color={useColorModeValue('gray.800', 'whiteAlpha.800')}
              pt={1}
            >
              Project Pemb Gedung SMF Rawat Inap. Banjarmasin
            </Text>
          </Flex>
          <Flex alignItems="center" my={2}>
            <Button
              variant={useColorModeValue('BioLightButton', 'BioDarkButton')}
              h={6}
              w={12}
              pt={1}
              mr={2}
            >
              2018
            </Button>
            <ChevronRightIcon mr={2} />
            <Text
              color={useColorModeValue('gray.800', 'whiteAlpha.800')}
              pt={1}
            >
              Project Rusun Rorotan. Jakarta
            </Text>
          </Flex>
          <Flex alignItems="center" my={2}>
            <Button
              variant={useColorModeValue('BioLightButton', 'BioDarkButton')}
              h={6}
              w={12}
              pt={1}
              mr={2}
            >
              2017
            </Button>
            <ChevronRightIcon mr={2} />
            <Text
              color={useColorModeValue('gray.800', 'whiteAlpha.800')}
              pt={1}
            >
              Project 6 Ruas Tol Pegangsaan Dua. Jakarta
            </Text>
          </Flex>
          <Flex alignItems="center" my={2}>
            <Button
              variant={useColorModeValue('BioLightButton', 'BioDarkButton')}
              h={6}
              w={12}
              pt={1}
              mr={2}
            >
              2016
            </Button>
            <ChevronRightIcon mr={2} />
            <Text
              color={useColorModeValue('gray.800', 'whiteAlpha.800')}
              pt={1}
            >
              Project RPTRA Wilayah Jakarta Utara. Jakarta
            </Text>
          </Flex>
          <Flex alignItems="center" my={2}>
            <Button
              variant={useColorModeValue('BioLightButton', 'BioDarkButton')}
              h={6}
              w={12}
              pt={1}
              mr={2}
            >
              2014
            </Button>
            <ChevronRightIcon mr={2} />
            <Text
              color={useColorModeValue('gray.800', 'whiteAlpha.800')}
              pt={1}
            >
              Project Akses Tanjung Priok. Jakarta
            </Text>
          </Flex>
          <Flex alignItems="center">
            <Button
              variant={useColorModeValue('BioLightButton', 'BioDarkButton')}
              h={6}
              w={12}
              pt={1}
              mr={2}
            >
              2013
            </Button>
            <ChevronRightIcon mr={2} />
            <Text
              color={useColorModeValue('gray.800', 'whiteAlpha.800')}
              pt={1}
            >
              Project Akses Terminal Pulo Gebang. Jakarta
            </Text>
          </Flex>
        </Box>
        <Flex alignItems="center">
          <Text maxW="20rem" fontSize="md" fontWeight={600}>
            Study
          </Text>
          <ChevronRightIcon mx={2} />
          <Text mr={5} fontWeight={600}>
            {' '}
            Until Senior High School
          </Text>
        </Flex>
        <Flex alignItems="center">
          <Text maxW="20rem" fontSize="md" fontWeight={600}>
            Born
          </Text>
          <ChevronRightIcon mx={2} />
          <Text mr={5} my={2} fontWeight={600}>
            Bogor, West Java. Indonesian
          </Text>
        </Flex>
      </Section>

      <Section delay={0.3}>
        <Flex alignItems="center" gap={2} mb={5}>
          <Heading width="10%" as="h3" variant="section-title">
            I ♥
          </Heading>
          <SeparatorLine />
        </Flex>
        <Paragraph>
          Design, Music, Drawing, Playing Games, Photography, Machine Learning
        </Paragraph>
      </Section>

      <Section delay={0.3}>
        <SimpleGrid columns={[1, 2, 2]} gap={6} mt={20}>
          <GridItem href="/" title="rdwnslmn" thumbnail={thumbYouTube}>
            Lorem ipsum is simple dummy text
          </GridItem>
          <GridItem href="/" title="rdwnslmn" thumbnail={thumbInkdrop}>
            Lorem ipsum is simple dummy text
          </GridItem>
        </SimpleGrid>

        <Box align="center" my={5}>
          <Flex justifyContent="center">
            <Flex alignItems="center" mt={50} gap={5}>
              <IconButton
                as={NextLink}
                href="/works"
                bg="transparent"
                size="md"
              >
                <FaTelegramPlane />
              </IconButton>
              <IconButton
                as={NextLink}
                href="/works"
                bg="transparent"
                size="md"
              >
                <MdEmail />
              </IconButton>
              <IconButton
                as={NextLink}
                href="/works"
                bg="transparent"
                size="md"
              >
                <FaLinkedin />
              </IconButton>
              <IconButton
                as={NextLink}
                href="/works"
                bg="transparent"
                size="md"
              >
                <FaGithubSquare />
              </IconButton>
            </Flex>
          </Flex>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
