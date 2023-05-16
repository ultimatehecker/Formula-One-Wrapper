import * as React from "react";
import { useColorMode, IconButton, Flex, Button, Link, Heading, Box } from '@chakra-ui/react'
import { MoonIcon, SunIcon, HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import Image from "next/image";
import { useState } from 'react'
import carImage from '../../public/car.png'

const Navbar: React.FC = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const [display, changeDisplay] = useState('none')

  return (
    <Flex flexDirection="row" pos="fixed" zIndex={1} top={0} left={0} alignItems="center" justifyContent={{ base: "center", md: "space-between" }} width="100%" height="50px" bg="#19191c" color="#f9f9f9" boxSizing="border-box" p={{ base: "0 0 0 16px", lg: "auto" }}>

        {/* Desktop Content */}
        
        <Link href="/">
            <Flex  flexDirection="row" position='fixed' top="-1.65rem" left="-1rem" align="center">
                <Flex>
                    <Box m={0.5} bg="#ed4245" w="90%">
                        <Image src={carImage} alt="F1 Logo" width="201" height="60" />
                    </Box>
                </Flex>

                <Heading fontSize={16}>
                    Formula One Wrapper
                </Heading>
            </Flex>
        </Link>

        <Flex display={{ base: "none", md: "block" }} pos="static" w="auto" bg="transparent" flexDir="row">
            <Link href="/reference">
                <Button as="span" border={0} p="0 8px" bg="transparent" color="rgba(255, 255, 255, 0.5)" cursor="pointer" _active={{ color: "inherit" }}>
                    Documentation
                </Button>
            </Link>

            <Link href="/guide">
                <Button as="span" border={0} p="0 8px" bg="transparent" color="rgba(255, 255, 255, 0.5)" cursor="pointer" _active={{ color: "inherit" }}>
                    Guide
                </Button>
            </Link>

            <Link href="https://github.com/ultimatehecker/Formula-One-Wrapper" isExternal>
                <Button as="span" border={0} p="0 8px" bg="transparent" color="rgba(255, 255, 255, 0.5)" cursor="pointer" _active={{ color: "inherit" }}>
                    GitHub
                </Button>
            </Link>

            <IconButton icon={colorMode === 'light' ? <SunIcon /> : <MoonIcon />} size="md" paddingBlock={2} ml={2} variant="ghost" aria-label="btn" onClick={toggleColorMode}/>
            <IconButton aria-label="Open Menu" size="lg" ml={3} icon={<HamburgerIcon />} onClick={() => changeDisplay('flex')} display={['flex', 'flex', 'none', 'none']}/>
        </Flex>

        {/* Mobile Content */}

        <Flex w="100vw" display={display} zIndex={20} h="100vh" pos="fixed" top="0" left="0" bg='purple' overflowY="auto" flexDir="column"> 
            <Flex justify="flex-end">
                <IconButton mt={4} mr={4} bg='black' aria-label="Open Menu" size="lg" icon={<CloseIcon />} onClick={() => changeDisplay('none')}/>
            </Flex>

            <Flex flexDir="column" align="center">
                <Link href="/reference">
                    <Button as="span" variant="ghost" aria-label="Reference" my={5} w="100%">
                        Documentation
                    </Button>
                </Link>

                <Link href="/guide">
                    <Button as="span" variant="ghost" aria-label="Guide" my={5} w="100%">
                        Guide
                    </Button>
                </Link>

                <Link href="https://github.com/ultimatehecker/Formula-One-Wrapper" isExternal>
                    <Button as="span" variant="ghost" aria-label="GitHub" my={5} w="100%">
                        GitHub
                    </Button>
                </Link>
            </Flex>
        </Flex>
	</Flex>
  );                            
};

export default Navbar;