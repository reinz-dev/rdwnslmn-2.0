import Link from 'next/link'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'
import RdwnsLogo from './icons/RdwnsLogo'

const LogoBox = styled.span`
  font-weight: bold;
  font-size: 20px;
  display: inline-flex;
  align-items: center;
  height: 30px;
  line-height: 20px;
  padding: 5px;
  gap: 0.3rem;

  > svg {
    transition: 200ms ease;
  }

  &:hover > svg {
    transform: scale(1.5);
  }
`

const Logo = () => {
  return (
    <Link href="/" scroll={false}>
      <LogoBox>
        <RdwnsLogo />
        <Text
          color={useColorModeValue('gray.800', 'whiteAlpha.900')}
          fontFamily='Roboto", sans-serif'
          fontWeight="bold"
          ml={3}
        >
          rdwnslmn
        </Text>
      </LogoBox>
    </Link>
  )
}

export default Logo
