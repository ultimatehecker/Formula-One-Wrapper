import { Flex, Heading } from '@chakra-ui/react'
import { Bruno_Ace_SC } from 'next/font/google';
 
const roboto = Bruno_Ace_SC({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

export const Headline = ({ title }: { title: string }) => (
  <Flex position='relative' marginTop='0' justifyContent="center" alignItems="center" height="35vh" bgGradient="linear(to-l, #de6262, #ffb88c)" bgClip="text">
    <Heading fontSize="6vw">
        <div className={roboto.className}>
            {title}
        </div>
    </Heading>
  </Flex>
)

Headline.defaultProps = {
  title: 'chakra-ui',
}