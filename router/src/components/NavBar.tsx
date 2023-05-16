import * as React from "react";
import { useColorMode, IconButton, Flex, Button, Link, Heading, Box } from '@chakra-ui/react'
import { MoonIcon, SunIcon, HamburgerIcon, CloseIcon } from '@chakra-ui/icons'
import Image from "next/image";
import { useState } from 'react'
import carImage from '../../public/car.png'

const Navbar: React.FC = () => {
  const [isOpen, toggleMenu] = React.useState(false);
  const { colorMode, toggleColorMode } = useColorMode()
  const [display, changeDisplay] = useState('none')

  return (
    <Flex pos="fixed" zIndex={1} top={0} left={0} alignItems="center" justifyContent={{ base: "center", md: "space-between" }} width="100%" height="50px" bg="#19191c" color="#f9f9f9" boxSizing="border-box" p={{ base: "0 0 0 16px", lg: "auto" }}>
        <Button border={0} bg="transparent" color="inherit" cursor="pointer" pos="absolute" top={0} left={0} placeItems="center" width="64px" height="64px" display={{ md: "none" }} onClick={() => toggleMenu(!isOpen)}>
            <span className="material-icons">Menu</span>
        </Button>
        
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

        {isOpen ? (
        <Flex pos="fixed" zIndex={3} top="0" left={0} w="270px" h="100%" p="20px" gap="8px" flexDir="column" alignItems="flex-start" bg="#000000" transition="translate 0.3s" visibility={{ md: "hidden" }}>
            <Link href="/reference">
                <Button border={0} p={0} bg="transparent" color="inherit" cursor="pointer">
                    Documentation
                </Button>
            </Link>

            <Link href="/guide">
                <Button border={0} p={0} bg="transparent" color="inherit" cursor="pointer">
                    Guide
                </Button>
            </Link>

            <Link href="https://github.com/ultimatehecker/Formula-One-Wrapper" isExternal>
                <Button border={0} p={0} bg="transparent" color="inherit" cursor="pointer">
                    GitHub
                </Button>
            </Link>
        </Flex>
        ) : (
        <Flex display={{ base: "none", md: "block" }} pos="static" w="auto" bg="transparent" flexDir="row">
            <Link href="/reference">
                <Button border={0} p="0 8px" bg="transparent" color="rgba(255, 255, 255, 0.5)" cursor="pointer" _active={{ color: "inherit" }}>
                    Documentation
                </Button>
            </Link>

            <Link href="/guide">
                <Button border={0} p="0 8px" bg="transparent" color="rgba(255, 255, 255, 0.5)" cursor="pointer" _active={{ color: "inherit" }}>
                    Guide
                </Button>
            </Link>

            <Link href="https://github.com/ultimatehecker/Formula-One-Wrapper" isExternal>
                <Button border={0} p="0 8px" bg="transparent" color="rgba(255, 255, 255, 0.5)" cursor="pointer" _active={{ color: "inherit" }}>
                    GitHub
                </Button>
            </Link>

            <IconButton
					icon={colorMode === 'light' ? <SunIcon /> : <MoonIcon />}
					size="md"
					paddingBlock={2}
					ml={2}
					variant="ghost"
					aria-label="btn"
					onClick={toggleColorMode}
				/>
				<IconButton
					aria-label="Open Menu"
					size="lg"
					ml={3}
					icon={<HamburgerIcon />}
					onClick={() => changeDisplay('flex')}
					display={['flex', 'flex', 'none', 'none']}
				/>
        </Flex>
        )}
    </Flex> 
  );                            
};

export default Navbar;