import { forwardRef } from 'react'
import Logo from './logo'
import NextLink from 'next/link'
import {
  Container,
  Box,
  Link,
  Stack,
  Heading,
  Flex,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  IconButton,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormControl,
  Input,
  ModalFooter,
  Button,
  Textarea,
  useColorModeValue,
  useDisclosure,
  useToast
} from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons'
import ThemeToggleButton from './theme-toggle-button'

const LinkItem = ({ href, path, target, children, ...props }) => {
  const active = path === href
  const inactiveColor = useColorModeValue('grey.800', 'whiteAlpha.900')
  return (
    <Link
      as={NextLink}
      href={href}
      scroll={false}
      rounded={5}
      w="60px"
      align="center"
      bg={active ? 'nvLinkColor' : undefined}
      color={active ? 'gray.900' : inactiveColor}
      target={target}
      style={{ textDecoration: 'none' }}
      _hover={{
        textDecoration: 'underline',
        background: 'nvLinkColor',
        color: 'gray.900'
      }}
      {...props}
    >
      {children}
    </Link>
  )
}

const MenuLink = forwardRef((props, ref) => (
  <Link ref={ref} as={NextLink} {...props} />
))

const Navbar = props => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast()

  const handleSave = e => {
    e.preventDefault()
    // save data here
    toast({
      position: 'top',
      title: 'Success',
      description: 'Thank you, we will get back to you soon',
      status: 'success',
      duration: 5000,
      isClosable: true
    })
    onClose(false)
  }

  const { path } = props

  return (
    <Box
      position="fixed"
      as="nav"
      w="100%"
      bg={useColorModeValue('#ffffff40', '#08090D40')}
      css={{ backdropFilter: 'blur(10px)' }}
      zIndex={2}
      {...props}
    >
      <Container
        align="center"
        display="flex"
        maxW="container.md"
        justify="space-between"
        p={2}
      >
        <Flex align="center" mr={1}>
          <Heading as="h1" size="lg" letterSpacing={'tighter'}>
            <Logo />
          </Heading>
        </Flex>

        <Stack
          direction={{ base: 'column', md: 'row' }}
          display={{ base: 'none', md: 'flex' }}
          width={{ base: 'full', md: 'auto' }}
          align="center"
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/works" path={path}>
            Works
          </LinkItem>
          <LinkItem href="/posts" path={path}>
            Posts
          </LinkItem>
          <LinkItem href="/">Uses</LinkItem>
        </Stack>

        <Box>
          <IconButton
            icon={<EmailIcon />}
            background="transparent"
            mr={2}
            size="md"
            onClick={onOpen}
          />
          <ThemeToggleButton />
        </Box>
        <Modal isOpen={isOpen} onClose={() => onClose(false)} isCentered>
          <ModalOverlay />
          <ModalContent
            bg="rgba(255, 255, 255, 0.05)"
            backdropFilter="blur(10px)"
          >
            <ModalHeader fontSize="3xl">Contact me.</ModalHeader>
            <ModalCloseButton />
            <ModalBody pb={6}>
              <FormControl>
                <Input placeholder="Full name" />
              </FormControl>

              <FormControl mt={4}>
                <Input placeholder="Email" />
              </FormControl>
              <FormControl mt={4}>
                <Textarea placeholder="Message" />
              </FormControl>
            </ModalBody>

            <ModalFooter>
              <Button variant="FullButton" mr={3} mb={3} onClick={handleSave}>
                Send
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Container>
    </Box>
  )
}

export default Navbar
