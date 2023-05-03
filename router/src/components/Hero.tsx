import { Flex, Heading } from '@chakra-ui/react'

export const Hero = ({ title }: { title: string }) => (
  <Flex
    position='relative'
    marginTop='0'
    justifyContent="center"
    alignItems="center"
    height="40vh"
    bgGradient="linear(to-l, #7928CA, #FF0080)"
    bgClip="text"
    >
    <Heading fontSize="6vw">{title}</Heading>
  </Flex>
)

Hero.defaultProps = {
  title: 'chakra-ui',
}