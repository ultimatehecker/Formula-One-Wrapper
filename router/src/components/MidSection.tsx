import { Box, Button, Flex, Heading, Link, List, ListItem, ListIcon, OrderedList, UnorderedList } from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons';
import { Roboto_Condensed, Roboto } from 'next/font/google';
import { Text } from '@chakra-ui/react';

const robotoCondensed = Roboto_Condensed({
  weight: '700',
  subsets: ['latin'],
});

const roboto = Roboto({
  weight: '400',
  subsets: ['latin'],
});
 
export const MidSection = () => (
<div>
  <Flex position='relative' flexDirection="column" right={280} bottom={20} top={0} marginTop='15' justifyContent="center" alignItems="center" height="35vh" bgClip="text">
    <Text className={robotoCondensed.className} color="white" fontSize="2rem">About</Text>
    <Text className={roboto.className} color="white" textAlign="center" fontSize="1rem"><strong>Formula-Simplified is a feature rich wrapper <Link color="red.600" href='http://ergast.com/mrd/' isExternal>Ergast API</Link> wrapper which <br /> makes it easier to grab data about the Formula Motorsport Racing <br /> Series.</strong></Text>

    <UnorderedList marginLeft={35} marginTop={30}>
      <ListItem color="white">Allows you to grab data from F1 (F2, F3 and FE coming soon!)</ListItem>
      <ListItem color="white">Detailed descriptions of drivers and constructions</ListItem>
      <ListItem color="white">Constantly is updated when new content comes out</ListItem>
    </UnorderedList>
  </Flex>

  <Flex position='relative' flexDirection="column" left={430} top={-362} marginTop='15' justifyContent="center" alignItems="center" height="35vh" bgClip="text">
    <Text className={robotoCondensed.className} color="white" fontSize="2rem">Statistics</Text>
    
    <List spacing={3} color="white" marginTop={2}>
      <ListItem>
        <ListIcon as={CheckCircleIcon} color='green.500' />
        Lorem ipsum dolor sit amet, consectetur adipisicing elit
      </ListItem>
      <ListItem>
        <ListIcon as={CheckCircleIcon} color='green.500' />
        Assumenda, quia temporibus eveniet a libero incidunt suscipit
      </ListItem>
      <ListItem>
        <ListIcon as={CheckCircleIcon} color='green.500' />
        Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
      </ListItem>
      <ListItem>
        <ListIcon as={CheckCircleIcon} color='green.500' />
        Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
      </ListItem>
    </List>
  </Flex>

  <Flex position='relative' flexDirection="column" right={225} top={-500} marginTop='15' justifyContent="center" alignItems="center" height="35vh" bgClip="text">
    <Button left={40} bg="#c21f1f">
      <Link href='/guide' color="white" textDecoration='none'>
        Get Started
      </Link>
    </Button>

    <Button left={275} bottom={10} bg="#c21f1f">
      <Link href='/stats' color="white" textDecoration='none'>
        Discord
      </Link>
    </Button>
  </Flex>
</div>
)