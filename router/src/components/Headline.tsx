import { Box, Flex, Heading, Link } from '@chakra-ui/react'
import { Bruno_Ace_SC } from 'next/font/google';
 
const roboto = Bruno_Ace_SC({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
});

const Headline = ({ title }: { title: string }) => (
<div>
  <Flex position='relative' flexDirection="column" marginTop='15' justifyContent="center" alignItems="center" height="35vh" bgGradient="linear(to-l, #de6262, #ffb88c)" bgClip="text">
    <Heading fontSize="6vw">
      <div className={roboto.className}>
          {title}
      </div>
    </Heading>

    <div>
      <Box as='button' borderRadius='md' bg='tomato' color='white' px={4} h={8} marginTop={19}>
        <code>
          <Link href="https://www.npmjs.com/package/f1-api" isExternal>
            npm install f1-api
          </Link>
        </code>
      </Box>
    </div>
  </Flex>
</div>
)

Headline.defaultProps = {
  title: 'chakra-ui',
}

export default Headline