import NextLink from 'next/link'
import {
  Container,
  Box,
  Flex,
  Text,
  SimpleGrid,
  Button,
  IconButton,
  chakra
} from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import thumbYouTube from '../public/Blank.jpg'
import thumbInkdrop from '../public/Blank.jpg'
import Image from 'next/image'
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
              fontSize="sm"
              variant="ResumeButton"
            >
              Resume CV
            </Button>
            <Button
              as={NextLink}
              href="/"
              mt={{ base: 4, md: 0 }}
              scroll={false}
              fontSize="sm"
              variant="ContactButton"
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
              src="/images/aboutMe.svg"
              alt="Profile image"
              width="363"
              height="93"
            />
          </Box>
        </Box>
        <Text mb={20}>
          lorem ipsum is simply dummy text of the printing and typesetting
          industry. lorem ipsum has been the industry standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. it has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. it was popularised in the 1960s with
          the release of letraset sheets containing lorem
        </Text>
      </Section>

      <Section delay={0.2}>
        <Box gap={5} mb={20}>
          <ProfileImage
            src="/images/works.svg"
            alt="Profile image"
            width="363"
            height="93"
          />
        </Box>

        <Box gap={2} mb={5}>
          <SimpleGrid columns={[1, 2, 3]} gap={6} mt={20} mb={20}>
            <GridItem href="/" title="rdwnslmn" thumbnail={thumbYouTube}>
              Lorem ipsum is simple dummy text
            </GridItem>
            <GridItem href="/" title="rdwnslmn" thumbnail={thumbInkdrop}>
              Lorem ipsum is simple dummy text
            </GridItem>
            <GridItem href="/" title="rdwnslmn" thumbnail={thumbInkdrop}>
              Lorem ipsum is simple dummy text
            </GridItem>
          </SimpleGrid>
        </Box>
      </Section>

      <Section delay={0.3}>
        <Box gap={5} mb={20}>
          <ProfileImage
            src="/images/skills.svg"
            alt="Profile image"
            width="363"
            height="93"
          />
        </Box>
        <SimpleGrid columns={[1, 2, 3, 4, 5]} gap={6} mt={20} mb={20}>
          <GridItem href="/" thumbnail={thumbYouTube}></GridItem>
          <GridItem href="/" thumbnail={thumbInkdrop}></GridItem>
          <GridItem href="/" thumbnail={thumbYouTube}></GridItem>
          <GridItem href="/" thumbnail={thumbInkdrop}></GridItem>
          <GridItem href="/" thumbnail={thumbInkdrop}></GridItem>
        </SimpleGrid>
      </Section>

      <Section delay={0.4}>
        <Box gap={5} mb={20}>
          <ProfileImage
            src="/images/interests.svg"
            alt="Profile image"
            width="363"
            height="93"
          />
        </Box>
        <SimpleGrid columns={[1, 2, 3, 4, 5]} gap={6} mt={20} mb={20}>
          <GridItem href="/" thumbnail={thumbYouTube}></GridItem>
          <GridItem href="/" thumbnail={thumbInkdrop}></GridItem>
          <GridItem href="/" thumbnail={thumbYouTube}></GridItem>
          <GridItem href="/" thumbnail={thumbInkdrop}></GridItem>
          <GridItem href="/" thumbnail={thumbInkdrop}></GridItem>
        </SimpleGrid>
        <Box align="center" my={5}>
          <Box align="center" mt={50} gap={1}>
            <IconButton as={NextLink} href="/works" bg="transparent" size="md">
              <FaTelegramPlane />
            </IconButton>
            <IconButton as={NextLink} href="/works" bg="transparent" size="md">
              <MdEmail />
            </IconButton>
            <IconButton as={NextLink} href="/works" bg="transparent" size="md">
              <FaLinkedin />
            </IconButton>
            <IconButton as={NextLink} href="/works" bg="transparent" size="md">
              <FaGithubSquare />
            </IconButton>
          </Box>
        </Box>
      </Section>
    </Container>
  </Layout>
)

export default Home
export { getServerSideProps } from '../components/chakra'
